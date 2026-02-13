import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServiceSection from '@/components/ServiceSection';
import PartsSection from '@/components/PartsSection';
import DefenseSection from '@/components/DefenseSection';
import Footer from '@/components/Footer';

import facilityImage from '@/assets/about-vehicle.png';
import engineImage from '@/assets/tank-maintenance-3.jpg';
import defenseImage from '@/assets/AdobeStock_1544053868.jpeg';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection imageSrc={facilityImage} />
      <div className="container mx-auto px-6 my-12" aria-hidden>
        <div className="h-3 rounded-full bg-gradient-to-r from-primary to-accent shadow-md opacity-90" />
      </div>
      <ServiceSection
        id="maintenance"
        title="MANTENIMIENTO E INGENIERÍA"
        subtitle="Capacidades integrales para sistemas críticos"
        imageSrc={engineImage}
        imageAlt="Mantenimiento e ingenieria de tanques en entorno operativo"
        reverse
        bgColor="white"
        linkTo="/mantenimiento-ingenieria"
        content={
          <>
            <p>
              En <strong className="text-primary">NEXT LEVEL TECHNOLOGIES</strong> somos <strong className="text-primary">especialistas</strong> en <strong className="text-primary">mantenimiento e ingeniería</strong> para plataformas y sistemas de alta exigencia, combinando capacidad técnica y ejecución operativa.
            </p>
            <p>
              En <strong className="text-primary">MRO</strong> gestionamos mantenimiento, reparación y overhaul con trazabilidad completa, control documental y protocolos de calidad para maximizar disponibilidad y ciclo de vida.
            </p>
            <p>
              En <strong className="text-primary">Robótica y Logística</strong> integramos automatización, sensórica y coordinación de recursos para optimizar operaciones, reducir tiempos de respuesta y mejorar la eficiencia en campo.
            </p>
            <p>
              En el ámbito <strong className="text-primary">Naval</strong> desarrollamos soluciones de soporte técnico e ingeniería aplicada para entornos marítimos, adaptadas a requisitos operativos y normativos específicos.
            </p>
          </>
        }
      />
      <PartsSection />
      <DefenseSection imageSrc={defenseImage} />
      <Footer />
    </div>
  );
};

export default Index;
