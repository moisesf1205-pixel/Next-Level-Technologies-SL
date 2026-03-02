import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Crear un favicon SVG simple
const svgFavicon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <!-- Fondo degradado azul -->
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1071BA;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0d5a99;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Círculo de fondo -->
  <circle cx="32" cy="32" r="32" fill="url(#grad)"/>
  
  <!-- Letras NLT -->
  <text x="32" y="42" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle">NLT</text>
</svg>`;

const publicDir = path.join(__dirname, 'public');

// Crear directorio si no existe
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Guardar archivo
fs.writeFileSync(
  path.join(publicDir, 'favicon.svg'),
  svgFavicon,
  'utf-8'
);

console.log('✅ Favicon SVG creado: favicon.svg');
console.log('El archivo está en: public/favicon.svg');
