import { MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CtaFinalProps {
  onOpenContact: () => void;
}

export default function CtaFinal({ onOpenContact }: CtaFinalProps) {
  return (
    <section 
      id="contato" 
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Dynamic Gold Light Circle Backdrop */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[150%] max-w-7xl aspect-video rounded-full bg-gradient-to-t from-gold-950/10 via-gold-500/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Floating brand luxury badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-950/35 border border-gold-500/20 mb-6 font-mono tracking-widest text-[9px] uppercase text-gold-300">
          <Sparkles className="w-3 h-3 text-gold-400" />
          <span>Atendimento Boutique & Exclusivo</span>
        </div>

        {/* Essential Title Tag */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight font-light tracking-tight max-w-3xl mx-auto"
          id="cta-final-title"
        >
          Vamos encontrar o <span className="italic text-gold-gradient font-normal">imóvel ideal</span> para você?
        </h2>

        {/* Safe consult paragraph */}
        <p className="text-sm md:text-base text-gray-400 font-sans max-w-xl mx-auto mt-6 leading-relaxed font-light">
          Agende um atendimento consultivo personalizado no momento mais conveniente de sua agenda. Oferecemos suporte total, discrição absoluta e o melhor portfólio da Serra Gaúcha.
        </p>

        {/* Large WhatsApp CTA layout button */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onOpenContact}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-gold-600 to-gold-450 hover:from-gold-550 hover:to-gold-350 text-black font-sans font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-gold-500/10 hover:shadow-gold-500/20 cursor-pointer flex items-center justify-center gap-2.5"
            id="cta-final-whatsapp-btn"
          >
            <MessageSquare className="w-4 h-4 fill-black/10" />
            <span>Falar com Artur Stein no WhatsApp</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5px] text-black/80" />
          </motion.button>
          
          {/* Quick response disclaimer */}
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-500/40" />
            <span>Retorno de assessoria em até 15 minutos em horário comercial</span>
          </div>
        </div>

      </div>
    </section>
  );
}
