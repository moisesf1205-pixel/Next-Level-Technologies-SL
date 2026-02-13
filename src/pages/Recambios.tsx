import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Categoria {
  titulo: string;
  imagen: string | null;
  enlace: string;
}

const Recambios = () => {
  const categorias: Categoria[] = [
    {
      titulo: 'Componentes Electrónicos',
      imagen: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      enlace: '/recambios/componentes-electronicos',
    },
    {
      titulo: 'Kits de Desarrollo',
      imagen: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&q=80',
      enlace: '/recambios/kits-desarrollo',
    },
    {
      titulo: 'Acceso Clientes',
      imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      enlace: '/recambios/acceso-clientes',
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
            Recambios
          </motion.h1>
        </div>
      </section>

      {/* Grid de categorías */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((categoria, index) => (
              <motion.div
                key={categoria.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={categoria.enlace}
                  className="group block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Imagen o placeholder */}
                  <div className="aspect-[4/3] bg-secondary/30 relative overflow-hidden">
                    {categoria.imagen ? (
                      <img
                        src={categoria.imagen}
                        alt={categoria.titulo}
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
                      {categoria.titulo}
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

export default Recambios;
