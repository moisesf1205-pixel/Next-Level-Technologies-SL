import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import m113Image from '@/assets/m113-robotizado.jpg';

const M113Robotizado = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
          >
            <ArrowLeft size={18} />
            Volver a Proyectos
          </Link>
          <h1 className="text-4xl font-bold">M113 robotizado</h1>
          <p className="mt-3 max-w-3xl text-primary-foreground/80">
            Conversion de la plataforma M113 a configuracion robotizada para operacion remota en misiones de riesgo.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              El proyecto se centra en el casco M113, manteniendo su movilidad de orugas y su robustez mecanica,
              mientras se integra un kit de robotizacion para control sin tripulacion.
            </p>
            <p>
              Se incorporan sistemas de mando remoto, sensorizacion para conduccion asistida y supervision tecnica
              para operar el vehiculo en tareas de reconocimiento, apoyo logistico y entrada en zonas de alta amenaza.
            </p>
            <ul className="space-y-2">
              <li>- Integracion drive-by-wire sobre plataforma M113.</li>
              <li>- Estacion de control remoto con enlaces de comunicacion redundantes.</li>
              <li>- Paquete de camaras y sensores para navegacion asistida.</li>
              <li>- Registro de telemetria y estado para mantenimiento predictivo.</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-xl border border-border"
          >
            <img src={m113Image} alt="Vehiculo M113 robotizado" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default M113Robotizado;
