import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import nltLogo from '@/assets/nlt-logo.png';

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubItem[];
  parentNavigable?: boolean;
}

const navItems: NavItem[] = [
  {
    label: 'QUIENES SOMOS',
    href: '/quienes-somos',
    parentNavigable: false,
    subItems: [
      { label: 'Empresa', href: '/quienes-somos/empresa' },
      { label: 'Misión, Visión y Valores', href: '/quienes-somos/mision-vision-valores' },
      { label: 'Calidad y Certificaciones', href: '/quienes-somos/calidad-certificaciones' },
      { label: 'Equipo', href: '/quienes-somos/equipo' },
    ],
  },
  {
    label: 'MANTENIMIENTO E INGENIERÍA',
    href: '/mantenimiento-ingenieria',
    parentNavigable: false,
    subItems: [
      { label: 'MRO', href: '/mantenimiento-ingenieria/mro' },
      { label: 'Robótica', href: '/mantenimiento-ingenieria/robotica' },
      { label: 'Logística', href: '/mantenimiento-ingenieria/logistica' },
      { label: 'Naval', href: '/mantenimiento-ingenieria/naval' },
    ],
  },
  {
    label: 'PROYECTOS',
    href: '#',
    subItems: [
      { label: 'T55', href: '/proyectos/t55' },
      { label: 'Run-flat', href: '/proyectos/runflats' },
      { label: 'M113 robotizado', href: '/proyectos/m113-robotizado' },
      { label: 'SIRA-CUAS', href: '/proyectos/sira-cuas' },
    ],
  },
  {
    label: 'ACTUALIDAD',
    href: '/actualidad',
  },
  {
    label: 'CONTACTO',
    href: '/contacto',
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{ backgroundColor: isScrolled ? 'hsl(35, 55%, 78%)' : 'transparent' }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between py-5">
        <Link to="/" className="flex items-center">
          <img
            src={nltLogo}
            alt="Next Level Technologies"
            className="h-16 w-auto"
            style={{ filter: isScrolled ? 'brightness(0.7) contrast(1.3)' : 'none' }}
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.subItems && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.subItems && item.parentNavigable === false ? (
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={`flex items-center gap-1 px-3 py-2 text-xs font-medium tracking-wider whitespace-nowrap transition-colors duration-300 hover:text-accent ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-xs font-medium tracking-wider whitespace-nowrap transition-colors duration-300 hover:text-accent ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>
              )}

              <AnimatePresence>
                {item.subItems && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md overflow-hidden min-w-[240px] border border-border"
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="block px-4 py-3 text-sm text-primary whitespace-nowrap hover:bg-accent/10 hover:text-accent transition-colors border-b border-border/50 last:border-b-0"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`xl:hidden p-2 transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background border-t max-h-[80vh] overflow-y-auto"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between py-2 text-sm font-medium tracking-wider text-primary hover:text-accent transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openMobileDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 border-l-2 border-accent/30 ml-2"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                to={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-sm font-medium tracking-wider text-primary hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
