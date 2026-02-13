import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Prototipos = () => {
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
            Desarrollo de Prototipos
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
                De la Idea al Producto Funcional
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> ofrece servicios integrales de prototipado rápido, permitiendo validar conceptos y funcionalidades antes de pasar a la fase de producción.
                </p>
                <p>
                  Nuestro equipo multidisciplinar abarca todas las fases del desarrollo: desde el diseño mecánico y electrónico hasta la programación de software y la integración de sistemas.
                </p>
                <p>
                  Contamos con instalaciones propias en Leganés (Madrid) equipadas con herramientas de fabricación, impresión 3D, equipos de soldadura y bancos de pruebas para validación funcional.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Nuestro Enfoque</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Iteración rápida:</strong> Ciclos cortos de desarrollo para ajustes continuos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Diseño para fabricación:</strong> Prototipos pensados para escalar a producción.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Validación temprana:</strong> Pruebas funcionales desde las primeras fases.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Documentación completa:</strong> Planos, esquemas y manuales técnicos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Confidencialidad:</strong> Acuerdos NDA y protocolos de seguridad de la información.</span>
                </li>
              </ul>
            </div>

            {/* Imagen y fases */}
            <div>
              <div className="aspect-video bg-secondary/30 rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80" 
                  alt="Prototipo de defensa" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Fases del Proyecto</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Definición de requisitos</h4>
                      <p className="text-sm text-muted-foreground">Análisis de necesidades y especificaciones técnicas</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Diseño conceptual</h4>
                      <p className="text-sm text-muted-foreground">Bocetos, modelado 3D y simulaciones</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Fabricación</h4>
                      <p className="text-sm text-muted-foreground">Construcción del prototipo físico funcional</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      04
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Validación</h4>
                      <p className="text-sm text-muted-foreground">Pruebas de funcionamiento y ajustes finales</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">¿Tienes una idea?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Cuéntanos tu proyecto y te ayudamos a materializarlo.
                </p>
                <Link 
                  to="/contacto"
                  className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:bg-accent/90 transition-colors"
                >
                  Empezar proyecto
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

export default Prototipos;
