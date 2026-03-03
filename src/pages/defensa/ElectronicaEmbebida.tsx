import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ElectronicaEmbebida = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <Link 
            to="/defensa-seguridad" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Defensa y Seguridad
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Electrónica Embebida
          </motion.h1>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Texto principal */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Diseño y Desarrollo de Hardware a Medida
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> cuenta con un equipo de ingenieros especializados en el diseño de sistemas electrónicos embebidos para aplicaciones de alta exigencia.
                </p>
                <p>
                  Desde la conceptualización hasta la fabricación de prototipos y series cortas, ofrecemos un servicio integral que abarca el diseño de esquemáticos, layout de PCB, selección de componentes y validación funcional.
                </p>
                <p>
                  Nuestros diseños están orientados a cumplir requisitos de robustez, bajo consumo y operación en rangos de temperatura extendidos, según las necesidades de cada proyecto.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Servicios de Electrónica</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Diseño de PCB:</strong> Placas multicapa con tecnología SMD y through-hole.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Microcontroladores:</strong> Programación de ARM, STM32, ESP32 y otros.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Interfaces de potencia:</strong> Drivers para motores, relés y actuadores.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Adquisición de datos:</strong> Conversores ADC/DAC y acondicionamiento de señal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Comunicaciones:</strong> CAN, RS485, SPI, I2C, UART y protocolos inalámbricos.</span>
                </li>
              </ul>
            </div>

            {/* Imagen y proceso */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" 
                  alt="Electrónica embebida PCB"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Nuestro Proceso</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span>Análisis de requisitos y especificaciones técnicas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span>Diseño de esquemático y selección de componentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span>Layout de PCB y revisión DFM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span>Fabricación y montaje de prototipos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <span>Validación, pruebas y documentación</span>
                  </li>
                </ol>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">¿Tienes un proyecto en mente?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Cuéntanos tu idea y te ayudamos a hacerla realidad.
                </p>
                <Link 
                  to="/contacto"
                  className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:bg-accent/90 transition-colors"
                >
                  Contáctenos para saber más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElectronicaEmbebida;
