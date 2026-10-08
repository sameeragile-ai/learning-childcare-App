import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Story', path: '/about' },
    { label: 'Learning', path: '/learning' },
    { label: 'Programs', path: '/programs' },
    { label: 'Our Team', path: '/team' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#2C3827]/10 py-3.5'
            : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-[#2C3827]/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Brand Wordmark (Single text element in display serif) */}
            <Link
              to="/"
              className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4E5E46] rounded-sm transition-transform duration-200 active:scale-98"
              aria-label="Willow & Sage Early Learning Home"
            >
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#222521] group-hover:text-[#4E5E46] transition-colors duration-200">
                Willow &amp; Sage
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#687163] font-medium -mt-1 hidden sm:inline transition-opacity duration-200 group-hover:opacity-80">
                Early Learning · Sydney
              </span>
            </Link>

            {/* Zone 2: Navigation Links (Clean text links with animated hover indicator) */}
            <nav
              className="hidden lg:flex items-center gap-1 text-sm font-medium"
              aria-label="Main Navigation"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const isHovered = hoveredPath === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onMouseEnter={() => setHoveredPath(link.path)}
                    className={`relative px-3.5 py-1.5 transition-colors duration-200 ${
                      isActive
                        ? 'text-[#222521] font-semibold'
                        : 'text-[#555C51] hover:text-[#222521]'
                    }`}
                  >
                    {/* Animated hover highlight */}
                    {isHovered && (
                      <motion.div
                        layoutId="navHoverBackground"
                        className="absolute inset-0 bg-[#E7ECE6]/60 rounded-xs -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    <span>{link.label}</span>

                    {/* Active route indicator line */}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveLine"
                        className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#4E5E46] rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:0291824500"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#555C51] hover:text-[#222521] transition-colors font-medium mr-2 group"
                title="Call Woollahra Campus"
              >
                <Phone className="w-3.5 h-3.5 text-[#4E5E46] transition-transform duration-200 group-hover:scale-110" />
                <span>(02) 9182 4500</span>
              </a>
              <Button
                to="/request-a-tour"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Request a Tour
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                to="/request-a-tour"
                variant="primary"
                size="sm"
                className="sm:hidden text-xs py-1.5 px-3"
              >
                Tour
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#222521] hover:text-[#4E5E46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4E5E46] rounded-md transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF8F5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#2C3827]/10">
                  <div className="font-serif text-xl font-medium text-[#222521]">
                    Willow &amp; Sage
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#555C51] hover:text-[#222521] transition-colors"
                    aria-label="Close navigation"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1 py-6">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`px-3 py-3 rounded-sm text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-[#E7ECE6] text-[#2C3827] font-semibold'
                            : 'text-[#444C40] hover:bg-[#F3EFEA]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#2C3827]/10 space-y-4">
                <div className="text-xs text-[#687163] space-y-1">
                  <p className="font-medium text-[#222521]">Woollahra Campus</p>
                  <p>42 Parkland Avenue, Woollahra NSW</p>
                  <p>Monday – Friday · 7:00 am – 6:00 pm</p>
                </div>
                <Button
                  to="/request-a-tour"
                  variant="primary"
                  size="md"
                  className="w-full justify-between"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request a Private Tour
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
