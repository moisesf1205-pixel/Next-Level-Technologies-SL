import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import contenedorMilitar from '@/assets/contenedor-militar.png';

const Runflats = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Run-flat</h1>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <h3 className="text-xl font-semibold text-foreground">&iquest;Qu&eacute; es un neum&aacute;tico Run Flat?</h3>
            <p>
              Los neum&aacute;ticos de los veh&iacute;culos militares se da&ntilde;an con frecuencia debido a su constante movimiento y al
              circular sobre diferentes superficies. Los neum&aacute;ticos run-flat act&uacute;an como amortiguador entre la superficie
              de la carretera y las llantas, reduciendo la posibilidad de da&ntilde;os por impactos fuertes durante la conducci&oacute;n
              todoterreno y permitiendo que la conducci&oacute;n contin&uacute;e a una velocidad limitada a pesar del da&ntilde;o. Los
              neum&aacute;ticos run-flat son mecanismos ubicados en el interior de los neum&aacute;ticos de los veh&iacute;culos
              militares/blindados que protegen la llanta para que el conductor pueda continuar conduciendo sin da&ntilde;arla ni
              ning&uacute;n otro sistema del veh&iacute;culo.
            </p>

            <h3 className="text-xl font-semibold text-foreground">&iquest;Qu&eacute; es una m&aacute;quina cambiadora de neum&aacute;ticos run-flat?</h3>
            <p>
              Los neum&aacute;ticos run-flat de una sola pieza son demasiado pesados para ser extra&iacute;dos con fuerza y se colocan
              dentro del neum&aacute;tico de tal manera que el neum&aacute;tico exterior no lo permite. Si el neum&aacute;tico est&aacute; da&ntilde;ado y se
              desea extraerlo del run-flat, se necesitar&aacute; una m&aacute;quina para ello.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              &iquest;Cual es la finalidad de uso de la maquina cambiadora de neumaticos run-flat?
            </h3>
            <p>
              La m&aacute;quina de neum&aacute;ticos Run-Flat est&aacute; dise&ntilde;ada para reemplazar y reensamblar llantas y aros de
              ruedas, adem&aacute;s de reemplazar los neum&aacute;ticos Run-Flat pesados. Ofrece un entorno de trabajo r&aacute;pido y eficaz,
              que el usuario puede controlar a distancia.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Neum&aacute;ticos compatibles</h3>
            <p>
              La m&aacute;quina desmontadora de neum&aacute;ticos run-flat est&aacute; dise&ntilde;ada para desmontarse y volver a
              montarse &uacute;nicamente para neum&aacute;ticos run-flat de caucho y s&oacute;lidos. Los neum&aacute;ticos compatibles con la m&aacute;quina
              deben ser de rines de 15 a 20 pulgadas.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-xl border border-border"
          >
            <img
              src={contenedorMilitar}
              alt="Contenedor log&iacute;stico con runflats"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Runflats;
