import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import ComoFunciona from './components/ComoFunciona';
import ImoveisDestaque from './components/ImoveisDestaque';
import Sobre from './components/Sobre';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [prefilledProperty, setPrefilledProperty] = useState('');

  const handleOpenGeneralContact = () => {
    setPrefilledProperty('');
    setIsContactOpen(true);
  };

  const handleOpenWithPrefill = (propertyName: string) => {
    setPrefilledProperty(propertyName);
    setIsContactOpen(true);
  };

  return (
    <div className="bg-luxury-black text-gray-100 min-h-screen relative font-sans antialiased selection:bg-gold-500/30 selection:text-white">
      {/* Visual background ambient haze layer */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-gold-950/5 to-transparent pointer-events-none z-0" />
      
      {/* Translucent Header */}
      <Header onOpenContact={handleOpenGeneralContact} />

      {/* Main Core View Modules */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenContact={handleOpenGeneralContact} />

        {/* Diferenciais Section */}
        <Diferenciais />

        {/* Como Funciona Section */}
        <ComoFunciona onOpenContact={handleOpenGeneralContact} />

        {/* Imóveis em Destaque Catalog */}
        <ImoveisDestaque onOpenWithPrefill={handleOpenWithPrefill} />

        {/* Editorial Brand Manifesto */}
        <Sobre />

        {/* Final Trigger CTA */}
        <CtaFinal onOpenContact={handleOpenGeneralContact} />
      </main>

      {/* Detailed Footer with Disclaimers */}
      <Footer />

      {/* Lead Generation Dialogue Drawer */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefilledProperty={prefilledProperty || undefined}
      />
    </div>
  );
}
