import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuienesSomos from "./pages/QuienesSomos";
import InvestigacionDesarrollo from "./pages/InvestigacionDesarrollo";
import Recambios from "./pages/Recambios";
import DefensaSeguridad from "./pages/DefensaSeguridad";
import Actualidad from "./pages/Actualidad";
import NoticiaDetalle from "./pages/NoticiaDetalle";
import Contacto from "./pages/Contacto";
// Proyectos
import Proyectos from "./pages/proyectos/Proyectos";
import T55 from "./pages/proyectos/T55";
import Runflats from "./pages/proyectos/Runflats";
import M113Robotizado from "./pages/proyectos/M113Robotizado";
import SiraCuas from "./pages/proyectos/SiraCuas";
// Subpáginas de Defensa y Seguridad
import SistemasControl from "./pages/defensa/SistemasControl";
import ElectronicaEmbebida from "./pages/defensa/ElectronicaEmbebida";
import Comunicaciones from "./pages/defensa/Comunicaciones";
import Sensores from "./pages/defensa/Sensores";
import SoftwareMando from "./pages/defensa/SoftwareMando";
import Prototipos from "./pages/defensa/Prototipos";
// Subpáginas de Recambios
import ComponentesElectronicos from "./pages/recambios/ComponentesElectronicos";
import KitsDesarrollo from "./pages/recambios/KitsDesarrollo";
import AccesoClientes from "./pages/recambios/AccesoClientes";
// Subpáginas de Investigación y Desarrollo
import PrototiposID from "./pages/id/PrototiposID";
import SistemasEmbebidos from "./pages/id/SistemasEmbebidos";
import IoTConectividad from "./pages/id/IoTConectividad";
import Consultoria from "./pages/id/Consultoria";
// Subpáginas de Quiénes Somos
import Empresa from "./pages/quienes/Empresa";
import MisionVisionValores from "./pages/quienes/MisionVisionValores";
import CalidadCertificaciones from "./pages/quienes/CalidadCertificaciones";
import Equipo from "./pages/quienes/Equipo";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/mantenimiento-ingenieria" element={<InvestigacionDesarrollo />} />
          <Route path="/investigacion-desarrollo" element={<InvestigacionDesarrollo />} />
          <Route path="/recambios" element={<Recambios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/t55" element={<T55 />} />
          <Route path="/proyectos/runflats" element={<Runflats />} />
          <Route path="/proyectos/m113-robotizado" element={<M113Robotizado />} />
          <Route path="/proyectos/sira-cuas" element={<SiraCuas />} />
          <Route path="/defensa-seguridad" element={<DefensaSeguridad />} />
          <Route path="/defensa-seguridad/sistemas-control" element={<SistemasControl />} />
          <Route path="/defensa-seguridad/electronica-embebida" element={<ElectronicaEmbebida />} />
          <Route path="/defensa-seguridad/comunicaciones" element={<Comunicaciones />} />
          <Route path="/defensa-seguridad/sensores" element={<Sensores />} />
          <Route path="/defensa-seguridad/software-mando" element={<SoftwareMando />} />
          <Route path="/defensa-seguridad/prototipos" element={<Prototipos />} />
          <Route path="/recambios/componentes-electronicos" element={<ComponentesElectronicos />} />
          <Route path="/recambios/kits-desarrollo" element={<KitsDesarrollo />} />
          <Route path="/recambios/acceso-clientes" element={<AccesoClientes />} />
          <Route path="/mantenimiento-ingenieria/mro" element={<PrototiposID />} />
          <Route path="/mantenimiento-ingenieria/robotica" element={<SistemasEmbebidos />} />
          <Route path="/mantenimiento-ingenieria/logistica" element={<IoTConectividad />} />
          <Route path="/mantenimiento-ingenieria/naval" element={<Consultoria />} />
          <Route path="/investigacion-desarrollo/prototipos" element={<PrototiposID />} />
          <Route path="/investigacion-desarrollo/sistemas-embebidos" element={<SistemasEmbebidos />} />
          <Route path="/investigacion-desarrollo/iot-conectividad" element={<IoTConectividad />} />
          <Route path="/investigacion-desarrollo/consultoria" element={<Consultoria />} />
          <Route path="/quienes-somos/empresa" element={<Empresa />} />
          <Route path="/quienes-somos/mision-vision-valores" element={<MisionVisionValores />} />
          <Route path="/quienes-somos/calidad-certificaciones" element={<CalidadCertificaciones />} />
          <Route path="/quienes-somos/equipo" element={<Equipo />} />
          <Route path="/actualidad" element={<Actualidad />} />
          <Route path="/actualidad/:slug" element={<NoticiaDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
