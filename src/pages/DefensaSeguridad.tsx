import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Servicio {
  titulo: string;
  imagen: string | null;
  enlace: string;
}

const DefensaSeguridad = () => {
  const servicios: Servicio[] = [
    {
      titulo: 'Sistemas de Control Remoto',
      imagen: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
      enlace: '/defensa-seguridad/sistemas-control',
    },
    {
      titulo: 'Electrónica Embebida',
      imagen: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      enlace: '/defensa-seguridad/electronica-embebida',
    },
    {
      titulo: 'Comunicaciones Seguras',
      imagen: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
      enlace: '/defensa-seguridad/comunicaciones',
    },
    {
      titulo: 'Integración de Sensores',
      imagen: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
      enlace: '/defensa-seguridad/sensores',
    },
    {
      titulo: 'Software de Mando y Control',
      imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      enlace: '/defensa-seguridad/software-mando',
    },
    {
      titulo: 'Desarrollo de Prototipos',
      imagen: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
      enlace: '/defensa-seguridad/prototipos',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero de la página */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Defensa y Seguridad
          </motion.h1>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => (
              <motion.div
                key={servicio.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={servicio.enlace}
                  className="group block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Imagen o placeholder */}
                  <div className="aspect-[4/3] bg-secondary/30 relative overflow-hidden">
                    {servicio.imagen ? (
                      <img
                        src={servicio.imagen}
                        alt={servicio.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                        <span className="text-muted-foreground text-sm">Imagen</span>
                      </div>
                    )}
                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  
                  {/* Título sobre la imagen */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {servicio.titulo}
                    </h3>
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

export default DefensaSeguridad;
