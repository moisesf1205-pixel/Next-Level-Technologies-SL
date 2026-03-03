import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const IoTConectividad = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Logística
          </motion.h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Soporte logístico para operaciones continuas
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Diseñamos modelos de <strong className="text-primary">logística técnica</strong> para garantizar disponibilidad,
                  reposición y trazabilidad de recursos en ciclos operativos exigentes.
                </p>
                <p>
                  Alineamos inventario, mantenimiento programado y niveles de servicio con indicadores de rendimiento
                  para reducir paradas no planificadas.
                </p>
                <p>
                  Integramos procesos de taller, almacén y campo para una cadena de soporte coherente de punta a punta.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Bloques funcionales</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Plan maestro de repuestos y consumibles críticos.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Gestión de almacenes, rotación y niveles min/max.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Programación de intervenciones y ventanas operativas.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-accent rounded-full mt-2" /><span>Tableros KPI para seguimiento de disponibilidad y tiempos.</span></li>
              </ul>
            </div>

            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
                  alt="Logistica de mantenimiento"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Entregables habituales</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-primary">Matriz de criticidad:</strong> prioridad por sistema y riesgo operativo.</p>
                  <p><strong className="text-primary">Plan de abastecimiento:</strong> stock objetivo y proveedores homologados.</p>
                  <p><strong className="text-primary">Procedimiento de soporte:</strong> flujos de aprobación y escalado técnico.</p>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mt-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">¿Necesitas mejorar tu cadena de soporte?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Definimos contigo un modelo logístico medible y orientado a resultados.
                </p>
                <Link to="/contacto" className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:bg-accent/90 transition-colors">
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

export default IoTConectividad;
