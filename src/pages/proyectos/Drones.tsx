import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const Drones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <Link to="/proyectos" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
            <ArrowLeft size={18} />
            Volver a Proyectos
          </Link>
          <h1 className="text-4xl font-bold">Drones y UAS</h1>
          <p className="mt-3 max-w-3xl text-primary-foreground/80">
            Soluciones UAS para ISR, apoyo logístico y operaciones cooperativas, con cargas útiles modulares.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Desarrollo y adaptación de drones multirotor y ala fija con control terrestre seguro, enlaces cifrados y capacidad de operación BVLOS bajo normativa aplicable.
            </p>
            <ul className="space-y-2">
              <li>• Cámaras EO/IR estabilizadas y designadores láser opcionales.</li>
              <li>• Integración de cargas útiles modulares: SIGINT ligera, altavoces, kits de entrega.</li>
              <li>• Algoritmos de navegación autónoma y vuelo en enjambre.</li>
              <li>• Estaciones GCS rugerizadas con baterías hot-swap.</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-xl border border-border"
          >
            <img
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1400&q=80&auto=format&fit=crop"
              alt="Dron profesional en vuelo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Drones;
