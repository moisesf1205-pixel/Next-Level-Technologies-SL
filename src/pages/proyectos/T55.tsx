import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Cpu, Wrench, Radar } from 'lucide-react';

const capabilityItems = [
  {
    icon: Shield,
    title: 'Supervivencia',
    text: 'Blindaje modular adicional, protección 360º contra RPG y kits de protección activa listos para integración.',
  },
  {
    icon: Cpu,
    title: 'Arquitectura digital',
    text: 'Arquitectura vehicular abierta (GVA-like), red CAN/Ethernet, BMS digital y consola táctica centralizada.',
  },
  {
    icon: Wrench,
    title: 'Movilidad y potencia',
    text: 'Repotenciación del grupo motopropulsor, tren de rodaje reforzado y gestión térmica optimizada.',
  },
  {
    icon: Radar,
    title: 'Conciencia situacional',
    text: 'Sensores EO/IR, cámaras diurnas 360º, telémetro láser seguro para ojos y visión nocturna asistida.',
  },
];

const modernizationBlocks = [
  {
    label: 'Misión',
    bullets: [
      'Sistemas de mando y control C4I interoperables (NATO STANAG-ready).',
      'Terminales de comunicaciones seguras (HF/VHF/UHF) y data links IP.',
      'Integración de BMS con tracking blue-force y gestión de munición.',
    ],
  },
  {
    label: 'Letalidad',
    bullets: [
      'Estabilización digital de la torre y cálculo balístico asistido.',
      'Sistemas de observación del artillero y jefe con canales diurno/IR.',
      'Preparado para integración de estaciones remotas (RCWS) secundarias.',
    ],
  },
  {
    label: 'Soporte y MRO',
    bullets: [
      'Manual digital interactivo (IETM) y sensórica para mantenimiento predictivo.',
      'Kit de herramental y banco de pruebas para L2/L3 en teatro.',
      'Capacitación completa a tripulaciones y equipos de mantenimiento.',
    ],
  },
];

const gallery = [
  'https://upload.wikimedia.org/wikipedia/commons/c/cc/T-55_main_battle_tank.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3d/T-55_MBT.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8b/T-55_main_battle_tank_2.jpg',
];

const T55 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Proyectos
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight"
          >
            Modernización T55
          </motion.h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/80 leading-relaxed">
            Paquete integral para extender la vida útil de la plataforma T55, incrementando letalidad, protección y
            digitalización para operaciones combinadas actuales.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/T-55_main_battle_tank.jpg"
                alt="T-55 modernizado en campo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Arquitectura y objetivos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nuestro programa convierte el T55 en una plataforma digital, interoperable y segura, preparada para operar
              con unidades mecanizadas y acorazadas actuales. Se prioriza la modularidad: cada bloque puede desplegarse
              por fases según requerimientos y presupuesto.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {capabilityItems.map((item) => (
                <div key={item.title} className="bg-secondary/40 border border-border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    <item.icon size={20} />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modernization blocks */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="bg-card border border-border rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Alcance técnico</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {modernizationBlocks.map((block) => (
                <div key={block.label} className="p-5 rounded-lg bg-secondary/40 border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-3">{block.label}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 block w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Galería del programa</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((src, idx) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-lg overflow-hidden border border-border bg-secondary/30"
              >
                <img src={src} alt={`Modernización T55 ${idx + 1}`} className="w-full h-56 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default T55;
