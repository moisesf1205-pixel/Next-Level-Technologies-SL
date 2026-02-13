import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import contenedorRunflats from '@/assets/contenedor-runflats.jpg';
import m113Image from '@/assets/m113-robotizado.jpg';

const projects = [
  {
    title: 'T55',
    description: 'Programa de modernizacion integral para plataformas T55 con arquitectura digital, sensores avanzados y aumento de supervivencia.',
    href: '/proyectos/t55',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/T-55_main_battle_tank.jpg',
  },
  {
    title: 'Contenedores',
    description: 'Contenedores ISO para almacenamiento y gestion de runflats, con trazabilidad de stock y acceso rapido en despliegue.',
    href: '/proyectos/contenedores',
    image: contenedorRunflats,
  },
  {
    title: 'M113 robotizado',
    description: 'Robotizacion de vehiculos M113 con control remoto, sensores tacticos y navegacion asistida.',
    href: '/proyectos/m113-robotizado',
    image: m113Image,
  },
  {
    title: 'Drones',
    description: 'Sistemas aereos no tripulados para reconocimiento, apoyo logistico y enjambres cooperativos.',
    href: '/proyectos/drones',
    image: 'https://images.unsplash.com/photo-1508615070457-7baeba4003e5?w=900&q=80&auto=format&fit=crop',
  },
];

const Proyectos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight"
          >
            Proyectos
          </motion.h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/80">
            Seleccion de programas especiales que combinan integracion electronica, software critico y plataformas
            terrestres y aereas para misiones de alto impacto.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg shadow-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{project.description}</p>
                <Link
                  to={project.href}
                  className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Ver detalle
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Proyectos;
