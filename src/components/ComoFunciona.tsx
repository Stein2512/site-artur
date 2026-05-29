import { MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PASSOS_FUNCIONAMENTO } from '../data/imoveis';
import { motion } from 'motion/react';

interface ComoFuncionaProps {
  onOpenContact: () => void;
}

export default function ComoFunciona({ onOpenContact }: ComoFuncionaProps) {
  return (
    <section 
      id="como-funciona" 
      className="py-24 bg-luxury-black relative overflow-hidden"
    >
      {/* Decorative background glow on the left */}
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gold-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 inline-block mb-3">
            O Caminho da Exclusividade
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight font-light mb-4">
            Como Funciona Nossa <span className="italic text-gold-gradient font-normal">Assessoria</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-sans max-w-xl mx-auto leading-relaxed font-light">
            Nossa experiência é projetada para ser prática, discreta e totalmente alinhada ao seu estilo de vida, eliminando o estresse imobiliário.
          </p>
        </div>

        {/* 3 Step Timeline Cards */}
        <div className="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 lg:grid lg:grid-cols-3 lg:gap-8 relative snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/3 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-gold-900/10 via-gold-500/15 to-gold-900/10 z-0" />

          {PASSOS_FUNCIONAMENTO.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-luxury-charcoal/40 border border-gray-900 z-10 flex flex-col items-center text-center group hover:bg-luxury-charcoal/70 hover:border-gold-500/10 transition-all duration-300 w-[82vw] sm:w-[350px] lg:w-auto shrink-0 snap-start"
            >
              {/* Elegant Step Number with Gold effect */}
              <div className="text-4xl md:text-5xl font-serif text-gold-500/80 font-semibold mb-4 tracking-tighter select-none font-mono group-hover:scale-105 transition-transform duration-300">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-lg md:text-xl font-serif text-white mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">
                {step.description}
              </p>
              
              {/* Step Footer Micro Indicator */}
              <div className="mt-auto pt-2">
                {index === 0 && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-[10px] text-emerald-300 font-mono tracking-widest uppercase">
                    Canal Verde 24h
                  </span>
                )}
                {index === 1 && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-950/30 border border-gold-500/20 text-[10px] text-gold-200 font-mono tracking-widest uppercase">
                    Filtro Sob Medida
                  </span>
                )}
                {index === 2 && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/30 border border-purple-500/20 text-[10px] text-purple-300 font-mono tracking-widest uppercase">
                    Visitação VIP
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe gesture feedback */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-2 mb-6 text-[10px] font-mono text-gray-500 tracking-wider uppercase select-none">
          <span>Arraste para os lados</span>
          <span className="flex gap-1">
            <span className="w-1 h-1 rounded-full bg-gold-500/70 animate-ping"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            <span className="w-1 h-1 rounded-full bg-gold-500/40"></span>
          </span>
        </div>

        {/* Dynamic Consultative Banner */}
        <div className="mt-16 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-luxury-charcoal via-luxury-black to-luxury-charcoal border border-gold-500/10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="mt-1 p-2 rounded-lg bg-gold-950/40 text-gold-400 border border-gold-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-serif text-lg">Praticidade e Segurança jurídica</h4>
              <p className="text-sm text-gray-400 font-light mt-1 max-w-lg leading-relaxed">
                Toda documentação, histórico de valorização comercial e análise de risco são minuciosamente avaliadas por advogados especialistas locais em parceria para resguardar seu patrimônio.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="whitespace-nowrap px-6 py-3.5 rounded-lg bg-transparent hover:bg-gold-500 text-gold-300 hover:text-black font-sans font-medium text-xs tracking-wider uppercase border border-gold-500/30 transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Iniciar Curadoria</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
