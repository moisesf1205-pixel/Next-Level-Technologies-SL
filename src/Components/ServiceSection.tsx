import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bgColor?: 'white' | 'gray';
  linkTo?: string;
}

const ServiceSection = ({
  id,
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt,
  reverse = false,
  bgColor = 'white',
  linkTo = '/contacto',
}: ServiceSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      className={`py-20 lg:py-32 ${bgColor === 'gray' ? 'bg-secondary' : 'bg-background'}`}
    >
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image - shown first on mobile, order changes on desktop based on reverse */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`${reverse ? 'lg:order-2' : 'lg:order-1'} order-2`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[350px] lg:h-[450px] object-cover rounded shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${reverse ? 'lg:order-1' : 'lg:order-2'} order-1`}
          >
            <h2 className="section-title accent-underline mb-6 pb-4">
              {title}
            </h2>
            {subtitle && (
              <h3 className="section-subtitle mb-6">{subtitle}</h3>
            )}
            <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
              {content}
            </div>
            <Link to={linkTo} className="btn-primary mt-8 inline-block">
              SABER MÁS
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
