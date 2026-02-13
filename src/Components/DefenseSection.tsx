import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

interface DefenseSectionProps {
  imageSrc: string;
}

const DefenseSection = ({ imageSrc }: DefenseSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title accent-underline mb-8 pb-4">
              PROYECTOS
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                NEXT LEVEL TECHNOLOGIES es referente en <strong className="text-primary">innovación y desarrollo</strong> de soluciones tecnológicas para el sector defensa y seguridad, colaborando con organismos nacionales e internacionales en proyectos de alta exigencia.
              </p>
              <p>
                Nuestra experiencia abarca desde sistemas autónomos hasta integración de plataformas inteligentes y software avanzado para operaciones críticas.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-primary mb-3">En NEXT LEVEL TECHNOLOGIES:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Desarrollamos <strong className="text-primary">plataformas autónomas</strong> y vehículos inteligentes para misiones especiales.</li>
                  <li>Implementamos <strong className="text-primary">sistemas electrónicos y de comunicación</strong> de última generación.</li>
                  <li>Ofrecemos <strong className="text-primary">soluciones personalizadas</strong> en integración de hardware y software.</li>
                  <li>Proporcionamos <strong className="text-primary">tecnología de análisis y control</strong> para operaciones seguras y eficientes.</li>
                  <li>Contamos con un equipo multidisciplinar de <strong className="text-primary">ingenieros y expertos en defensa</strong>.</li>
                </ul>
              </div>
            </div>

            {/* Proyectos destacados */}
            <div className="mt-8 p-6 bg-secondary rounded">
              <p className="font-semibold text-primary mb-4">Algunos de nuestros proyectos:</p>
              <div className="mb-3">
                <span className="font-medium text-primary">Plataformas autónomas:</span>{' '}
                <span className="text-muted-foreground">Desarrollo de vehículos no tripulados para reconocimiento y logística.</span>
              </div>
              <div className="mb-3">
                <span className="font-medium text-primary">Sistemas de control:</span>{' '}
                <span className="text-muted-foreground">Integración de software de mando y control para operaciones tácticas.</span>
              </div>
              <div className="mb-3">
                <span className="font-medium text-primary">Ciberseguridad y comunicaciones:</span>{' '}
                <span className="text-muted-foreground">Soluciones de protección de datos y redes seguras para entornos críticos.</span>
              </div>
              <div className="mb-3">
                <span className="font-medium text-primary">Simulación y entrenamiento:</span>{' '}
                <span className="text-muted-foreground">Plataformas virtuales para formación de personal en escenarios de defensa.</span>
              </div>
            </div>

            <Link to="/defensa-seguridad" className="btn-primary mt-8 inline-block">
              SABER MÁS
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={imageSrc}
              alt="Vehículo de defensa"
              className="w-full h-[400px] lg:h-[600px] object-cover rounded shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DefenseSection;
