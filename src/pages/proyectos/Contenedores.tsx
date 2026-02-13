import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import contenedorRunflats from '@/assets/contenedor-runflats.jpg';

const Contenedores = () => {
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
          <h1 className="text-4xl font-bold">Contenedores de runflats</h1>
          <p className="mt-3 max-w-3xl text-primary-foreground/80">
            Contenedores ISO dedicados al almacenamiento, organizacion y transporte de runflats para soporte de flota.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Este proyecto contempla contenedores logísticos estandar acondicionados exclusivamente para runflats,
              con distribucion interna para facilitar clasificacion, inventario y despacho rapido.
            </p>
            <p>
              No se trata de modulos de mando y control: su funcion es almacenar y gestionar runflats de forma segura,
              ordenada y trazable.
            </p>
            <ul className="space-y-2">
              <li>- Estructura ISO de 20/40 pies para transporte y almacenamiento.</li>
              <li>- Estanterias y soportes internos para runflats por medida y referencia.</li>
              <li>- Sistema de identificacion por lote, estado y rotacion.</li>
              <li>- Control de stock y reposicion para disponibilidad operativa.</li>
              <li>- Acceso rapido para carga, descarga y preparacion de pedidos.</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-xl border border-border"
          >
            <img
              src={contenedorRunflats}
              alt="Contenedor logístico con runflats"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contenedores;
