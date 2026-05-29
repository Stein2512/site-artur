import { ArrowUpRight, Locate, MapPin, Sparkles, Sliders } from 'lucide-react';
import { IMOVEIS_DESTAQUE } from '../data/imoveis';
import { motion } from 'motion/react';

interface ImoveisDestaqueProps {
  onOpenWithPrefill: (propertyName: string) => void;
}

export default function ImoveisDestaque({ onOpenWithPrefill }: ImoveisDestaqueProps) {
  return (
    <section 
      id="destaques" 
      className="py-24 bg-luxury-black border-t border-gray-950 relative"
    >
      {/* Visual luxury ambient lines */}
      <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-gold-500/10 via-transparent to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Portfólio Sublime
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight font-light">
              Imóveis Selecionados em <br />
              <span className="italic text-gold-gradient font-normal">Destaque</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest leading-relaxed">
              Propriedades singulares para quem busca sofisticação e conforto na Serra Gaúcha.
            </p>
          </div>
        </div>

        {/* Listings Container (Grid on desktop, elegant swipeable horizontal carousel on mobile) */}
        <div className="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {IMOVEIS_DESTAQUE.map((imovel, idx) => (
            <motion.div
              key={imovel.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group flex flex-col h-full rounded-2xl overflow-hidden glass-panel border border-gray-900 bg-luxury-charcoal/20 hover:border-gold-500/20 hover:bg-luxury-charcoal/40 transition-all duration-300 w-[82vw] sm:w-[400px] md:w-auto shrink-0 snap-start"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[4/3] overflow-hidden bg-luxury-gray cursor-pointer" onClick={() => onOpenWithPrefill(imovel.title)}>
                <img
                  src={imovel.imageUrl}
                  alt={imovel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Premium gradient overlay inside image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35" />

                {/* Left Floating Category Tag */}
                <div className="absolute bottom-4 left-4 flex gap-1.5 flex-wrap">
                  {imovel.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-[9px] uppercase tracking-wider font-mono font-medium rounded-md bg-black/75 text-gold-300 border border-gold-500/20 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-6 md:p-8 flex flex-col flex-grow select-none">
                
                {/* Category metadata */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 mb-2 block font-medium">
                  {imovel.category}
                </span>

                {/* Property Main Title */}
                <h3 
                  onClick={() => onOpenWithPrefill(imovel.title)}
                  className="text-xl md:text-2xl font-serif text-white hover:text-gold-300 transition-colors cursor-pointer leading-snug"
                >
                  {imovel.title}
                </h3>

                {/* Location metadata with mini-pin */}
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-2.5 font-light">
                  <MapPin className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
                  <span>{imovel.location}</span>
                </div>

                {/* Elegant split features review */}
                <div className="mt-6 pt-5 border-t border-gray-900 grid grid-cols-2 gap-y-2 gap-x-1">
                  {imovel.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5 text-gray-400 text-xs font-light">
                      <div className="w-1 h-1 rounded-full bg-gold-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Curved Consult CTA Button */}
                <button
                  onClick={() => onOpenWithPrefill(imovel.title)}
                  className="w-full relative overflow-hidden group mt-8 bg-transparent border border-white/10 hover:border-gold-400 hover:bg-gold-500/5 text-gray-300 hover:text-gold-300 font-sans font-medium text-xs tracking-widest uppercase py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer active:scale-98"
                >
                  <span>Solicitar Informações</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-gold-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe gesture feedback */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-[10px] font-mono text-gray-500 tracking-wider uppercase select-none">
          <span>Arraste para os lados</span>
          <span className="flex gap-1">
            <span className="w-1 h-1 rounded-full bg-gold-500/70 animate-ping"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            <span className="w-1 h-1 rounded-full bg-gold-500/40"></span>
          </span>
        </div>

        {/* Minimal Disclaimer Footer */}
        <div className="text-center mt-12">
          <p className="text-xs text-gray-500 font-sans font-light">
            Não encontrou o que buscava? Imóvel Gramado realiza buscas sob ementa (off-market e parcerias estratégicas).
          </p>
        </div>
      </div>
    </section>
  );
}
