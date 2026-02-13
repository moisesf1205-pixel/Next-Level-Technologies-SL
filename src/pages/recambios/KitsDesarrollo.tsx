import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const KitsDesarrollo = () => {
  const kits = [
    {
      nombre: 'Kit Iniciación IoT',
      descripcion: 'Todo lo necesario para comenzar con proyectos de Internet de las Cosas.',
      contenido: ['ESP32 DevKit', 'Sensores básicos (temperatura, humedad, luz)', 'Módulo relay', 'Protoboard y cables', 'Documentación y tutoriales'],
      nivel: 'Principiante',
      imagen: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80',
    },
    {
      nombre: 'Kit Robótica Móvil',
      descripcion: 'Componentes para construir y programar un robot móvil autónomo.',
      contenido: ['Chasis con motores DC', 'Arduino Mega', 'Driver de motores L298N', 'Sensores ultrasónicos', 'Batería LiPo y cargador'],
      nivel: 'Intermedio',
      imagen: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
    },
    {
      nombre: 'Kit Control Industrial',
      descripcion: 'Solución completa para aplicaciones de automatización industrial.',
      contenido: ['PLC compatible Arduino', 'Relés de estado sólido', 'Sensores industriales', 'Pantalla HMI táctil', 'Fuente de alimentación 24V'],
      nivel: 'Avanzado',
      imagen: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    },
    {
      nombre: 'Kit Comunicaciones RF',
      descripcion: 'Desarrollo de sistemas de comunicación inalámbrica de largo alcance.',
      contenido: ['Módulos LoRa SX1276', 'Antenas y conectores', 'Microcontroladores', 'Baterías recargables', 'Carcasas IP65'],
      nivel: 'Intermedio',
      imagen: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    },
    {
      nombre: 'Kit Visión Artificial',
      descripcion: 'Hardware para proyectos de procesamiento de imagen y visión por computador.',
      contenido: ['Raspberry Pi 4 (4GB)', 'Cámara HQ con óptica', 'Coral USB Accelerator', 'Iluminación LED', 'Estructura de montaje'],
      nivel: 'Avanzado',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    },
    {
      nombre: 'Kit Sensores Avanzados',
      descripcion: 'Colección de sensores de precisión para aplicaciones exigentes.',
      contenido: ['IMU 9-DOF', 'Sensor LIDAR', 'GPS RTK', 'Sensores de presión', 'Interfaz de adquisición de datos'],
      nivel: 'Avanzado',
      imagen: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <Link 
            to="/recambios" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Recambios
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Kits de Desarrollo
          </motion.h1>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestros kits de desarrollo están diseñados para acelerar el prototipado y la validación de conceptos. Cada kit incluye componentes seleccionados, documentación técnica y soporte de nuestro equipo de ingeniería.
            </p>
          </div>
        </div>
      </section>

      {/* Kits */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kits.map((kit, index) => (
              <motion.div
                key={kit.nombre}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Imagen del kit */}
                <div className="aspect-video bg-secondary/30 overflow-hidden">
                  <img 
                    src={kit.imagen} 
                    alt={kit.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-primary">{kit.nombre}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      kit.nivel === 'Principiante' ? 'bg-green-100 text-green-700' :
                      kit.nivel === 'Intermedio' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {kit.nivel}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{kit.descripcion}</p>
                  
                  <details className="group">
                    <summary className="text-sm font-medium text-accent cursor-pointer hover:underline">
                      Ver contenido
                    </summary>
                    <ul className="mt-3 space-y-1">
                      {kit.contenido.map((item) => (
                        <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Kits Personalizados</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            ¿Necesitas un kit adaptado a tu proyecto específico? Diseñamos soluciones a medida con los componentes que necesitas.
          </p>
          <Link 
            to="/contacto"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:bg-accent/90 transition-colors"
          >
            Solicitar kit personalizado
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KitsDesarrollo;
