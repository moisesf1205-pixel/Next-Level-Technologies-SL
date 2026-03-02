import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

// Configurar worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Certificacion {
  titulo: string;
  subtitulo: string;
  imagen: string;
  pdfUrl?: string;
}

const BASE = import.meta.env.BASE_URL;

const certificaciones: Certificacion[] = [
  {
    titulo: 'ISO 9001:2015',
    subtitulo: 'SISTEMA DE GESTIÓN DE CALIDAD',
    imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
    pdfUrl: `${BASE}certificados/iso-9001.pdf`,
  },
  {
    titulo: 'ISO 45001',
    subtitulo: 'SISTEMA DE GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO',
    imagen: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80',
    pdfUrl: `${BASE}certificados/iso-45001.pdf`,
  },
  {
    titulo: 'ISO 14001',
    subtitulo: 'SISTEMA DE GESTIÓN MEDIOAMBIENTAL',
    imagen: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&q=80',
    pdfUrl: `${BASE}certificados/iso-14001.pdf`,
  },
  {
    titulo: 'DGAM',
    subtitulo: 'DIRECCIÓN GENERAL DE ARMAMENTO Y MATERIAL',
    imagen: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&q=80',
    pdfUrl: `${BASE}certificados/dgam.pdf`,
  },
];

