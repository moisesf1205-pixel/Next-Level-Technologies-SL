import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jorge De León',
    role: 'CEO',
    description: 'Jorge de León, con un doctorado en Robótica, es director ejecutivo y cofundador de NLT, y una de las principales referencias en Europa en autonomía táctica. Lidera el diseño de sistemas autónomos para defensa y emergencias, incluyendo vehículos totalmente autónomos, UGV logísticos y soluciones modulares para plataformas legacy. Representa a España en paneles de robótica de la OTAN y promueve el desarrollo de tecnologías escalables, de doble uso y orientadas a la misión.',
    image: '/team/jorge-deleon.jpg',
    linkedin: 'https://www.linkedin.com/in/jorge-de-leon-rivas/',
  },
  {
    name: 'Coronel Andrés Fernández Savín',
    role: 'Director de Desarrollo de Negocio',
    description: 'Andrés Fernández Savín, coronel de Infantería (R), aporta más de 40 años de experiencia en defensa y gestión de programas estratégicos. Ha liderado unidades y programas especiales de armamento y material, como el Leopardo 2E, el Pizarro/Centauro y el Pizarro Fase 2. Actualmente dirige el Área de Desarrollo de Negocio de NLT, impulsando alianzas, oportunidades y presencia institucional a nivel nacional e internacional.',
    image: '/team/andres-savin.jpg',
    linkedin: 'https://www.linkedin.com/in/andres-fernandez-savin-673b24349/',
  },
  {
    name: 'Joendry Rafael Chirinos',
    role: 'Director del Departamento de MRO',
    description: 'Joendry Chirinos es ingeniero mecánico con más de 17 años de experiencia en los sectores de defensa, industrial y automoción. Como director técnico en NLT, lidera proyectos de modernización de vehículos blindados legacy, mediante ingeniería inversa e integración de arquitecturas digitales para mejorar su desempeño y vida útil.',
    image: '/team/joendry-chirinos.jpg',
    linkedin: 'https://www.linkedin.com/in/joendry-rafael-chirinos-colina-6b525415a/',
  },
];

const Equipo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Nuestro Equipo
          </motion.h1>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Conoce a nuestros profesionales
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Profesionales especializados que se encargan de nuestro éxito
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Imagen */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden bg-secondary/20 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Información */}
                <div className="w-full lg:w-2/3">
                  <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold text-lg mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin size={20} />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">¿Quieres formar parte del equipo?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Estamos siempre en búsqueda de talento. Si te interesa trabajar con nosotros, no dudes en contactarnos.
          </p>
          <Link 
            to="/contacto"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:bg-accent/90 transition-colors"
          >
            Contáctenos para saber más
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipo;
