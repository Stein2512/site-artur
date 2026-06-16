import { Instagram, MapPin, MessageSquare, ShieldAlert, Sparkles, ArrowUp } from 'lucide-react';
import { ARTUR_CONFIG } from '../data/config';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-black border-t border-gray-900 text-gray-400 py-16 px-6 relative z-10" id="main-footer">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-950">
          
          {/* Logo Brand info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex flex-col tracking-wider">
              <span className="text-xl font-serif text-white uppercase tracking-[0.25em]">
                Stein Imóveis
              </span>
              <span className="text-[10px] uppercase tracking-[0.34em] text-gold-400 font-mono font-medium">
                Assessoria Imobiliária
              </span>
            </div>
            <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-sm font-light">
              Curadoria especializada de imóveis de alto luxo na Serra Gaúcha. Oferecemos segurança, discrição e acesso a residências singulares.
            </p>
          </div>

          {/* Quick links & Locations */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
              Região de Atuação
            </span>
            <ul className="space-y-2 text-xs font-light text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-gold-500/60 shrink-0" />
                <span>Gramado - Serra Gaúcha</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-gold-500/60 shrink-0" />
                <span>Canela - Serra Gaúcha</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
              Canais de Atendimento
            </span>
            <div className="space-y-3 text-xs">
              <div className="flex flex-col">
                <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">WhatsApp</span>
                <a 
                  href={`https://wa.me/${ARTUR_CONFIG.whatsappNumber}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  referrerPolicy="no-referrer"
                  className="text-white hover:text-gold-300 transition-colors flex items-center gap-1.5 mt-1 font-medium font-sans"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-gold-500/80 shrink-0" />
                  <span>{ARTUR_CONFIG.whatsappLabel}</span>
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">Instagram</span>
                <a 
                  href={ARTUR_CONFIG.instagramUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  referrerPolicy="no-referrer"
                  className="text-white hover:text-gold-300 transition-colors flex items-center gap-1.5 mt-1 font-medium font-sans"
                >
                  <Instagram className="w-3.5 h-3.5 text-gold-500/80 shrink-0" />
                  <span>@{ARTUR_CONFIG.instagramUsername}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-gray-600 font-sans font-light">
          
          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            {/* Disclaimer explicitly matching user guidelines */}
            <p>{ARTUR_CONFIG.parceriasLabel}</p>
            <p className="text-gray-700 text-[10px] font-mono">
              {ARTUR_CONFIG.creciPlaceholder}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Stein Imóveis. Todos os direitos reservados.</span>
            <button 
              onClick={handleScrollToTop}
              className="p-2 rounded-full bg-luxury-gray border border-gray-900 text-gray-500 hover:text-white hover:border-gold-500/20 transition-all duration-300 cursor-pointer"
              aria-label="Voltar para o topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
