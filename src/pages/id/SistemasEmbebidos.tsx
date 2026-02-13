import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import roboticaImage from '@/assets/robotica.jpg';

const SistemasEmbebidos = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <Link
            to="/mantenimiento-ingenieria"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Mantenimiento e Ingenieria
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Robotica
          </motion.h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Automatizacion y sistemas roboticos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Diseñamos e integramos soluciones de <strong className="text-primary">robotica aplicada</strong> para tareas de inspeccion, apoyo a mantenimiento y operacion remota.
                </p>
                <p>
                  Combinamos control, sensorizacion y software de mando para mejorar seguridad de personal,
                  reducir tiempos de intervencion y aumentar precision en entornos complejos.
                </p>
                <p>
                  Desarrollamos arquitecturas escalables para plataformas terrestres y estaciones de trabajo tecnico.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Capacidades</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Control remoto y asistencia semiautonoma.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Integracion de vision, camaras termicas y sensores tacticos.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Planificacion de mantenimiento robotizado en taller y campo.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Pruebas de interoperabilidad con sistemas de mando y control.</span></li>
              </ul>
            </div>

            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img
                  src={roboticaImage}
                  alt="Robotica aplicada"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Modelos de implementacion</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-primary">Celda tecnica:</strong> automatizacion de tareas repetitivas en taller.</p>
                  <p><strong className="text-primary">Unidad movil:</strong> robotica desplegable para apoyo en campo.</p>
                  <p><strong className="text-primary">Puesto remoto:</strong> supervision y control desde centro de operaciones.</p>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Quieres automatizar procesos?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Te ayudamos a definir una hoja de ruta robotica realista y escalable.
                </p>
                <Link to="/contacto" className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:bg-accent/90 transition-colors">
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

export default SistemasEmbebidos;
