import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configurar worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Certificacion {
  titulo: string;
  subtitulo: string;
  imagen: string;
  pdfUrl?: string;
}

const certificaciones: Certificacion[] = [
  {
    titulo: 'ISO 9001:2015',
    subtitulo: 'SISTEMA DE GESTION DE CALIDAD',
    imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
    pdfUrl: '/certificados/iso-9001.pdf',
  },
  {
    titulo: 'ISO 45001',
    subtitulo: 'SISTEMA DE GESTION DE SEGURIDAD Y SALUD EN EL TRABAJO',
    imagen: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80',
    pdfUrl: '/certificados/iso-45001.pdf',
  },
  {
    titulo: 'ISO 14001',
    subtitulo: 'SISTEMA DE GESTION MEDIOAMBIENTAL',
    imagen: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&q=80',
    pdfUrl: '/certificados/iso-14001.pdf',
  },
  {
    titulo: 'DGAM',
    subtitulo: 'DIRECCION GENERAL DE ARMAMENTO Y MATERIAL',
    imagen: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&q=80',
    pdfUrl: '/certificados/dgam.pdf',
  },
];

const CalidadCertificaciones = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <Link
            to="/quienes-somos"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Quienes Somos
          </Link>
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
              sostenibilidad es tambien un factor fundamental para la estrategia de la empresa. Cumplir con el medio
              ambiente, con el entorno social y con la satisfaccion de empleados y clientes es prioritario para NEXT LEVEL TECHNOLOGIES.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 my-8 bg-secondary/20 rounded-r-lg">
              <p className="text-lg italic text-primary font-medium">
                "Dar respuesta a los requisitos de los clientes y satisfacer sus expectativas y necesidades con un impacto
                minimo sobre el medio ambiente"
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
              Para ello, los objetivos que ponemos en practica son fundamentalmente
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
                    Orientar la gestion ambiental hacia la reduccion de la contaminacion, incluyendo la reduccion del
                    consumo de recursos naturales y materias primas, emisiones a la atmosfera y residuos.
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
                    Disponer de los recursos y medios tecnicos mas adecuados para garantizar la calidad de los trabajos,
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

      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/certificados/politica-calidad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:bg-primary/90 transition-colors"
            >
              <FileText size={20} />
              POLITICA DE CALIDAD Y MEDIOAMBIENTE
            </a>
          </div>
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
          <h2 className="text-2xl font-bold text-primary mb-4">Necesitas mas informacion?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contacta con nosotros para solicitar documentacion sobre nuestras certificaciones y procesos de calidad.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:bg-accent/90 transition-colors"
          >
            Solicitar informacion
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CalidadCertificaciones;
