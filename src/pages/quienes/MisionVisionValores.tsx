import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Handshake } from 'lucide-react';

const MisionVisionValores = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <Link 
            to="/quienes-somos" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Quiénes Somos
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Misión, Visión y Valores
          </motion.h1>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-lg shadow-lg border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Desarrollar soluciones tecnológicas innovadoras y de alta tecnología que respondan a las necesidades específicas de nuestros clientes, contribuyendo al avance de los sectores de defensa, seguridad e industria mediante la aplicación de conocimiento técnico especializado y un compromiso constante con la excelencia.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-lg shadow-lg border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como un referente en el desarrollo de tecnología avanzada en España, destacando por nuestra capacidad de innovación, la calidad de nuestras soluciones y la confianza que depositamos en las relaciones a largo plazo con nuestros clientes y colaboradores.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Nuestros Valores</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                titulo: 'Innovación',
                descripcion: 'Buscamos constantemente nuevas formas de resolver problemas y mejorar nuestras soluciones, manteniéndonos a la vanguardia tecnológica.',
              },
              {
                titulo: 'Calidad',
                descripcion: 'Nos comprometemos con la excelencia en cada proyecto, aplicando rigurosos estándares de control en todos nuestros procesos.',
              },
              {
                titulo: 'Integridad',
                descripcion: 'Actuamos con honestidad y transparencia en todas nuestras relaciones, cumpliendo nuestros compromisos y respetando la confidencialidad.',
              },
              {
                titulo: 'Colaboración',
                descripcion: 'Trabajamos en equipo, tanto internamente como con nuestros clientes, fomentando la comunicación abierta y el apoyo mutuo.',
              },
              {
                titulo: 'Responsabilidad',
                descripcion: 'Asumimos la responsabilidad de nuestras acciones y decisiones, comprometiéndonos con el éxito de cada proyecto.',
              },
              {
                titulo: 'Mejora Continua',
                descripcion: 'Aprendemos de cada experiencia y nos esforzamos por mejorar constantemente nuestros procesos, productos y servicios.',
              },
            ].map((valor, index) => (
              <motion.div
                key={valor.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-lg border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{valor.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{valor.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Nuestro Compromiso</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En NEXT LEVEL TECHNOLOGIES nos comprometemos a ofrecer soluciones tecnológicas que superen las expectativas de nuestros clientes, manteniendo siempre los más altos estándares de calidad, ética profesional y responsabilidad social. Creemos que la tecnología debe servir para mejorar la vida de las personas y contribuir al desarrollo de una sociedad más segura y eficiente.
            </p>
            <Link 
              to="/contacto"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:bg-accent/90 transition-colors"
            >
              Trabaja con nosotros
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MisionVisionValores;
