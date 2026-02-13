import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Users, Rocket } from 'lucide-react';
import { useState } from 'react';

const TrabajaConNosotros = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    puesto: '',
    mensaje: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Integración con Formspree
    const response = await fetch('https://formspree.io/f/xykkwndd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        asunto: `Candidatura: ${formData.puesto}`,
      }),
    });
    if (response.ok) {
      alert('¡Gracias por tu interés! Hemos recibido tu candidatura.');
      setFormData({ nombre: '', email: '', telefono: '', puesto: '', mensaje: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const ofertas = [
    {
      titulo: 'Ingeniero/a de Software Embebido',
      ubicacion: 'Leganés, Madrid',
      tipo: 'Tiempo completo',
      descripcion: 'Desarrollo de firmware y aplicaciones embebidas en C/C++ para sistemas de control.',
    },
    {
      titulo: 'Ingeniero/a Electrónico',
      ubicacion: 'Leganés, Madrid',
      tipo: 'Tiempo completo',
      descripcion: 'Diseño de PCBs, esquemáticos y validación de prototipos electrónicos.',
    },
    {
      titulo: 'Desarrollador/a Full Stack',
      ubicacion: 'Leganés, Madrid (Híbrido)',
      tipo: 'Tiempo completo',
      descripcion: 'Desarrollo de aplicaciones web con React, Node.js y bases de datos.',
    },
  ];

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
            Trabaja con Nosotros
          </motion.h1>
        </div>
      </section>

      {/* Por qué trabajar con nosotros */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">¿Por qué unirte a NLT?</h2>
            <p className="text-muted-foreground leading-relaxed">
              En NEXT LEVEL TECHNOLOGIES buscamos personas apasionadas por la tecnología que quieran formar parte de proyectos innovadores y de alto impacto. Ofrecemos un entorno de trabajo dinámico donde el desarrollo profesional y personal son prioritarios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border text-center"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket size={28} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Proyectos Innovadores</h3>
              <p className="text-muted-foreground text-sm">
                Trabaja en tecnología de vanguardia para sectores de alta exigencia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border text-center"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Equipo Colaborativo</h3>
              <p className="text-muted-foreground text-sm">
                Un ambiente de trabajo donde se valora el talento y la iniciativa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border text-center"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={28} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Desarrollo Profesional</h3>
              <p className="text-muted-foreground text-sm">
                Formación continua y oportunidades de crecimiento dentro de la empresa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ofertas actuales */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-8">Ofertas Actuales</h2>
          
          <div className="space-y-4">
            {ofertas.map((oferta, index) => (
              <motion.div
                key={oferta.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{oferta.titulo}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-secondary/50 rounded-full text-muted-foreground">
                        {oferta.ubicacion}
                      </span>
                      <span className="text-xs px-2 py-1 bg-accent/20 rounded-full text-accent">
                        {oferta.tipo}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{oferta.descripcion}</p>
                  </div>
                  <button 
                    onClick={() => setFormData({ ...formData, puesto: oferta.titulo })}
                    className="whitespace-nowrap bg-primary text-primary-foreground px-4 py-2 rounded font-medium hover:bg-primary/90 transition-colors text-sm"
                  >
                    Aplicar
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de candidatura */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Envía tu Candidatura</h2>
            <p className="text-muted-foreground text-center mb-8">
              ¿No encuentras una oferta que encaje contigo? Envíanos tu CV y te tendremos en cuenta para futuras oportunidades.
            </p>

            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-primary mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-primary mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="puesto" className="block text-sm font-medium text-primary mb-2">
                    Puesto de interés
                  </label>
                  <select
                    id="puesto"
                    name="puesto"
                    value={formData.puesto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition bg-background"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Ingeniero/a de Software Embebido">Ingeniero/a de Software Embebido</option>
                    <option value="Ingeniero/a Electrónico">Ingeniero/a Electrónico</option>
                    <option value="Desarrollador/a Full Stack">Desarrollador/a Full Stack</option>
                    <option value="Candidatura espontánea">Candidatura espontánea</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="mensaje" className="block text-sm font-medium text-primary mb-2">
                  Cuéntanos sobre ti
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none"
                  placeholder="Experiencia, formación, motivación..."
                ></textarea>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:bg-accent/90 transition-colors"
                >
                  Enviar candidatura
                </button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Al enviar este formulario aceptas nuestra política de privacidad y el tratamiento de tus datos para procesos de selección.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrabajaConNosotros;
