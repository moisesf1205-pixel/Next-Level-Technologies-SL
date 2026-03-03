import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Lock, Mail } from 'lucide-react';
import { useState } from 'react';

const AccesoClientes = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <Link 
            to="/recambios" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Recambios
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Acceso Clientes
          </motion.h1>
        </div>
      </section>

      {/* Formulario de acceso */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-lg shadow-lg border border-border"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={32} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Área de Clientes</h2>
                <p className="text-muted-foreground mt-2">
                  Accede a tu cuenta para gestionar pedidos, consultar disponibilidad y descargar documentación técnica.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-primary mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-muted-foreground">
                    <input type="checkbox" className="rounded border-border" />
                    Recordarme
                  </label>
                  <a href="#" className="text-accent hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Iniciar sesión
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground text-sm">
                  ¿No tienes cuenta? 
                </p>
                <Link to="/contacto" className="text-accent hover:underline font-medium">
                  Solicita acceso aquí
                </Link>
              </div>
            </motion.div>

            {/* Información adicional */}
            <div className="mt-8 grid gap-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-medium text-primary mb-2">¿Qué puedes hacer en el área de clientes?</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Consultar el catálogo completo con precios actualizados</li>
                  <li>• Verificar disponibilidad de stock en tiempo real</li>
                  <li>• Realizar y hacer seguimiento de pedidos</li>
                  <li>• Descargar documentación técnica y datasheets</li>
                  <li>• Acceder a tu historial de compras</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <h3 className="font-medium text-primary mb-2">¿Necesitas ayuda?</h3>
                <p className="text-sm text-muted-foreground">
                  Contacta con nuestro equipo en{' '}
                  <a href="mailto:info@nextleveltechnologies.es" className="text-accent hover:underline">
                    info@nextleveltechnologies.es
                  </a>
                  {' '}o llámanos al{' '}
                  <a href="tel:+34913118571" className="text-accent hover:underline">
                    +34 913 11 85 71
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccesoClientes;
