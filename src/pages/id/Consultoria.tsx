import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import embarcacionNaval from '@/assets/embarcacion-naval.jpg';

const Consultoria = () => {
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
            Naval
          </motion.h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Ingeniería y sostenimiento en entorno marítimo
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Prestamos soporte <strong className="text-primary">naval</strong> para sistemas de plataforma,
                  equipos auxiliares y ciclos de mantenimiento en base y despliegue.
                </p>
                <p>
                  Trabajamos con enfoque de ciclo de vida: inspección, planificación de intervención,
                  reposición de componentes y verificación operativa final.
                </p>
                <p>
                  Adaptamos procedimientos a requisitos técnicos y normativos aplicables a operaciones marítimas.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Líneas de trabajo</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Mantenimiento preventivo y correctivo de sistemas de a bordo.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Integración de equipos eléctricos, electrónicos y de comunicaciones.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Planificación de disponibilidad de flota y ventanas de servicio.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Documentación técnica y reporte de estado para auditoría operativa.</span></li>
              </ul>
            </div>

            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img
                  src={embarcacionNaval}
                  alt="Soporte naval"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Resultado operativo</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-primary">Mayor disponibilidad:</strong> menos tiempo fuera de servicio.</p>
                  <p><strong className="text-primary">Riesgo controlado:</strong> trazabilidad y evidencia técnica.</p>
                  <p><strong className="text-primary">Sostenimiento estable:</strong> planificación realista de recursos.</p>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Te apoyamos en tu programa naval</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Analizamos tu escenario y proponemos un plan de mantenimiento e ingeniería ajustado a misión.
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

export default Consultoria;
