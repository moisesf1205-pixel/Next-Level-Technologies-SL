import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/nlt-logo.png" 
                alt="Next Level Technologies" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Investigación y desarrollo de productos de alta tecnología. Soluciones tecnológicas innovadoras para la industria y la movilidad.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  Calle Arroyo del Soto 8, 28914, Leganés, Madrid
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-accent" />
                <span className="text-primary-foreground/80">+34 913 11 85 71</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-accent" />
                <span className="text-primary-foreground/80">info@nextleveltechnologies.es</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#maintenance" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  I+D
                </a>
              </li>
              <li>
                <a href="#parts" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Soluciones
                </a>
              </li>
              <li>
                <a href="#defense" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Defensa y Seguridad
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          <p>© {currentYear} NEXT LEVEL TECHNOLOGIES. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
