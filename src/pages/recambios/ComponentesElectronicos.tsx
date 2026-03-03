import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ComponentesElectronicos = () => {
  const categorias = [
    {
      nombre: 'Microcontroladores',
      descripcion: 'ARM Cortex, STM32, ESP32, Arduino y compatibles para desarrollo de sistemas embebidos.',
      items: ['STM32F4/F7/H7', 'ESP32/ESP8266', 'Arduino Nano/Mega', 'Raspberry Pi Pico'],
    },
    {
      nombre: 'Sensores',
      descripcion: 'Amplia gama de sensores para aplicaciones industriales y de investigación.',
      items: ['Acelerómetros e IMUs', 'Sensores de temperatura', 'Ultrasonidos y LIDAR', 'Sensores de corriente'],
    },
    {
      nombre: 'Módulos de Comunicación',
      descripcion: 'Componentes para conectividad inalámbrica y cableada.',
      items: ['WiFi y Bluetooth', 'LoRa y Zigbee', 'Módulos GPS/GNSS', 'Transceptores RF'],
    },
    {
      nombre: 'Componentes de Potencia',
      descripcion: 'Electrónica de potencia para control de motores y alimentación.',
      items: ['Drivers de motor', 'Reguladores de tensión', 'Convertidores DC-DC', 'Relés de estado sólido'],
    },
    {
      nombre: 'Conectores y Cables',
      descripcion: 'Conectores industriales y cables especializados.',
      items: ['Conectores militares', 'Cables blindados', 'Conectores impermeables', 'Arneses a medida'],
    },
    {
      nombre: 'PCBs y Prototipado',
      descripcion: 'Placas de circuito impreso y material de prototipado.',
      items: ['PCBs multicapa', 'Placas de prototipado', 'Kits de soldadura', 'Pasta y flux'],
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
            Componentes Electrónicos
          </motion.h1>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              En <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> suministramos componentes electrónicos de alta tecnología para proyectos de desarrollo e integración. Trabajamos con fabricantes de confianza y ofrecemos asesoramiento técnico para seleccionar los componentes más adecuados a cada aplicación.
            </p>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((cat, index) => (
              <motion.div
                key={cat.nombre}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{cat.nombre}</h3>
                <p className="text-muted-foreground text-sm mb-4">{cat.descripcion}</p>
                <ul className="space-y-1">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contacta con nuestro equipo técnico. Podemos localizar componentes específicos o sugerir alternativas compatibles.
          </p>
          <Link 
            to="/contacto"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:bg-accent/90 transition-colors"
          >
            Contáctenos para saber más
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComponentesElectronicos;
