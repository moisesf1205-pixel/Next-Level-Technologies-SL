import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacto = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero de la página */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl"
          >
            Ponte en contacto con nosotros
          </motion.p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h2 className="section-title accent-underline mb-8 pb-4">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Dirección</h3>
                    <p className="text-muted-foreground">Calle Arroyo del Soto 8, 28914<br />Leganés, Madrid</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Teléfono</h3>
                    <p className="text-muted-foreground">+34 913 11 85 71</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-muted-foreground">info@nextleveltechnologies.es</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Horario</h3>
                    <p className="text-muted-foreground">Lunes - Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Mapa interactivo */}
              <div className="mt-8">
                <h3 className="font-semibold text-primary mb-4">Nuestra ubicación</h3>
                <div className="rounded-lg overflow-hidden shadow-lg border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.234!2d-3.7634!3d40.3284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4188e4b1a6ebf1%3A0x0!2sCalle%20Arroyo%20del%20Soto%208%2C%2028914%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1706000000000!5m2!1ses!2ses"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Next Level Technologies"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div>
              <h2 className="section-title accent-underline mb-8 pb-4">
                Envíanos un mensaje
              </h2>
              <form 
                action="https://formspree.io/f/xykkwndd" 
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_to" value="mfernandez@nextleveltechnologies.es" />
                <input type="hidden" name="_subject" value="Nuevo mensaje desde la web NLT" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-primary mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-primary mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-primary mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none"
                    placeholder="Tu mensaje..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
