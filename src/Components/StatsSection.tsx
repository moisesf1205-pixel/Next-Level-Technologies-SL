import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  { number: 25, suffix: '', label: 'Años en I+D', sublabel: 'Innovación continua' },
  { number: 120, suffix: '', label: 'Especialistas', sublabel: 'En tecnología avanzada' },
  { number: 450, suffix: '', label: 'Soluciones', sublabel: 'Implementadas' },
];

const CountUp = ({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <span>
      {count}
      <span className="text-accent">{suffix}</span>
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title accent-underline mb-16 pb-4 text-center mx-auto w-fit"
        >
          NEXT LEVEL TECHNOLOGIES EN CIFRAS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-6xl lg:text-7xl font-bold text-primary mb-2 inline-block">
                <CountUp target={stat.number} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-lg font-semibold text-primary mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
