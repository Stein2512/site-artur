import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Instagram, Phone } from 'lucide-react';
import { ARTUR_CONFIG } from '../data/config';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Destaques', href: '#destaques' },
    { label: 'Sobre', href: '#sobre' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-black/85 backdrop-blur-md border-b border-gray-900 shadow-xl' 
            : 'py-6 bg-transparent'
        }`}
        id="main-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <a 
            href="#inicio" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            className="flex flex-col tracking-wider group"
            id="brand-logo"
          >
            <span className="text-lg md:text-xl font-serif text-white uppercase tracking-[0.25em] group-hover:text-gold-300 transition-colors">
              Stein Imóveis
            </span>
            <span className="text-[9px] uppercase tracking-[0.34em] text-gold-400 font-mono font-medium">
              Assessoria Imobiliária
            </span>
          </a>

          {/* Nav Links Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors py-1.5 border-b border-transparent hover:border-gold-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social and CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={ARTUR_CONFIG.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gold-400 transition-colors p-2"
              title="Instagram @arturstein"
              aria-label="Instagram Stein Imóveis"
              referrerPolicy="no-referrer"
            >
              <Instagram className="w-4 h-4" />
            </a>
            
            <button
              onClick={onOpenContact}
              className="relative overflow-hidden group bg-transparent border border-gold-500/40 hover:border-gold-300 text-gold-300 hover:text-black hover:bg-gold-400 font-serif font-medium text-xs tracking-wider uppercase py-2.5 px-5 rounded-full flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
            >
              <span>Consultoria</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburguer Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/90 hover:text-gold-400 transition-colors p-1"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-luxury-black/95 backdrop-blur-lg border-b border-gold-500/10 py-6 px-6 md:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 border-b border-gray-900 pb-5">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="text-sm uppercase tracking-widest text-light-gray text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-black font-sans font-semibold text-center text-xs tracking-widest uppercase py-3.5 px-5 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 fill-black/10" />
                  <span>Falar no WhatsApp</span>
                </button>

                <a
                  href={ARTUR_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white py-2"
                >
                  <Instagram className="w-4 h-4 text-gold-400" />
                  <span>Siga @arturstein</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
