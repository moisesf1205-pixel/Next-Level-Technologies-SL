import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import tankImage from '@/assets/tank-maintenance-3.jpg';
import steadfastImage from '@/assets/steadfast-dart.png';
import m113Image from '@/assets/m113-robotizado.jpg';
import navalImage from '@/assets/embarcacion-naval.jpg';
import dragonImage from '@/assets/dragon.jpg';
import investigacionItImage from '@/assets/investigacion-it.jpg';
import instalacionesNltImage from '@/assets/instalaciones-nlt.png';
import unvex2026Image from '@/assets/unvex-2026.webp';

interface Noticia {
  id: number;
  titulo: string;
  fecha: string;
  categoria: string;
  resumen: string;
  imagen: string | null;
  slug: string;
}

const Actualidad = () => {
  const [searchParams] = useSearchParams();
  const [busqueda, setBusqueda] = useState('');
  
  const categoriaActiva = searchParams.get('categoria');
  const mesActivo = searchParams.get('mes');

  const noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'NLT participa en el proyecto SIRA-CUAS, un sistema acústico inteligente para detección de UAS',
      fecha: 'Enero 21, 2026',
      categoria: 'Proyectos',
      resumen: 'NLT (Next Level Technologies) participa en el proyecto estratégico de I+D+i SIRA-CUAS, valorado en 7,5 millones de euros y financiado por el CDTI, aportando capacidades de inteligencia artificial aplicada a entornos acústicos complejos y edge computing.',
      imagen: 'https://ite-es.com/wp-content/uploads/2026/01/ite-cdti-proyecto-siracuas-simulacion-small-2-1024x671.jpg',
      slug: 'nlt-sira-cuas',
    },
    {
      id: 2,
      titulo: 'Arranca Steadfast Dart 2026, el mayor ejercicio de la OTAN este año',
      fecha: 'Enero 20, 2026',
      categoria: 'Sector Defensa',
      resumen: 'La OTAN ha iniciado el ejercicio Steadfast Dart 2026, la mayor maniobra militar planificada este año por el bloque atlántico y que constituye una de las pruebas más visibles de la nueva Allied Reaction Force (ARF).',
      imagen: steadfastImage,
      slug: 'steadfast-dart-2026',
    },
    {
      id: 2,
      titulo: 'El Ejército de Tierra recibe los primeros 40 vehículos de combate 8x8 Dragón',
      fecha: 'Enero 16, 2026',
      categoria: 'Sector Defensa',
      resumen: 'El Ejército de Tierra ha recibido oficialmente en Almería los primeros 40 vehículos VCR 8x8 Dragón en un acto presidido por la ministra de Defensa, Margarita Robles. Un programa clave para modernizar las capacidades de las Fuerzas Armadas.',
      imagen: dragonImage,
      slug: 'vcr-8x8-dragon',
    },
    {
      id: 5,
      titulo: 'NLT firma acuerdo estratégico con empresa líder en electrónica de defensa',
      fecha: 'Enero 15, 2026',
      categoria: 'Colaboraciones',
      resumen: 'NEXT LEVEL TECHNOLOGIES ha formalizado un acuerdo de colaboración estratégica para el desarrollo conjunto de sistemas electrónicos avanzados destinados a plataformas de vigilancia y reconocimiento.',
      imagen: investigacionItImage,
      slug: 'acuerdo-electronica-defensa',
    },
    {
      id: 8,
      titulo: 'España entra en el primer paquete SAFE de defensa de la Unión Europea',
      fecha: 'Enero 18, 2026',
      categoria: 'Sector Defensa',
      resumen: 'La Comisión Europea ha dado luz verde al primer paquete de financiación en materia de defensa para ocho Estados miembros de la UE, en el marco de la iniciativa Security Action for Europe (SAFE).',
      imagen: navalImage,
      slug: 'espana-safe-ue',
    },
    {
      id: 9,
      titulo: 'NLT obtiene certificación ISO 9001:2015',
      fecha: 'Diciembre 10, 2025',
      categoria: 'Certificaciones',
      resumen: 'Nos complace anunciar la obtención de la certificación ISO 9001:2015, que avala nuestro compromiso con la calidad en todos los procesos de diseño, desarrollo y fabricación.',
      imagen: instalacionesNltImage,
      slug: 'certificacion-iso-9001',
    },
    {
      id: 11,
      titulo: 'Aterriza en Murcia UNVEX 2026, el mayor encuentro de sistemas no tripulados',
      fecha: 'Enero 16, 2026',
      categoria: 'Eventos',
      resumen: 'UNVEX 2026, el mayor evento de sistemas no tripulados en España, se celebra en Murcia reuniendo a los principales actores del sector de drones y vehículos autónomos para defensa y seguridad.',
      imagen: unvex2026Image,
      slug: 'unvex-2026-murcia',
    },
  ];

  const categorias = [
    'Certificaciones',
    'Colaboraciones',
    'Eventos',
    'NEXT LEVEL TECHNOLOGIES',
    'Proyectos',
    'Sector Defensa',
  ];

  const ultimasPublicaciones = noticias.slice(0, 5);

  const archivo = [
    { mes: 'Enero 2026', count: 6, param: 'enero-2026' },
    { mes: 'Diciembre 2025', count: 1, param: 'diciembre-2025' },
  ];

  // Filtrar noticias según categoría, mes o búsqueda
  const noticiasFiltradas = useMemo(() => {
    return noticias.filter((noticia) => {
      // Filtrar por categoría
      if (categoriaActiva && noticia.categoria.toLowerCase() !== categoriaActiva.toLowerCase()) {
        return false;
      }
      // Filtrar por mes
      if (mesActivo) {
        const fechaNoticia = noticia.fecha.toLowerCase();
        if (mesActivo === 'enero-2026' && !fechaNoticia.includes('enero')) return false;
        if (mesActivo === 'diciembre-2025' && !fechaNoticia.includes('diciembre')) return false;
      }
      // Filtrar por búsqueda
      if (busqueda) {
        const busquedaLower = busqueda.toLowerCase();
        return (
          noticia.titulo.toLowerCase().includes(busquedaLower) ||
          noticia.resumen.toLowerCase().includes(busquedaLower) ||
          noticia.categoria.toLowerCase().includes(busquedaLower)
        );
      }
      return true;
    });
  }, [categoriaActiva, mesActivo, busqueda]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero de la página */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Noticias
          </motion.h1>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Lista de noticias */}
            <div className="lg:col-span-2">
              {/* Mostrar filtro activo */}
              {(categoriaActiva || mesActivo) && (
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Filtrando por: <span className="font-semibold text-primary">{categoriaActiva || mesActivo?.replace('-', ' ')}</span>
                  </span>
                  <Link 
                    to="/actualidad" 
                    className="text-sm text-accent hover:underline"
                  >
                    Ver todas
                  </Link>
                </div>
              )}

              {noticiasFiltradas.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No se encontraron noticias con los filtros seleccionados.</p>
                  <Link to="/actualidad" className="text-accent hover:underline mt-2 inline-block">
                    Ver todas las noticias
                  </Link>
                </div>
              ) : (
              <div className="space-y-8">
                {noticiasFiltradas.map((noticia, index) => (
                  <motion.article
                    key={noticia.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-lg shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow"
                  >
                    <div className="md:flex">
                      {/* Imagen */}
                      <div className="md:w-1/3">
                        {noticia.imagen ? (
                          <img 
                            src={noticia.imagen} 
                            alt={noticia.titulo}
                            className="w-full h-full object-cover aspect-video md:aspect-square"
                          />
                        ) : (
                          <div className="aspect-video md:aspect-square md:h-full bg-secondary/20 flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">Imagen</span>
                          </div>
                        )}
                      </div>
                      {/* Contenido */}
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                            {noticia.categoria}
                          </span>
                          <span className="text-xs text-muted-foreground">{noticia.fecha}</span>
                        </div>
                        <h2 className="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors cursor-pointer">
                          {noticia.titulo}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {noticia.resumen}
                        </p>
                        <Link 
                          to={`/actualidad/${noticia.slug}`}
                          className="text-accent hover:underline font-medium text-sm"
                        >
                          Leer más →
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Buscador */}
                <div className="bg-card p-6 rounded-lg shadow border border-border">
                  <h3 className="text-lg font-bold text-primary mb-4">Buscar</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar noticias..."
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    />
                    <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>

                {/* Categorías */}
                <div className="bg-card p-6 rounded-lg shadow border border-border">
                  <h3 className="text-lg font-bold text-primary mb-4">Categorías</h3>
                  <ul className="space-y-2">
                    {categorias.map((cat) => (
                      <li key={cat}>
                        <Link 
                          to={`/actualidad?categoria=${encodeURIComponent(cat)}`}
                          className={`transition-colors text-sm ${
                            categoriaActiva?.toLowerCase() === cat.toLowerCase()
                              ? 'text-accent font-semibold'
                              : 'text-muted-foreground hover:text-accent'
                          }`}
                        >
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Últimas publicaciones */}
                <div className="bg-card p-6 rounded-lg shadow border border-border">
                  <h3 className="text-lg font-bold text-primary mb-4">Últimas Publicaciones</h3>
                  <ul className="space-y-3">
                    {ultimasPublicaciones.map((pub) => (
                      <li key={pub.slug}>
                        <Link 
                          to={`/actualidad/${pub.slug}`}
                          className="text-muted-foreground hover:text-accent transition-colors text-sm leading-snug block"
                        >
                          {pub.titulo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Archivo */}
                <div className="bg-card p-6 rounded-lg shadow border border-border">
                  <h3 className="text-lg font-bold text-primary mb-4">Archivo</h3>
                  <ul className="space-y-2">
                    {archivo.map((item) => (
                      <li key={item.mes}>
                        <Link 
                          to={`/actualidad?mes=${item.param}`}
                          className={`transition-colors text-sm ${
                            mesActivo === item.param
                              ? 'text-accent font-semibold'
                              : 'text-muted-foreground hover:text-accent'
                          }`}
                        >
                          {item.mes}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Actualidad;





