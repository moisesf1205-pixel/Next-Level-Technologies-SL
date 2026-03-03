import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Comunicaciones = () => {
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
            Comunicaciones Seguras
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
                Transmisión de Datos Cifrada y Fiable
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> implementamos soluciones de comunicación diseñadas, para entornos donde la seguridad y la integridad de los datos son críticas.
                </p>
                <p>
                  Nuestros sistemas combinan hardware especializado y protocolos de cifrado avanzados, para garantizar que la información transmitida permanezca protegida frente a interceptaciones y manipulaciones.
                </p>
                <p>
                  Trabajamos con tecnologías tanto cableadas como inalámbricas, adaptando cada solución a las condiciones operativas específicas del cliente.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Tecnologías Implementadas</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Cifrado AES-256:</strong> Protección de datos con estándares de grado militar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Enlaces punto a punto:</strong> Comunicaciones dedicadas de baja latencia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Redes mesh:</strong> Topologías resilientes con redundancia automática.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">RF y banda ancha:</strong> Soluciones adaptadas a diferentes rangos de frecuencia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">VPN y túneles seguros:</strong> Conexiones protegidas sobre redes públicas.</span>
                </li>
              </ul>
            </div>

            {/* Imagen y características */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" 
                  alt="Sistemas de comunicaciones"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Ventajas de Nuestras Soluciones</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl font-bold text-accent">256-bit</div>
                    <div className="text-sm text-muted-foreground">Cifrado AES</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl font-bold text-accent">&lt;50ms</div>
                    <div className="text-sm text-muted-foreground">Latencia típica</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl font-bold text-accent">99.9%</div>
                    <div className="text-sm text-muted-foreground">Disponibilidad</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl font-bold text-accent">Multi</div>
                    <div className="text-sm text-muted-foreground">Redundancia</div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Consulta sin compromiso</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Analizamos tus necesidades de comunicación y proponemos la mejor solución.
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

export default Comunicaciones;
