import React, { useState } from 'react';
import { X, Send, Shield, Sparkles, MessageSquare } from 'lucide-react';
import { ARTUR_CONFIG } from '../data/config';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProperty?: string;
}

export default function ContactModal({ isOpen, onClose, prefilledProperty }: ContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preference, setPreference] = useState('Ambas (Gramado & Canela)');
  const [propertyType, setPropertyType] = useState('Casas');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the WhatsApp message beautifully
    const greeting = "Olá, gostaria de iniciar uma assessoria personalizada para encontrar meu imóvel na Serra Gaúcha.";
    const propDetails = prefilledProperty ? `\n\n📌 *Imóvel de Interesse:* ${prefilledProperty}` : '';
    const details = `\n\n👤 *Nome:* ${name}\n📱 *WhatsApp:* ${phone}\n📍 *Localização:* ${preference}\n🏢 *Interesse:* ${propertyType}${notes ? `\n\n✍️ *Anotações adicionais:* "${notes}"` : ''}`;
    
    const fullText = encodeURIComponent(`${greeting}${propDetails}${details}`);
    const whatsappUrl = `https://wa.me/${ARTUR_CONFIG.whatsappNumber}?text=${fullText}`;

    // Small delay for luxury feel before redirect
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="contact-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl glass-panel bg-luxury-black border border-gold-500/20 shadow-2xl z-10"
          >
            {/* Elegant Top Gold Gradient Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold-800 via-gold-400 to-gold-500" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gold-300 transition-colors p-1"
              aria-label="Close"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-gold-400 text-xs tracking-widest font-mono uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curadoria Exclusiva</span>
                </div>
                <h3 className="text-2xl font-serif text-white leading-tight">
                  {prefilledProperty ? 'Solicitar Informações Exclusive' : 'Iniciar Assessoria Consultiva'}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Mapeamos seu perfil para apresentar oportunidades customizadas.
                </p>
                {prefilledProperty && (
                  <div className="mt-3 px-3 py-2 rounded-lg bg-gold-950/40 border border-gold-500/20 text-xs text-gold-200 font-sans font-medium">
                    Referência: {prefilledProperty}
                  </div>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-mono mb-1.5">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-luxury-charcoal/80 border border-gray-800 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 transition-colors duration-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-mono mb-1.5">WhatsApp / Contato *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(54) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-luxury-charcoal/80 border border-gray-800 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 transition-colors duration-200 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-mono mb-1.5">Preferência Local</label>
                    <select
                      value={preference}
                      onChange={(e) => setPreference(e.target.value)}
                      className="w-full bg-luxury-charcoal/80 border border-gray-800 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 rounded-lg px-3 py-2.5 text-sm text-white transition-colors duration-200 outline-none cursor-pointer"
                    >
                      <option value="Gramado (Serra Gaúcha)">Gramado</option>
                      <option value="Canela (Serra Gaúcha)">Canela</option>
                      <option value="Ambas (Gramado & Canela)">Ambas</option>
                      <option value="Outras localidades">Outras localidades</option>
                      <option value="Indiferente">Indiferente</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-mono mb-1.5">Tipo de Imóvel</label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-luxury-charcoal/80 border border-gray-800 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 rounded-lg px-3 py-2.5 text-sm text-white transition-colors duration-200 outline-none cursor-pointer"
                    >
                      <option value="Casas">Casas</option>
                      <option value="Casa em condomínio">Casa em condomínio</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Terrenos">Terrenos</option>
                      <option value="Áreas Rurais">Áreas Rurais</option>
                      <option value="Terrenos Residenciais">Terrenos Residenciais</option>
                      <option value="Terrenos Comerciais">Terrenos Comerciais</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-mono mb-1.5">Mensagem adicional (Opcional)</label>
                  <textarea
                    rows={2}
                    placeholder="Quero agendar uma visita ou estou buscando algo específico..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-luxury-charcoal/80 border border-gray-800 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-600 transition-colors duration-200 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group mt-2 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-sans font-medium text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-gold-500/10 cursor-pointer select-none transition-all duration-300 active:scale-98"
                  id="submit-modal-form-btn"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      Iniciando atendimento...
                    </span>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 fill-black/10" />
                      <span>Falar com Artur Stein</span>
                      <Send className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Safe & Discretion Badge */}
              <div className="mt-5 pt-4 border-t border-gray-900 flex items-center justify-center gap-2 text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                <Shield className="w-3 h-3 text-gold-500/50" />
                <span>Privacidade garantida e curadoria absolutamente discreta</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