const CalidadCertificaciones = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-left"
          >
            Calidad, Medio Ambiente y Certificaciones
          </motion.h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">CALIDAD Y MEDIO AMBIENTE</h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> es consciente de que la calidad de los servicios y
              productos que fabrica y suministra es un factor primordial para el desarrollo de sus actividades. La
              sostenibilidad es también un factor fundamental para la estrategia de la empresa. Cumplir con el medio
              ambiente, con el entorno social y con la satisfacción de empleados y clientes es prioritario para NEXT LEVEL TECHNOLOGIES.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 my-8 bg-secondary/20 rounded-r-lg">
              <p className="text-lg italic text-primary font-medium">
                "Dar respuesta a los requisitos de los clientes y satisfacer sus expectativas y necesidades con un impacto
                mínimo sobre el medio ambiente"
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              Para ello, los objetivos que ponemos en práctica son fundamentalmente
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground">Adaptarnos a las necesidades de nuestros clientes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground">Cumplir con la normativa legal en sostenibilidad y medio ambiente.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground">
                    Orientar la gestión ambiental hacia la reducción de la contaminación, incluyendo la reducción del
                    consumo de recursos naturales y materias primas, emisiones a la atmósfera y residuos.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground">Garantizar la entrega de materiales conformes mediante un sistema de calidad eficaz.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground">
                    Disponer de los recursos y medios técnicos más adecuados para garantizar la calidad de los trabajos,
                    buscando la mejora continua.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground">Consolidarnos como una empresa puntera en el sector de la seguridad y la defensa.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">POLÍTICA DE CALIDAD Y MEDIOAMBIENTE</h2>

            <div className="bg-card border border-border rounded-lg p-8 md:p-10 shadow-md space-y-6">
              <p className="text-muted-foreground leading-relaxed text-justify">
                La Dirección de <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> establece como política
                fundamental la gestión integrada de la calidad y el medioambiente, asumiendo el compromiso de satisfacer
                las necesidades y expectativas de sus clientes, cumplir con la legislación vigente y minimizar el impacto
                ambiental derivado de sus actividades.
              </p>

              <p className="text-muted-foreground leading-relaxed text-justify">
                Esta política se aplica a todas las actividades de diseño, desarrollo, fabricación, integración y
                mantenimiento de sistemas electrónicos, equipos de defensa y soluciones tecnológicas que la empresa
                lleva a cabo.
              </p>

              <h3 className="text-xl font-bold text-primary pt-4">Principios de nuestra política</h3>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground text-justify">
                    <strong className="text-foreground">Satisfacción del cliente:</strong> Orientar todos nuestros procesos
                    hacia la comprensión y cumplimiento de los requisitos del cliente, buscando superar sus expectativas en
                    cada proyecto.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground text-justify">
                    <strong className="text-foreground">Mejora continua:</strong> Promover la mejora continua de nuestros
                    procesos, productos y servicios mediante la revisión periódica de objetivos, indicadores y resultados
                    del sistema de gestión.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground text-justify">
                    <strong className="text-foreground">Cumplimiento normativo:</strong> Cumplir con todos los requisitos
                    legales y reglamentarios aplicables en materia de calidad y medioambiente, así como con los compromisos
                    voluntarios suscritos por la organización.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground text-justify">
                    <strong className="text-foreground">Protección del medioambiente:</strong> Prevenir la contaminación y
                    reducir el impacto ambiental de nuestras actividades, promoviendo el uso eficiente de los recursos
                    naturales, la gestión responsable de residuos y la reducción de emisiones.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground text-justify">
                    <strong className="text-foreground">Formación y concienciación:</strong> Garantizar que todo el personal
                    dispone de la formación, competencias y recursos necesarios para desempeñar sus funciones con eficacia
                    y responsabilidad medioambiental.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground text-justify">
                    <strong className="text-foreground">Gestión de proveedores:</strong> Seleccionar y evaluar a nuestros
                    proveedores conforme a criterios de calidad, medioambiente y cumplimiento, fomentando relaciones
                    basadas en la confianza mutua y la colaboración.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground text-justify">
                    <strong className="text-foreground">Innovación sostenible:</strong> Integrar criterios de sostenibilidad
                    en el diseño y desarrollo de nuestros productos y servicios, buscando soluciones que minimicen el
                    consumo de materias primas y energía.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground text-justify">
                    <strong className="text-foreground">Comunicación y transparencia:</strong> Mantener una comunicación
                    abierta con todas las partes interesadas sobre nuestro desempeño en calidad y medioambiente,
                    fomentando la participación y el compromiso de todo el equipo.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6 mt-6">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  La Dirección de NEXT LEVEL TECHNOLOGIES se compromete a proporcionar los recursos necesarios para la
                  implantación, mantenimiento y mejora continua del Sistema de Gestión Integrado de Calidad y
                  Medioambiente, asegurando que esta política es comunicada, entendida y aplicada por todos los miembros
                  de la organización.
                </p>
                <p className="text-sm text-muted-foreground/70 mt-4 text-right italic">
                  Leganés, Madrid — La Dirección
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-10 text-center">Nuestras Certificaciones</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificaciones.map((cert, index) => (
              <motion.div
                key={cert.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group ${cert.titulo === 'DGAM' ? 'lg:col-start-2' : ''}`}
              >
                {cert.pdfUrl ? (
                  <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border">
                      <div className="aspect-[4/3] bg-white flex items-center justify-center overflow-hidden group-hover:bg-gray-50 transition-colors">
                        <Document file={cert.pdfUrl} loading={<div className="text-muted-foreground text-sm">Cargando...</div>}>
                          <Page pageNumber={1} width={280} renderTextLayer={false} renderAnnotationLayer={false} />
                        </Document>
                      </div>
                      <div className="p-4 text-center bg-primary">
                        <h3 className="font-bold text-primary-foreground text-lg mb-1">{cert.titulo}</h3>
                        <p className="text-primary-foreground/80 text-xs uppercase tracking-wide">"{cert.subtitulo}"</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
                      <img src={cert.imagen} alt={cert.titulo} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="p-4 text-center bg-primary">
                      <h3 className="font-bold text-primary-foreground text-lg mb-1">{cert.titulo}</h3>
                      <p className="text-primary-foreground/80 text-xs uppercase tracking-wide">"{cert.subtitulo}"</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">¿Necesitas más información?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contacta con nosotros para solicitar documentación sobre nuestras certificaciones y procesos de calidad.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:bg-accent/90 transition-colors"
          >
            Contáctenos para saber más
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CalidadCertificaciones;
