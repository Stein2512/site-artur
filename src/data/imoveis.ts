import chaletCanela from '../assets/images/chalet_canela_autumn_1779908821806.png';
import villaGramado from '../assets/images/modern_villa_gramado_1779908837459.png';
import interiorPenthouse from '../assets/images/luxury_interior_fireplace_1779908854957.png';
import heroSerraGaucha from '../assets/images/hero_serra_gaucha_1779908803855.png';

import { Imovel, DiferencialItem, StepItem } from '../types';

export const HERO_IMAGE = heroSerraGaucha;

export const IMOVEIS_DESTAQUE: Imovel[] = [
  {
    id: "imovel-1",
    title: "Imóveis na Planta",
    category: "Lançamentos & Construções",
    location: "Gramado & Canela, RS",
    features: ["Alta Valorização", "Fluxo Facilitado de Pagamento", "Projetos de Arquitetura Moderna", "Opção de Personalizar a Planta"],
    imageUrl: "https://i.postimg.cc/VNPH1JMb/Montalcino.jpg",
    tags: ["Lançamentos", "Investimento", "Futuro"],
  },
  {
    id: "imovel-2",
    title: "Imóveis Prontos",
    category: "Prontos para Morar",
    location: "Gramado & Canela, RS",
    features: ["Entrega Imediata", "Acabamento de Altíssimo Padrão", "Opções Mobiliadas & Decoradas", "Localizações Nobres e Privilegiadas"],
    imageUrl: "https://i.postimg.cc/PfCkqrXs/1681408850218-6351c904-2006-4f04-9272-b1ed260dddbd.jpg",
    tags: ["Pronto", "Alto Luxo", "Mobiliado"],
  },
  {
    id: "imovel-3",
    title: "Áreas Rurais",
    category: "Chácaras, Sítios & Fazendas",
    location: "Serra Gaúcha, RS",
    features: ["Amplo Contato com a Natureza", "Sítios de Lazer e Refúgios", "Fontes de Água e Nascentes", "Privacidade e Sossego Absoluto"],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    tags: ["Rural", "Refúgios", "Privacidade"],
  }
];

export const DIFERENCIAIS: DiferencialItem[] = [
  {
    id: "dif-1",
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Realizamos uma curadoria sob medida para os seus desejos, de forma discreta e eficiente.",
    iconName: "UserCheck"
  },
  {
    id: "dif-2",
    title: "Oportunidades Selecionadas",
    description: "Acesso a propriedades que muitas vezes não estão listadas publicamente, através de relacionamento direto na região.",
    iconName: "Target"
  },
  {
    id: "dif-3",
    title: "Imóveis de Alto Padrão",
    description: "Portfólio rigorosamente selecionado de vilas, chalés modernos, coberturas e condomínios de grife.",
    iconName: "Shield"
  },
  {
    id: "dif-4",
    title: "Apartamentos, Casas e Terrenos",
    description: "Ampla cobertura de propriedades completas nos bairros mais nobres de Gramado e Canela.",
    iconName: "Home"
  },
  {
    id: "dif-5",
    title: "Investimentos Imobiliários",
    description: "Análise mercadológica com dados concretos de valorização e rentabilidade para alocação inteligente de capital.",
    iconName: "TrendingUp"
  },
  {
    id: "dif-6",
    title: "Serra Gaúcha Expertise",
    description: "Vivência e proximidade com as construtoras de elite da Serra Gaúcha, garantindo melhores condições de negociação.",
    iconName: "Compass"
  }
];

export const PASSOS_FUNCIONAMENTO: StepItem[] = [
  {
    number: "01",
    title: "O cliente entra em contato",
    description: "Inicie uma conversa sem compromisso por WhatsApp ou preencha o formulário para indicar suas preferências de localização e tipo."
  },
  {
    number: "02",
    title: "Entendemos o perfil e objetivo",
    description: "Entramos em contato para mapear seu propósito: investimento, refúgio de temporada ou moradia familiar."
  },
  {
    number: "03",
    title: "Apresentamos oportunidades alinhadas",
    description: "Enviamos um book exclusivo de opções altamente qualificadas e selecionadas sob medida para o seu perfil, organizando visitas exclusivas."
  }
];
