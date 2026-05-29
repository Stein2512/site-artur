import { Sparkles, Quote, ShieldAlert, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Sobre() {
  return (
    <section 
      id="sobre" 
      className="py-28 bg-luxury-black relative overflow-hidden border-t border-gray-950"
    >
      {/* Visual glowing light subtle flare */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-gold-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Subtle Brand Mark */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center font-serif text-gold-400 font-light italic text-lg tracking-widest bg-black">
            AS
          </div>
        </motion.div>

        {/* Large Curated Statement Block */}
        <div className="max-w-4xl mx-auto">
          {/* Quote mark ornament */}
          <div className="flex justify-center mb-6 text-gold-500/35">
            <Quote className="w-8 h-8 rotate-180" />
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-relaxed font-light tracking-wide italic"
            id="sobre-statement-title"
          >
            “Conectando clientes às melhores oportunidades imobiliárias em Gramado, Canela e Serra Gaúcha, com atendimento personalizado e foco em experiência, exclusividade e praticidade.”
          </motion.h2>

          {/* Divider decorative */}
          <div className="h-[1px] w-16 bg-gold-500/20 mx-auto my-10" />

          {/* Core commitment pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left mt-8">
            <div className="p-5 rounded-2xl bg-luxury-charcoal/30 border border-gray-900">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-500 block mb-1">Pilar de Negócio</span>
              <h3 className="text-white font-serif text-base mb-1.5 font-medium">Experiência</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Entendimento sofisticado do nicho de alto padrão e lifestyle da Serra.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-luxury-charcoal/30 border border-gray-900">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-500 block mb-1">Pilar de Relação</span>
              <h3 className="text-white font-serif text-base mb-1.5 font-medium">Exclusividade</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Acesso preferencial e off-market a propriedades restritas e exclusivas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-luxury-charcoal/30 border border-gray-900">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-500 block mb-1">Pilar de Execução</span>
              <h3 className="text-white font-serif text-base mb-1.5 font-medium">Praticidade</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Simplificação de rotinas operacionais com máxima velocidade e privacidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
