import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import m113Image from '@/assets/m113-robotizado.jpg';

const M113Robotizado = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
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
              El proyecto se centra en el casco M113, manteniendo su movilidad de orugas y su robustez mecánica,
              mientras se integra un kit de robotización para control sin tripulación.
            </p>
            <p>
              Se incorporan sistemas de mando remoto, sensorización para conducción asistida y supervisión técnica
              para operar el vehículo en tareas de reconocimiento, apoyo logístico y entrada en zonas de alta amenaza.
            </p>
            <ul className="space-y-2">
              <li>- Integración drive-by-wire sobre plataforma M113.</li>
              <li>- Estación de control remoto con enlaces de comunicación redundantes.</li>
              <li>- Paquete de cámaras y sensores para navegación asistida.</li>
              <li>- Registro de telemetría y estado para mantenimiento predictivo.</li>
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
