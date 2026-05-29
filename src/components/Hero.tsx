import React from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/imoveis';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const scrollToDiferenciais = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#diferenciais')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white py-20"
    >
      {/* Immersive Background Image / Ambient */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Gramado Imóveis de Luxo Serra Gaúcha"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45 scale-105 select-none"
        />
        {/* Soft, deep custom vignette and shadows for premium look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/40 z-10" />
      </div>

      {/* Hero content container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-12 md:mt-16 flex flex-col items-center">
        {/* Top small badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-950/40 border border-gold-500/20 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-200 font-mono font-medium">
            CURADORIA IMOBILIÁRIA
          </span>
        </motion.div>

        {/* Main large elegant title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-tight tracking-tight font-light max-w-4xl"
          id="hero-title"
        >
          Imóveis em <br />
          <span className="italic text-gold-gradient font-normal">Gramado & Canela</span>
        </motion.h1>

        {/* Elegant separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="h-[1px] w-24 bg-gold-400/45 my-8"
        />

        {/* Consultive Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 font-sans max-w-2xl px-2 leading-relaxed font-light"
          id="hero-subtitle"
        >
          Atendimento personalizado para encontrar o imóvel ideal na Serra Gaúcha.
        </motion.p>

        {/* Interactive CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-sans font-medium text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 active:scale-97 flex items-center justify-center gap-2"
            id="hero-whatsapp-cta"
          >
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
          </button>

          <a
            href="#destaques"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#destaques')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 hover:bg-luxury-charcoal border border-white/10 hover:border-gold-500/40 text-gray-300 hover:text-white font-sans font-medium text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explorar Portfólio</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical coordinates / location tags */}
      <div className="absolute bottom-10 left-8 z-20 hidden lg:flex flex-col gap-1 text-[10px] uppercase font-mono tracking-[0.2em] text-gray-500">
        <span>Serra Gaúcha</span>
        <span className="text-gold-500/70">Gramado 29° 22&apos; S • Canela 29° 21&apos; S</span>
      </div>

      {/* Smooth Scroll Indicator */}
      <a
        href="#diferenciais"
        onClick={scrollToDiferenciais}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500 hover:text-gold-400 transition-colors group cursor-pointer"
        aria-label="Rolar para diferenciais"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Descubra</span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
      </a>
    </section>
  );
}
