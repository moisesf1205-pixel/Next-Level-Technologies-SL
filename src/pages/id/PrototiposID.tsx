import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import tankImage from '@/assets/tank-maintenance-3.jpg';

const PrototiposID = () => {
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
            MRO
          </motion.h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Mantenimiento, Reparación y Overhaul
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> ejecutamos programas MRO para plataformas terrestres de alta exigencia,
                  con foco en disponibilidad, seguridad y control de configuración.
                </p>
                <p>
                  Gestionamos inspecciones, recuperación de componentes, reparaciones estructurales y puesta a punto final,
                  con criterios de calidad orientados a misiones continuas.
                </p>
                <p>
                  Nuestro enfoque combina procedimientos técnicos, control documental y validación funcional antes de la entrega.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Alcance de servicio</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Inspección inicial y diagnóstico de fallos.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Desmontaje, inspección técnica y reemplazo de conjuntos críticos.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Overhaul de sistemas mecánicos, eléctricos e hidráulicos.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Pruebas de aceptación y entrega con informe de trazabilidad.</span></li>
              </ul>
            </div>

            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img src={tankImage} alt="MRO de tanques" className="w-full h-full object-cover" />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Fases MRO</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong className="text-primary">01 - Recepción técnica:</strong> revisión de estado, kilometraje, horas y historial.</p>
                  <p><strong className="text-primary">02 - Intervención:</strong> reparación, sustitución y ajuste de sistemas.</p>
                  <p><strong className="text-primary">03 - Validación:</strong> pruebas estáticas, dinámicas y checklist final.</p>
                  <p><strong className="text-primary">04 - Entrega:</strong> documentación, recomendaciones y plan de sostenimiento.</p>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">¿Necesitas un plan MRO?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Te ayudamos a definir alcance, plazos y requisitos técnicos para tu flota.
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

export default PrototiposID;
