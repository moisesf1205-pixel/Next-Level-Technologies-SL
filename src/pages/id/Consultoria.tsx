import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Consultoria = () => {
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
            Naval
          </motion.h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Ingenieria y sostenimiento en entorno maritimo
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Prestamos soporte <strong className="text-primary">naval</strong> para sistemas de plataforma,
                  equipos auxiliares y ciclos de mantenimiento en base y despliegue.
                </p>
                <p>
                  Trabajamos con enfoque de ciclo de vida: inspeccion, planificacion de intervencion,
                  reposicion de componentes y verificacion operativa final.
                </p>
                <p>
                  Adaptamos procedimientos a requisitos tecnicos y normativos aplicables a operaciones maritimas.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Lineas de trabajo</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Mantenimiento preventivo y correctivo de sistemas de a bordo.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Integracion de equipos electricos, electronicos y de comunicaciones.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Planificacion de disponibilidad de flota y ventanas de servicio.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Documentacion tecnica y reporte de estado para auditoria operativa.</span></li>
              </ul>
            </div>

            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&q=80"
                  alt="Soporte naval"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Resultado operativo</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-primary">Mayor disponibilidad:</strong> menos tiempo fuera de servicio.</p>
                  <p><strong className="text-primary">Riesgo controlado:</strong> trazabilidad y evidencia tecnica.</p>
                  <p><strong className="text-primary">Sostenimiento estable:</strong> planificacion realista de recursos.</p>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Te apoyamos en tu programa naval</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Analizamos tu escenario y proponemos un plan de mantenimiento e ingenieria ajustado a mision.
                </p>
                <Link to="/contacto" className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:bg-accent/90 transition-colors">
                  Hablar con un tecnico
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
