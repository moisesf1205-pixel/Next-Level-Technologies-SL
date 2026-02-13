import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

interface AboutSectionProps {
  imageSrc: string;
}

const AboutSection = ({ imageSrc }: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title accent-underline mb-8 pb-4">
              NEXT LEVEL TECHNOLOGIES
            </h2>
            <h3 className="section-subtitle mb-6">
              NEXT LEVEL TECHNOLOGIES | Investigación y Desarrollo
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> nos especializamos en <strong className="text-primary">investigación y desarrollo de productos de alta tecnología</strong>, combinando innovación tecnológica con soluciones prácticas para diversos sectores industriales.
              </p>
              <p>
                Ponemos toda nuestra <strong className="text-primary">capacidad y experiencia</strong> a su alcance en:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-primary">Investigación y desarrollo de soluciones tecnológicas</strong></li>
                <li>Diseño y <strong className="text-primary">desarrollo de productos innovadores</strong>, desde conceptualización, prototipado, hasta producción en serie.</li>
                <li><strong className="text-primary">Consultoría técnica y optimización de procesos</strong></li>
              </ul>
              <p>
                Con un sólido <strong className="text-primary">equipo de profesionales altamente cualificados</strong> e <strong className="text-primary">instalaciones</strong> de última generación, nos posicionamos como líderes en el desarrollo de soluciones de siguiente nivel.
              </p>
            </div>
            <Link to="/quienes-somos" className="btn-primary mt-8 inline-block">
              SABER MÁS
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={imageSrc}
              alt="Instalaciones NEXT LEVEL TECHNOLOGIES"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
