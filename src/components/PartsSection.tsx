import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Car, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PartsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

const PartsCard = ({ icon, title, description, delay, isInView }: PartsCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay }}
    className="bg-card p-8 rounded shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
  >
    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

const PartsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="parts" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title accent-underline mb-16 pb-4"
        >
          SOLUCIONES Y COMPONENTES
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <PartsCard
            icon={<Car size={28} />}
            title="Componentes electrónicos avanzados"
            description="Suministro de componentes electrónicos, sensores, módulos IoT y hardware especializado para proyectos de innovación industrial y tecnológica. Asesoría técnica y entrega rápida a nivel internacional."
            delay={0.2}
            isInView={isInView}
          />
          <PartsCard
            icon={<Shield size={28} />}
            title="Soluciones tecnológicas para defensa"
            description="Desarrollo y provisión de sistemas inteligentes, plataformas autónomas y soluciones a medida para defensa y seguridad. Integración de hardware y software para operaciones críticas."
            delay={0.4}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
};

export default PartsSection;
