import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, Linkedin, Twitter } from 'lucide-react';

interface Noticia {
  id: number;
  titulo: string;
  fecha: string;
  categoria: string;
  resumen: string;
  contenido: string[];
  imagen: string;
  slug: string;
  fuente?: string;
  fuenteUrl?: string;
}

const noticias: Noticia[] = [
  {
    id: 1,
    titulo: 'Arranca Steadfast Dart 2026, el mayor ejercicio de la OTAN este año',
    fecha: 'Enero 20, 2026',
    categoria: 'Sector Defensa',
    resumen: 'La OTAN ha iniciado el ejercicio Steadfast Dart 2026, la mayor maniobra militar planificada este año por el bloque atlántico.',
    contenido: [
      'La OTAN ha iniciado el ejercicio Steadfast Dart 2026, la mayor maniobra militar planificada este año por el bloque atlántico y que constituye una de las pruebas más visibles de la nueva Allied Reaction Force (ARF), la fuerza de reacción rápida que ha sustituido a la anterior NRF.',
      'El ejercicio, que se desarrollará durante las próximas semanas en varios países del flanco este de la Alianza, cuenta con la participación de más de 20.000 efectivos de una veintena de países aliados, incluyendo fuerzas españolas.',
      'España participa con unidades del Ejército de Tierra desplegadas en la zona, aportando capacidades de maniobra blindada y artillería. La contribución española se enmarca en el compromiso del país con la defensa colectiva y la disuasión en el flanco oriental.',
      'El ejercicio Steadfast Dart 2026 pone a prueba la capacidad de despliegue rápido de las fuerzas aliadas, simulando escenarios de respuesta ante amenazas híbridas y convencionales. Las maniobras incluyen operaciones terrestres, aéreas y de apoyo logístico.',
      'Esta edición cobra especial relevancia en el contexto geopolítico actual, demostrando la cohesión y preparación de los aliados para responder de forma coordinada ante cualquier amenaza a la seguridad colectiva.',
    ],
    imagen: 'https://images.unsplash.com/photo-1534643960519-11ad79bc19df?w=1200&q=80',
    slug: 'steadfast-dart-2026',
    fuente: 'Infodefensa',
    fuenteUrl: 'https://www.infodefensa.com',
  },
  {
    id: 2,
    titulo: 'El Ejército de Tierra recibe los primeros 40 vehículos de combate 8x8 Dragón',
    fecha: 'Enero 16, 2026',
    categoria: 'Sector Defensa',
    resumen: 'El Ejército de Tierra ha recibido oficialmente en Almería los primeros 40 vehículos VCR 8x8 Dragón.',
    contenido: [
      'El Ejército de Tierra ha recibido oficialmente en Almería los primeros 40 vehículos VCR 8x8 Dragón en un acto presidido por la ministra de Defensa, Margarita Robles. Este hito marca un avance significativo en el programa de modernización de las Fuerzas Armadas españolas.',
      'El VCR 8x8 Dragón es el nuevo vehículo de combate sobre ruedas que sustituirá progresivamente a los veteranos BMR y VEC. Fabricado por General Dynamics Santa Bárbara Sistemas en colaboración con empresas españolas del sector, representa lo más avanzado en movilidad táctica y protección.',
      'Las características principales del vehículo incluyen una potencia de motor de más de 600 CV, protección balística y contra minas de última generación, sistemas electrónicos de combate integrados y capacidad anfibio. Su diseño modular permite adaptarlo a diferentes roles: transporte de personal, puesto de mando, ambulancia, portamorteros y reconocimiento.',
      'El programa Dragón contempla la adquisición de más de 300 vehículos en diferentes configuraciones, con una inversión total cercana a los 2.000 millones de euros. La entrega se realizará de forma progresiva hasta 2030.',
      'La ministra destacó que "el Dragón representa el compromiso de España con unas Fuerzas Armadas modernas y preparadas, capaces de hacer frente a los retos del siglo XXI". También subrayó la importancia del programa para la industria de defensa nacional, que participa activamente en el desarrollo y fabricación.',
    ],
    imagen: 'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1200&q=80',
    slug: 'vcr-8x8-dragon',
    fuente: 'Infodefensa',
    fuenteUrl: 'https://www.infodefensa.com',
  },
  {
    id: 3,
    titulo: 'Indra levantará en León la mayor fábrica de drones de España',
    fecha: 'Enero 16, 2026',
    categoria: 'Sector Defensa',
    resumen: 'Indra Group levantará en León la principal y más avanzada fábrica de drones multipropósito de España.',
    contenido: [
      'Indra Group levantará en el polígono de Villadangos del Páramo (León) la que será la principal y más avanzada fábrica de drones multipropósito y munición merodeadora de España, con una inversión cercana a los 12 millones de euros.',
      'La nueva instalación, que generará más de 100 empleos directos en la provincia de León, estará operativa a finales de 2026 y tendrá capacidad para producir centenares de sistemas no tripulados al año, tanto para las Fuerzas Armadas españolas como para la exportación.',
      'El proyecto responde a la creciente demanda de sistemas UAS (Unmanned Aircraft Systems) en el sector defensa, especialmente tras las lecciones aprendidas en los conflictos recientes donde los drones han demostrado su valor táctico y estratégico.',
      'La fábrica producirá varios modelos de drones desarrollados por Indra, incluyendo sistemas de vigilancia y reconocimiento, drones tácticos de ala fija y rotatoria, y la nueva familia de municiones merodeadoras que la compañía ha desarrollado en los últimos años.',
      'El presidente de Indra destacó que "esta inversión refuerza el compromiso del grupo con el tejido industrial español y sitúa a León como un polo de innovación en el sector de sistemas no tripulados". La elección de la ubicación responde a la disponibilidad de suelo industrial, la cercanía a instalaciones militares y el apoyo de las administraciones locales.',
    ],
    imagen: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1200&q=80',
    slug: 'indra-fabrica-drones-leon',
    fuente: 'Infodefensa',
    fuenteUrl: 'https://www.infodefensa.com',
  },
  {
    id: 4,
    titulo: 'Hisdesat impulsa el satélite SpainSat NG III tras los daños del SpainSat NG II',
    fecha: 'Enero 16, 2026',
    categoria: 'Sector Defensa',
    resumen: 'Hisdesat ha iniciado el proceso para el nuevo satélite SpainSat NG III tras confirmar daños irreparables en el NG II.',
    contenido: [
      'Hisdesat, en coordinación con el Ministerio de Defensa, ha iniciado el proceso de solicitud de oferta para el nuevo satélite SpainSat NG III, llamado a sustituir al SpainSat NG II tras confirmar que los daños ocasionados por un impacto de partícula espacial son irreparables.',
      'El SpainSat NG II, lanzado en 2024, sufrió el pasado mes de noviembre un impacto de micrometeoro que dañó gravemente sus sistemas de propulsión y comunicaciones. Tras meses de intentos de recuperación, los técnicos han concluido que el satélite no puede ser reparado en órbita.',
      'El nuevo SpainSat NG III incorporará mejoras significativas respecto a su predecesor, incluyendo mayor resistencia a impactos, redundancia en sistemas críticos y capacidades de comunicación ampliadas. Se espera que esté operativo en 2029.',
      'La inversión estimada para el SpainSat NG III supera los 300 millones de euros, financiados conjuntamente por el Ministerio de Defensa y Hisdesat. El proyecto se enmarca en la estrategia de soberanía espacial de España.',
      'Los satélites SpainSat proporcionan comunicaciones seguras a las Fuerzas Armadas españolas y aliadas, siendo un elemento crítico para las operaciones militares en el exterior. La pérdida del NG II ha obligado a recurrir temporalmente a capacidades de aliados mientras se desarrolla el sustituto.',
    ],
    imagen: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1200&q=80',
    slug: 'spainsat-ng-iii',
    fuente: 'Infodefensa',
    fuenteUrl: 'https://www.infodefensa.com',
  },
  {
    id: 5,
    titulo: 'NLT firma acuerdo estratégico con empresa líder en electrónica de defensa',
    fecha: 'Enero 15, 2026',
    categoria: 'Colaboraciones',
    resumen: 'NEXT LEVEL TECHNOLOGIES ha formalizado un acuerdo de colaboración estratégica para el desarrollo conjunto de sistemas electrónicos avanzados.',
    contenido: [
      'NEXT LEVEL TECHNOLOGIES (NLT) ha formalizado un acuerdo de colaboración estratégica con una empresa líder del sector de electrónica de defensa para el desarrollo conjunto de sistemas electrónicos avanzados destinados a plataformas de vigilancia y reconocimiento.',
      'El acuerdo, firmado en las instalaciones de NLT en Leganés (Madrid), contempla la colaboración en el diseño y fabricación de subsistemas electrónicos embebidos, sistemas de comunicaciones seguras y soluciones de control remoto para vehículos no tripulados.',
      'Jorge de León, director general de NLT, destacó que "este acuerdo representa un paso importante en nuestra estrategia de crecimiento y consolida nuestra posición como proveedor de referencia en el sector defensa español. La combinación de nuestras capacidades técnicas con la experiencia de nuestro socio nos permitirá abordar proyectos de mayor envergadura".',
      'La colaboración incluye el desarrollo de nuevas tecnologías en el ámbito de la guerra electrónica, sistemas de sensores avanzados y plataformas de mando y control. Ambas empresas compartirán recursos de I+D y capacidades de fabricación.',
      'NLT aporta al acuerdo su experiencia en sistemas embebidos de altas prestaciones, comunicaciones tácticas y desarrollo de software crítico, áreas en las que la empresa ha demostrado su competencia en programas nacionales e internacionales de defensa.',
    ],
    imagen: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80',
    slug: 'acuerdo-electronica-defensa',
  },
  {
    id: 6,
    titulo: 'Defensa encarga a Indra un radar Lanza LTR-25 para Ucrania por 37 millones',
    fecha: 'Enero 15, 2026',
    categoria: 'Sector Defensa',
    resumen: 'El Consejo de Ministros ha aprobado la fabricación de un radar Lanza LTR-25 destinado a Ucrania.',
    contenido: [
      'El Consejo de Ministros ha aprobado un acuerdo autorizando la firma de un contrato para la fabricación y suministro de un radar táctico de largo alcance Lanza LTR-25, así como su apoyo logístico, destinado a Ucrania, por un importe de 37 millones de euros.',
      'El radar Lanza LTR-25, desarrollado y fabricado por Indra, es uno de los sistemas de vigilancia aérea más avanzados del mercado. Capaz de detectar y seguir simultáneamente cientos de blancos aéreos a distancias superiores a 400 kilómetros, es un elemento clave para la defensa aérea.',
      'Esta donación se enmarca en el compromiso de España con el apoyo a Ucrania frente a la agresión rusa. El radar reforzará significativamente las capacidades de alerta temprana ucranianas, permitiendo una mejor defensa contra misiles y drones.',
      'El ministro de Defensa explicó que "España continúa comprometida con la defensa de Ucrania y los valores democráticos. Este radar proporcionará una capacidad crítica para proteger a la población civil y las infraestructuras del país".',
      'El contrato incluye no solo el radar sino también el entrenamiento de personal ucraniano, repuestos para dos años y soporte técnico. Indra desplegará un equipo en un país vecino para facilitar la puesta en servicio del sistema.',
    ],
    imagen: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80',
    slug: 'radar-lanza-ucrania',
    fuente: 'Infodefensa',
    fuenteUrl: 'https://www.infodefensa.com',
  },
  {
    id: 7,
    titulo: 'Airbus entra como inversor estratégico en el fondo Nazca Aeroespacial y Defensa',
    fecha: 'Enero 15, 2026',
    categoria: 'Sector Defensa',
    resumen: 'Nazca Capital ha anunciado la incorporación de Airbus como nuevo inversor en el Fondo Nazca Aeroespacial y Defensa.',
    contenido: [
      'Nazca Capital ha anunciado la incorporación de Airbus como nuevo inversor en el Fondo Nazca Aeroespacial y Defensa Innvierte I FCR, el mayor fondo español especializado en el sector y uno de los mayores en Europa con un tamaño objetivo de 150 millones de euros.',
      'La entrada de Airbus como inversor estratégico refuerza el posicionamiento del fondo como vehículo de referencia para la inversión en empresas del sector aeroespacial, defensa y seguridad en España y Europa.',
      'El fondo, creado en 2024, ya ha realizado inversiones en varias startups y pymes del sector, incluyendo empresas de sistemas no tripulados, ciberseguridad, nuevos materiales y tecnologías espaciales. Su estrategia se centra en compañías con alto potencial de crecimiento y tecnologías diferenciales.',
      'Miguel Arias, socio de Nazca Capital y responsable del fondo, señaló que "la incorporación de Airbus valida nuestra tesis de inversión y nos proporciona un socio industrial de primer nivel que aportará valor añadido a las empresas participadas".',
      'Airbus, por su parte, busca a través de esta inversión identificar y apoyar tecnologías emergentes que puedan integrarse en sus programas futuros. La compañía ha intensificado en los últimos años su apuesta por el ecosistema de innovación español.',
    ],
    imagen: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=1200&q=80',
    slug: 'airbus-nazca-defensa',
    fuente: 'Infodefensa',
    fuenteUrl: 'https://www.infodefensa.com',
  },
  {
    id: 8,
    titulo: 'España entra en el primer paquete SAFE de defensa de la Unión Europea',
    fecha: 'Enero 18, 2026',
    categoria: 'Sector Defensa',
    resumen: 'La Comisión Europea ha dado luz verde al primer paquete de financiación SAFE para España.',
    contenido: [
      'La Comisión Europea ha dado luz verde al primer paquete de financiación en materia de defensa para ocho Estados miembros de la UE, en el marco de la iniciativa Security Action for Europe (SAFE). España figura entre los países beneficiarios.',
      'El programa SAFE, dotado con 1.500 millones de euros en su primera fase, tiene como objetivo reforzar la base industrial de defensa europea y reducir la dependencia de proveedores extracomunitarios en tecnologías críticas.',
      'España recibirá financiación para proyectos en los ámbitos de sistemas no tripulados, municiones de precisión y tecnologías espaciales de defensa. La industria española participará en consorcios europeos que desarrollarán las nuevas capacidades.',
      'El Ministerio de Defensa ha coordinado con las principales empresas del sector nacional la presentación de propuestas, logrando que España sea uno de los países con mayor participación en esta primera convocatoria.',
      'La iniciativa SAFE representa un cambio de paradigma en la política de defensa europea, pasando de la cooperación voluntaria a programas estructurados con financiación comunitaria. Se espera que en los próximos años el presupuesto se incremente significativamente.',
    ],
    imagen: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200&q=80',
    slug: 'espana-safe-ue',
    fuente: 'Infodefensa',
    fuenteUrl: 'https://www.infodefensa.com',
  },
  {
    id: 9,
    titulo: 'NLT obtiene certificación ISO 9001:2015',
    fecha: 'Diciembre 10, 2025',
    categoria: 'Certificaciones',
    resumen: 'NEXT LEVEL TECHNOLOGIES obtiene la certificación ISO 9001:2015 que avala su compromiso con la calidad.',
    contenido: [
      'NEXT LEVEL TECHNOLOGIES (NLT) ha obtenido la certificación ISO 9001:2015, que avala el compromiso de la empresa con la calidad en todos los procesos de diseño, desarrollo y fabricación de sistemas electrónicos.',
      'La certificación, otorgada tras una exhaustiva auditoría por parte de un organismo acreditado, reconoce que NLT cumple con los más altos estándares internacionales de gestión de la calidad.',
      'El proceso de certificación ha supuesto la revisión y mejora de todos los procedimientos internos de la empresa, desde la gestión de proyectos hasta el control de calidad de los productos finales, pasando por la relación con proveedores y clientes.',
      'Jorge de León, director general de NLT, destacó que "esta certificación es el resultado del trabajo y compromiso de todo el equipo. Refleja nuestra filosofía de hacer las cosas bien desde el principio y nuestra obsesión por la satisfacción del cliente".',
      'La ISO 9001:2015 se suma a otras certificaciones que NLT está en proceso de obtener, incluyendo la ISO 14001 de gestión medioambiental y la ISO 45001 de seguridad y salud en el trabajo. Estas certificaciones son requisito habitual para participar en programas de defensa nacionales e internacionales.',
    ],
    imagen: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    slug: 'certificacion-iso-9001',
  },
  {
    id: 10,
    titulo: 'Aterriza en Murcia UNVEX 2026, el mayor encuentro de sistemas no tripulados',
    fecha: 'Enero 16, 2026',
    categoria: 'Eventos',
    resumen: 'UNVEX 2026 reúne en Murcia a los principales actores del sector de drones y vehículos autónomos.',
    contenido: [
      'UNVEX 2026, el mayor evento de sistemas no tripulados en España, ha abierto sus puertas en el recinto ferial de Murcia, reuniendo a más de 150 empresas y 5.000 profesionales del sector de drones y vehículos autónomos para defensa y seguridad.',
      'La feria, que se celebra cada dos años, se ha consolidado como el punto de encuentro de referencia para fabricantes, operadores, reguladores y usuarios finales de sistemas UAS, UGV y USV (aéreos, terrestres y marítimos no tripulados).',
      'Entre las novedades presentadas destacan los nuevos sistemas de enjambre de drones, municiones merodeadoras de última generación, y plataformas autónomas terrestres para logística y reconocimiento.',
      'El Ministerio de Defensa ha aprovechado el evento para presentar su estrategia de sistemas no tripulados para la próxima década, que contempla importantes inversiones en desarrollo y adquisición de estas tecnologías.',
      'NEXT LEVEL TECHNOLOGIES participa en la feria con un stand donde presenta sus soluciones de control remoto y sistemas embebidos para plataformas no tripuladas, generando gran interés entre los visitantes profesionales.',
    ],
    imagen: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=1200&q=80',
    slug: 'unvex-2026-murcia',
    fuente: 'Infodefensa',
    fuenteUrl: 'https://www.infodefensa.com',
  },
  {
    id: 11,
    titulo: 'GMV lidera proyecto europeo para proteger infraestructuras críticas militares',
    fecha: 'Enero 20, 2026',
    categoria: 'Sector Defensa',
    resumen: 'GMV lidera un proyecto europeo de ciberdefensa para proteger infraestructuras críticas militares.',
    contenido: [
      'La española GMV lidera un proyecto europeo para proteger infraestructuras críticas en escenarios militares, reforzando la capacidad de ciberdefensa de las fuerzas aliadas frente a amenazas híbridas cada vez más sofisticadas.',
      'El proyecto, financiado por la Agencia Europea de Defensa (EDA) con un presupuesto de 8 millones de euros, desarrollará nuevas herramientas de detección y respuesta ante ciberataques dirigidos contra sistemas de mando y control, comunicaciones y logística militar.',
      'GMV coordina un consorcio de 12 empresas y centros de investigación de 7 países europeos, aportando su experiencia en ciberseguridad y sistemas críticos de defensa. El proyecto tendrá una duración de tres años.',
      'Las soluciones desarrolladas se integrarán en los sistemas de defensa de los países participantes y estarán disponibles para su uso por la OTAN. El proyecto incluye ejercicios de validación en entornos operativos reales.',
      'La directora de Defensa de GMV destacó que "este proyecto posiciona a España y a GMV en la vanguardia de la ciberdefensa europea. Las amenazas híbridas son uno de los principales desafíos de seguridad actuales y requieren respuestas tecnológicas avanzadas".',
    ],
    imagen: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
    slug: 'gmv-infraestructuras-criticas',
    fuente: 'Infodefensa',
    fuenteUrl: 'https://www.infodefensa.com',
  },
];

const NoticiaDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const noticia = noticias.find((n) => n.slug === slug);
  
  if (!noticia) {
    return <Navigate to="/actualidad" replace />;
  }

  const noticiasRelacionadas = noticias
    .filter((n) => n.categoria === noticia.categoria && n.id !== noticia.id)
    .slice(0, 3);

  const compartirLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(noticia.titulo);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank');
  };

  const compartirTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(noticia.titulo);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero con imagen */}
      <section className="pt-24 relative">
        <div className="absolute inset-0 h-[50vh]">
          <img 
            src={noticia.imagen} 
            alt={noticia.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-16 pb-8">
          <Link 
            to="/actualidad" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Noticias
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded text-sm font-semibold">
                {noticia.categoria}
              </span>
              <span className="text-white/80 text-sm flex items-center gap-2">
                <Calendar size={16} />
                {noticia.fecha}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {noticia.titulo}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contenido del artículo */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Artículo principal */}
            <article className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-medium">
                  {noticia.resumen}
                </p>
                
                {noticia.contenido.map((parrafo, index) => (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-6">
                    {parrafo}
                  </p>
                ))}
                
                {noticia.fuente && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Fuente: {noticia.fuenteUrl ? (
                        <a 
                          href={noticia.fuenteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          {noticia.fuente}
                        </a>
                      ) : (
                        noticia.fuente
                      )}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Compartir */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Share2 size={18} />
                    Compartir:
                  </span>
                  <button
                    onClick={compartirLinkedIn}
                    className="p-2 rounded-full bg-[#0077B5] text-white hover:bg-[#0077B5]/90 transition-colors"
                    aria-label="Compartir en LinkedIn"
                  >
                    <Linkedin size={18} />
                  </button>
                  <button
                    onClick={compartirTwitter}
                    className="p-2 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 transition-colors"
                    aria-label="Compartir en Twitter"
                  >
                    <Twitter size={18} />
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Noticias relacionadas */}
                {noticiasRelacionadas.length > 0 && (
                  <div className="bg-card p-6 rounded-lg shadow border border-border">
                    <h3 className="text-lg font-bold text-primary mb-4">Noticias Relacionadas</h3>
                    <div className="space-y-4">
                      {noticiasRelacionadas.map((rel) => (
                        <Link
                          key={rel.id}
                          to={`/actualidad/${rel.slug}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img 
                              src={rel.imagen} 
                              alt={rel.titulo}
                              className="w-20 h-16 object-cover rounded flex-shrink-0"
                            />
                            <div>
                              <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                                {rel.titulo}
                              </h4>
                              <span className="text-xs text-muted-foreground">{rel.fecha}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categorías */}
                <div className="bg-card p-6 rounded-lg shadow border border-border">
                  <h3 className="text-lg font-bold text-primary mb-4">Categorías</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Sector Defensa', 'Colaboraciones', 'Eventos', 'Certificaciones', 'Proyectos'].map((cat) => (
                      <Link
                        key={cat}
                        to={`/actualidad?categoria=${encodeURIComponent(cat)}`}
                        className="px-3 py-1 bg-secondary/50 text-sm rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary p-6 rounded-lg text-primary-foreground">
                  <h3 className="text-lg font-bold mb-2">¿Interesado en nuestros servicios?</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Contacta con nosotros para conocer cómo NLT puede ayudar en tu proyecto.
                  </p>
                  <Link
                    to="/contacto"
                    className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded font-medium text-sm hover:bg-accent/90 transition-colors"
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoticiaDetalle;
