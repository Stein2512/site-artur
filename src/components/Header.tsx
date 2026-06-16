import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Instagram, Phone, Sparkles } from 'lucide-react';
import { ARTUR_CONFIG } from '../data/config';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sellerPhone, setSellerPhone] = useState('');

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

  const handleSellerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sellerPhone.trim()) return;

    const message = `Olá! Tenho interesse em vender meu imóvel em Gramado/Canela através da Stein Imóveis. Gostaria de agendar uma avaliação e conversar. Meu contato é: ${sellerPhone}`;
    const url = `https://wa.me/${ARTUR_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSellerPhone('');
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 shadow-xl"
        id="main-header"
      >
        {/* Superior Top Bar - Proprietário / Venda seu Imóvel */}
        <div className="w-full bg-gradient-to-r from-stone-950 via-gold-950/40 to-stone-950 border-b border-gold-500/15 py-2.5 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-center md:text-left">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0 hidden sm:inline" />
              <p className="text-[11px] text-gray-300 font-sans tracking-wide">
                <span className="text-gold-400 font-medium font-serif">Quer vender seu imóvel na Serra Gaúcha?</span> Anuncie na Stein Imóveis com máxima exclusividade e posicionamento inteligente.
              </p>
            </div>
            <form 
              onSubmit={handleSellerSubmit} 
              className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end"
            >
              <input
                type="tel"
                required
                placeholder="Seu WhatsApp (com DDD)"
                value={sellerPhone}
                onChange={(e) => setSellerPhone(e.target.value)}
                className="bg-black/80 border border-gray-850 focus:border-gold-500/70 text-[11px] px-3 py-1.5 rounded-lg text-white font-mono placeholder-gray-600 outline-none w-full max-w-[190px] sm:max-w-xs md:w-44 transition-colors font-light"
              />
              <button 
                type="submit" 
                className="bg-gold-500 hover:bg-gold-400 text-black font-semibold text-[10px] uppercase tracking-wider py-1.5 px-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 shrink-0 cursor-pointer"
              >
                Quero Vender
              </button>
            </form>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-black/95 backdrop-blur-md border-b border-gray-900' 
            : 'py-5 bg-black/60 backdrop-blur-sm'
        }`}>
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
            className="fixed inset-x-0 top-[125px] z-30 bg-luxury-black/95 backdrop-blur-lg border-b border-gold-500/10 py-6 px-6 md:hidden max-h-[calc(100vh-125px)] overflow-y-auto"
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
