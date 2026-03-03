import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ugvImage from '@/assets/ugv-descargas.png';

const SistemasEmbebidos = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Robótica
          </motion.h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Robótica
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Diseñamos e integramos soluciones de <strong className="text-primary">robótica aplicada</strong> para tareas de inspección, apoyo a mantenimiento y operación remota.
                </p>
                <p>
                  Combinamos control, sensorización y software de mando para mejorar seguridad de personal,
                  reducir tiempos de intervención y aumentar precisión en entornos complejos.
                </p>
                <p>
                  Desarrollamos arquitecturas escalables para plataformas terrestres y estaciones de trabajo técnico.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Capacidades</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Control remoto y asistencia semiautónoma.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Integración de visión, cámaras térmicas y sensores tácticos.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Planificación de mantenimiento robotizado en taller y campo.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Pruebas de interoperabilidad con sistemas de mando y control.</span></li>
              </ul>
            </div>

            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img
                  src={ugvImage}
                  alt="Robotica aplicada"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Modelos de implementación</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-primary">Celda técnica:</strong> tareas especializadas en taller.</p>
                  <p><strong className="text-primary">Unidad móvil:</strong> robótica desplegable para apoyo en campo.</p>
                  <p><strong className="text-primary">Puesto de control remoto:</strong> supervisión y control desde centro de operaciones.</p>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">¿Necesitas sistemas robóticos?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Te ayudamos a definir una hoja de ruta robótica realista y escalable.
                </p>
                <Link to="/contacto" className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:bg-accent/90 transition-colors">
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

export default SistemasEmbebidos;



