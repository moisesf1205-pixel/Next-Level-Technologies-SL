#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const Client = require('basic-ftp').Client;
const chokidar = require('chokidar');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Configuración FTP (cámbia con tus datos)
const FTP_CONFIG = {
  host: process.env.FTP_HOST || 'ftp.nextleveltechnologies.es',
  user: process.env.FTP_USER || 'tu_usuario_ftp',
  password: process.env.FTP_PASSWORD || 'tu_contraseña_ftp',
  port: 21,
};

const REMOTE_DIR = '/public_html'; // O la ruta correcta en GoDaddy

let isBuilding = false;
let buildTimeout = null;

async function uploadToFTP() {
  const client = new Client();
  try {
    await client.access(FTP_CONFIG);
    console.log('✅ Conectado a GoDaddy');

    // Cambiar a directorio remoto
    await client.cd(REMOTE_DIR);

    // Eliminar archivos antiguos
    console.log('🗑️  Limpiando archivos antiguos...');
    try {
      const files = await client.list();
      for (const file of files) {
        if (file.isFile) {
          await client.remove(file.name);
        }
      }
    } catch (err) {
      console.log('⚠️  No se pudieron eliminar archivos antiguos');
    }

    // Subir archivos nuevos
    console.log('📤 Subiendo archivos...');
    await client.uploadFromDir(path.join(__dirname, 'dist'));
    console.log('✅ Archivos subidos exitosamente a GoDaddy');
  } catch (err) {
    console.error('❌ Error FTP:', err.message);
  } finally {
    await client.close();
  }
}

function buildProject() {
  if (isBuilding) {
    console.log('⏳ Build en progreso, se hará otro después...');
    clearTimeout(buildTimeout);
    buildTimeout = setTimeout(buildProject, 2000);
    return;
  }

  isBuilding = true;
  console.log('\n🔨 Compilando proyecto...');

  const build = spawn('npm', ['run', 'build'], {
    cwd: __dirname,
    stdio: 'inherit',
  });

  build.on('close', async (code) => {
    isBuilding = false;

    if (code === 0) {
      console.log('✅ Build completado');
      console.log('📤 Subiendo a GoDaddy...\n');
      await uploadToFTP();
    } else {
      console.error('❌ Build fallido');
    }
  });
}

// Vigilar cambios
console.log('👀 Vigilando cambios en src/...\n');

const watcher = chokidar.watch(path.join(__dirname, 'src'), {
  ignored: /(^|[\/\\])\.|node_modules/,
  persistent: true,
});

watcher.on('change', (filePath) => {
  console.log(`📝 Archivo modificado: ${path.relative(__dirname, filePath)}`);
  buildProject();
});

watcher.on('error', (error) => {
  console.error('❌ Error de vigilancia:', error);
});

console.log('🚀 Sistema de auto-deploy activado');
console.log('💾 Guarda un archivo en src/ para compilar y subir automáticamente\n');
