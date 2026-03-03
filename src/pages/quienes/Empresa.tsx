import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import instalacionesNlt from '@/assets/instalaciones-nlt.png';

const Empresa = () => {
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
            Empresa
          </motion.h1>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Texto principal */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                NEXT LEVEL TECHNOLOGIES
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> es una empresa de ingeniería y desarrollo tecnológico con sede en Leganés (Madrid), especializada en el diseño e implementación de soluciones avanzadas para los sectores de defensa, seguridad e industria.
                </p>
                <p>
                  Fundada por un equipo de ingenieros con amplia experiencia en electrónica, software embebido y sistemas de comunicación, nuestra empresa nace con el objetivo de ofrecer soluciones tecnológicas de alto valor añadido, combinando innovación con un profundo conocimiento técnico.
                </p>
                <p>
                  Desde nuestras instalaciones en la <strong className="text-primary">Calle Arroyo del Soto 8, 28914, Leganés</strong>, desarrollamos proyectos de I+D para clientes nacionales e internacionales, abarcando desde la conceptualización inicial hasta la entrega de productos funcionales validados.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Nuestras Capacidades</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En NLT ponemos toda nuestra <strong className="text-primary">capacidad y experiencia</strong> a disposición de nuestros clientes:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong className="text-primary">Investigación y desarrollo</strong> de soluciones tecnológicas a medida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Diseño de <strong className="text-primary">electrónica embebida</strong> y sistemas de control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Desarrollo de <strong className="text-primary">software y firmware</strong> especializado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong className="text-primary">Integración de sistemas</strong> y plataformas complejas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong className="text-primary">Consultoría técnica</strong> y asesoramiento especializado</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Imagen e información */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img 
                  src={instalacionesNlt} 
                  alt="Instalaciones de NLT en Leganés"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Datos de la Empresa</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <span className="font-medium text-primary">Razón Social:</span>
                    <p>NEXT LEVEL TECHNOLOGIES S.L.</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Sede:</span>
                    <p>Calle Arroyo del Soto 8<br />28914, Leganés (Madrid)</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Teléfono:</span>
                    <p>+34 913 11 85 71</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Email:</span>
                    <p>info@nextleveltechnologies.es</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border mt-6">
                <h3 className="text-xl font-bold text-primary mb-4">Sectores de Actividad</h3>
                <div className="flex flex-wrap gap-2">
                  {['Defensa', 'Seguridad', 'Industrial', 'Telecomunicaciones', 'Automoción', 'Aeroespacial'].map((sector) => (
                    <span 
                      key={sector}
                      className="px-3 py-1 bg-secondary/50 text-primary rounded-full text-sm font-medium"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">¿Quieres conocernos?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Visita nuestras instalaciones o contacta con nosotros para más información.
                </p>
                <Link 
                  to="/contacto"
                  className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:bg-accent/90 transition-colors"
                >
                  Contáctenos para saber más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Empresa;
