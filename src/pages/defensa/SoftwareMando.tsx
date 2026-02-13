import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SoftwareMando = () => {
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
            Software de Mando y Control
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
                Supervisión y Gestión de Operaciones
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> desarrollamos aplicaciones de software para la supervisión, control y análisis de operaciones en tiempo real.
                </p>
                <p>
                  Nuestras plataformas ofrecen interfaces intuitivas que permiten a los operadores gestionar múltiples sistemas, visualizar información georreferenciada y tomar decisiones basadas en datos actualizados al instante.
                </p>
                <p>
                  Utilizamos tecnologías modernas de desarrollo (React, Node.js, Python), arquitecturas escalables que facilitan la integración con sistemas existentes y la evolución futura del software.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Funcionalidades Clave</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Visualización GIS:</strong> Mapas interactivos con capas de información personalizables.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Monitorización de flotas:</strong> Seguimiento en tiempo real de vehículos y activos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Alertas y notificaciones:</strong> Sistema configurable de avisos ante eventos críticos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Registro de actividad:</strong> Histórico completo para análisis posterior.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Integración de vídeo:</strong> Visualización en stream de cámaras remotas.</span>
                </li>
              </ul>
            </div>

            {/* Imagen y tecnologías */}
            <div>
              <div className="aspect-video bg-secondary/30 rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                  alt="Software de mando y control"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Tecnologías Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'WebSocket', 'REST API', 'Docker', 'Leaflet/OpenLayers', 'MQTT'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border mt-6">
                <h3 className="text-xl font-bold text-primary mb-4">Despliegue Flexible</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Instalación on-premise en servidores del cliente</li>
                  <li>• Despliegue en cloud privado o híbrido</li>
                  <li>• Aplicaciones de escritorio multiplataforma</li>
                  <li>• Acceso web responsive desde cualquier dispositivo</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">¿Necesitas una plataforma de control?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Te ayudamos a diseñar la solución que mejor se adapte a tus operaciones.
                </p>
                <Link 
                  to="/contacto"
                  className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:bg-accent/90 transition-colors"
                >
                  Contactar
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

export default SoftwareMando;
