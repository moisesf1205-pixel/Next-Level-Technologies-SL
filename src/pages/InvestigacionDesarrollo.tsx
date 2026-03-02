import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import tankImage from '@/assets/tank-maintenance-3.jpg';
import ugvImage from '@/assets/ugv-descargas.png';
import embarcacionNaval from '@/assets/embarcacion-naval.jpg';

interface Servicio {
  titulo: string;
  descripcion: string;
  imagen: string;
  enlace: string;
}

const servicios: Servicio[] = [
  {
    titulo: 'MRO',
    descripcion: 'Mantenimiento, reparación y overhaul de plataformas críticas con trazabilidad técnica.',
    imagen: tankImage,
    enlace: '/mantenimiento-ingenieria/mro',
  },
  {
    titulo: 'Robótica',
    descripcion: 'Integración de sistemas robóticos para operación remota, asistencia y apoyo técnico.',
    imagen: ugvImage,
    enlace: '/mantenimiento-ingenieria/robotica',
  },
  {
    titulo: 'Logística',
    descripcion: 'Planificación, cadena de suministro y soporte operativo para disponibilidad sostenida.',
    imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    enlace: '/mantenimiento-ingenieria/logistica',
  },
  {
    titulo: 'Naval',
    descripcion: 'Ingeniería y soporte para sistemas marítimos, flota y mantenimiento en ciclo de vida.',
    imagen: embarcacionNaval,
    enlace: '/mantenimiento-ingenieria/naval',
  },
];

const InvestigacionDesarrollo = () => {
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
            Mantenimiento e Ingeniería
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-primary-foreground/85 max-w-3xl"
          >
            Capacidades integradas en MRO, Robótica, Logística y Naval para sostener operaciones exigentes.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, index) => (
              <motion.div
                key={servicio.titulo}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Link
                  to={servicio.enlace}
                  className="group block h-full rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {servicio.titulo}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 bg-card h-full">
                    <p className="text-sm text-muted-foreground leading-relaxed">{servicio.descripcion}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestigacionDesarrollo;




