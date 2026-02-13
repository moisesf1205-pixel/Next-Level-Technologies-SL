import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SistemasControl = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <Link 
            to="/defensa-seguridad" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Defensa y Seguridad
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Sistemas de Control Remoto
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
                Teleoperación y Control de Plataformas
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> desarrollamos sistemas de control remoto que permiten la teleoperación segura de vehículos y plataformas móviles en entornos donde la presencia humana puede suponer un riesgo o no es viable.
                </p>
                <p>
                  Nuestras soluciones integran hardware robusto y software intuitivo, diseñados para ofrecer una respuesta precisa y fiable en tiempo real, incluso en condiciones adversas de comunicación.
                </p>
                <p>
                  Trabajamos con estándares industriales y militares para garantizar la máxima fiabilidad y seguridad en cada sistema que entregamos.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Características Principales</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Latencia mínima:</strong> Optimización de protocolos para respuesta en tiempo real.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Interfaces ergonómicas:</strong> Mandos y consolas diseñados para uso prolongado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Redundancia de comunicaciones:</strong> Múltiples canales para garantizar conectividad.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Cifrado de datos:</strong> Comunicaciones seguras mediante protocolos encriptados.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-primary">Modularidad:</strong> Arquitectura adaptable a diferentes tipos de plataformas.</span>
                </li>
              </ul>
            </div>

            {/* Imagen y aplicaciones */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" 
                  alt="Sistema de control remoto"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Aplicaciones</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Vehículos terrestres no tripulados (UGV)</li>
                  <li>• Plataformas de inspección remota</li>
                  <li>• Robots de desactivación de explosivos</li>
                  <li>• Sistemas de vigilancia móvil</li>
                  <li>• Maquinaria en entornos peligrosos</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">¿Necesitas un sistema personalizado?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Contacta con nuestro equipo técnico para analizar los requisitos de tu proyecto.
                </p>
                <Link 
                  to="/contacto"
                  className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:bg-accent/90 transition-colors"
                >
                  Solicitar información
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

export default SistemasControl;
