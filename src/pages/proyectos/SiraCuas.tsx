import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Cpu, Target, Users } from 'lucide-react';

const SiraCuas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">SIRA-CUAS</h1>
          <p className="mt-3 max-w-3xl text-primary-foreground/80">
            Sistema Inteligente de Reconocimiento Ac&uacute;stico para la detecci&oacute;n de UAS - Counter Unmanned Aerial Systems.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> participa en el proyecto estrat&eacute;gico de I+D+i SIRA-CUAS,
                valorado en 7,5 millones de euros y financiado por el Centro para el Desarrollo Tecnol&oacute;gico e Industrial (CDTI)
                en el marco del programa Misiones Ciencia e Innovaci&oacute;n 2025.
              </p>
              <p>
                El proyecto SIRA-CUAS investigar&aacute; el desarrollo de un <strong className="text-primary">sistema distribuido de sensores ac&uacute;sticos
                inteligentes</strong> capaz de detectar, clasificar y geolocalizar amenazas UAS/FPV en entornos operativos complejos.
              </p>
              <p>
                La soluci&oacute;n combinar&aacute; <strong className="text-primary">inteligencia artificial, edge computing y an&aacute;lisis ac&uacute;stico avanzado</strong> para
                ofrecer un sistema pasivo, aut&oacute;nomo y port&aacute;til, dise&ntilde;ado para complementar los sistemas C-UAS tradicionales
                (radar, radiofrecuencia y tecnolog&iacute;as &oacute;pticas) y mejorar la detecci&oacute;n de drones con perfil electromagn&eacute;tico
                bajo o trayectorias de vuelo impredecibles.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl border border-border"
            >
              <img
                src="https://ite-es.com/wp-content/uploads/2026/01/ite-cdti-proyecto-siracuas-simulacion-small-2-1024x671.jpg"
                alt="Sistema SIRA-CUAS para detecci&oacute;n de drones"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-8">Caracter&iacute;sticas del Sistema</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <Cpu className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-primary mb-2">Nodos Inteligentes</h3>
              <p className="text-sm text-muted-foreground">
                Equipados con sensores MEMS, procesamiento local basado en IA, comunicaciones seguras (MESH, LTE y sat&eacute;lite)
                y soluciones de alimentaci&oacute;n adaptables.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-primary mb-2">Ciberseguridad Avanzada</h3>
              <p className="text-sm text-muted-foreground">
                Dise&ntilde;o con ciberseguridad embebida, garantizando escalabilidad, robustez y compatibilidad con sistemas
                estandares C2/C3.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <Target className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-primary mb-2">TRL 7</h3>
              <p className="text-sm text-muted-foreground">
                Se espera alcanzar el nivel de madurez tecnol&oacute;gica TRL 7 tras validaci&oacute;n en entornos militares y cr&iacute;ticos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-8">Rol de NLT en el Consorcio</h2>
          <div className="bg-card p-8 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> aporta capacidades de inteligencia artificial
                  aplicada a entornos ac&uacute;sticos complejos y edge computing, fundamentales para la toma de decisiones aut&oacute;noma
                  del sistema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-8">Importancia Estrat&eacute;gica</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SIRA-CUAS fortalecer&aacute; la base industrial y tecnol&oacute;gica de defensa espa&ntilde;ola y contribuir&aacute; a la autonom&iacute;a
                operativa europea. El proyecto cuenta con el <strong className="text-primary">aval del Ej&eacute;rcito del Aire y del Espacio</strong>,
                que lo considera de alto inter&eacute;s estrat&eacute;gico.
              </p>
              <p>
                Su enfoque ser&aacute; especialmente &uacute;til para la <strong className="text-primary">protecci&oacute;n de bases a&eacute;reas, patrullas y convoyes</strong>,
                contribuyendo al desarrollo de una capacidad soberana integrable en sistemas de defensa nacionales.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                El dise&ntilde;o modular y transferible permitir&aacute; aplicaciones en &aacute;reas como seguridad urbana o fronteriza,
                extendiendo su impacto m&aacute;s all&aacute; del &aacute;mbito militar hacia aplicaciones civiles de monitorizaci&oacute;n y
                control de drones a baja altitud.
              </p>
              <p>
                SIRA-CUAS se alinea con la <strong className="text-primary">Estrategia de Seguridad Nacional</strong>, el Plan Tecnol&oacute;gico de Defensa
                y los objetivos del Fondo Europeo de Defensa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SiraCuas;
