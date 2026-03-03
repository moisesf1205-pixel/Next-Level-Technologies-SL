import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit?: () => void;
  }
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const setLanguage = (lang: 'es' | 'en') => {
    const value = lang === 'en' ? '/es/en' : '/es/es';
    document.cookie = `googtrans=${value};path=/`;
    document.cookie = `googtrans=${value};domain=${window.location.hostname};path=/`;
    window.location.reload();
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div id="google_translate_element" className="hidden" />
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
                <a href="/#/quienes-somos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="/#/mantenimiento-ingenieria" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Mantenimiento e Ingeniería
                </a>
              </li>
              <li>
                <a href="/#/proyectos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/#/actualidad" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Actualidad
                </a>
              </li>
              <li>
                <a href="/#/contacto" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <span className="text-xs uppercase tracking-wider">Idioma:</span>
                  <button
                    type="button"
                    onClick={() => setLanguage('es')}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    ES
                  </button>
                  <span>/</span>
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    EN
                  </button>
                </div>
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
