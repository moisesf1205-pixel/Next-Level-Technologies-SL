import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Sensores = () => {
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
            Integración de Sensores
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
                Percepción del Entorno en Tiempo Real
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> integra sistemas sensoriales avanzados en plataformas móviles y estáticas, permitiendo la captura y procesamiento de información del entorno en tiempo real.
                </p>
                <p>
                  Desde cámaras de alta resolución hasta sensores LIDAR y sistemas de posicionamiento, nuestras soluciones proporcionan datos precisos para la toma de decisiones en operaciones críticas.
                </p>
                <p>
                  Desarrollamos interfaces de fusión de datos que combinan información de múltiples sensores para ofrecer una visión completa y coherente del escenario operativo.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Tipos de Sensores</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Cámaras electro-ópticas:</strong> Visión diurna HD, zoom óptico y seguimiento automático.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Cámaras térmicas:</strong> Detección en condiciones de baja visibilidad o nocturnas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">LIDAR:</strong> Mapeo 3D del entorno y detección de obstáculos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">GPS/GNSS:</strong> Posicionamiento de alta precisión con corrección diferencial.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">IMU:</strong> Unidades inerciales para navegación y estabilización.</span>
                </li>
              </ul>
            </div>

            {/* Imagen y capacidades */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80" 
                  alt="Sensores y percepción"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Capacidades de Integración</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fusión de datos multisensor</li>
                  <li>• Calibración y sincronización temporal</li>
                  <li>• Interfaces estándar (GigE Vision, USB3, MIPI)</li>
                  <li>• Procesamiento embebido en edge computing</li>
                  <li>• Visualización en tiempo real</li>
                  <li>• Grabación y almacenamiento de datos</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Soluciones a medida</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Diseñamos el sistema sensorial que mejor se adapte a tu plataforma.
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

export default Sensores;
