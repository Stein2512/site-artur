import React from 'react';
import { UserCheck, Target, Shield, Home, TrendingUp, Trees, Sparkles } from 'lucide-react';
import { DIFERENCIAIS } from '../data/imoveis';
import { motion } from 'motion/react';

// Explicit type-safe icon registry to avoid runtime template errors
const iconMap: Record<string, React.ComponentType<any>> = {
  UserCheck: UserCheck,
  Target: Target,
  Shield: Shield,
  Home: Home,
  TrendingUp: TrendingUp,
  Compass: Trees // mapping Serra Gaúcha to beautiful Trees icon representing Araucária / ecology
};

export default function Diferenciais() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      id="diferenciais" 
      className="py-24 bg-luxury-black border-y border-gray-950 relative overflow-hidden"
    >
      {/* Decorative abstract golden lens flare on the right */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Pilares de Atuação
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight font-light">
              Por que escolher nossos <br />
              <span className="italic text-gold-gradient font-normal">Serviços Executivos</span>
            </h2>
          </div>
          <div className="hidden md:block max-w-sm text-right">
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest leading-relaxed">
              Curadoria focada em alta performance imobiliária, confidencialidade absoluta e experiência.
            </p>
          </div>
        </div>

        {/* Six Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {DIFERENCIAIS.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="glass-panel glass-panel-hover p-8 rounded-2xl transition-all duration-300 flex flex-col group relative overflow-hidden w-[82vw] sm:w-[350px] md:w-auto shrink-0 snap-start"
              >
                {/* Micro gold detail inside the card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Circle Container with glow */}
                <div className="w-12 h-12 rounded-xl bg-luxury-gray border border-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-950/30 group-hover:border-gold-400 group-hover:text-gold-300 transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-serif text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-gray-400 leading-relaxed font-light mt-auto">
                  {item.description}
                </p>

                {/* Tiny arrow line that triggers on group hover */}
                <div className="w-0 group-hover:w-8 h-[1px] bg-gold-400 mt-6 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Swipe gesture feedback */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-[10px] font-mono text-gray-500 tracking-wider uppercase select-none">
          <span>Arraste para os lados</span>
          <span className="flex gap-1">
            <span className="w-1 h-1 rounded-full bg-gold-500/70 animate-ping"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            <span className="w-1 h-1 rounded-full bg-gold-500/40"></span>
          </span>
        </div>
      </div>
    </section>
  );
}
