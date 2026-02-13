import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Seccion {
  titulo: string;
  imagen: string | null;
  enlace: string;
}

const QuienesSomos = () => {
  const secciones: Seccion[] = [
    {
      titulo: 'Empresa',
      imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      enlace: '/quienes-somos/empresa',
    },
    {
      titulo: 'Misión, Visión y Valores',
      imagen: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      enlace: '/quienes-somos/mision-vision-valores',
    },
    {
      titulo: 'Calidad y Certificaciones',
      imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      enlace: '/quienes-somos/calidad-certificaciones',
    },
    {
      titulo: 'Equipo',
      imagen: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      enlace: '/quienes-somos/equipo',
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
            Quiénes Somos
          </motion.h1>
        </div>
      </section>

      {/* Grid de secciones */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {secciones.map((seccion, index) => (
              <motion.div
                key={seccion.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={seccion.enlace}
                  className="group block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Imagen o placeholder */}
                  <div className="aspect-[4/3] bg-secondary/30 relative overflow-hidden">
                    {seccion.imagen ? (
                      <img
                        src={seccion.imagen}
                        alt={seccion.titulo}
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
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {seccion.titulo}
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

export default QuienesSomos;
