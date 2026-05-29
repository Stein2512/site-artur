export interface Imovel {
  id: string;
  title: string;
  category: string; // e.g. "Mansão Contemporânea", "Chalet Alpino", "Cobertura Duplex"
  location: string; // e.g. "Bairro Aspen, Gramado", "Vista do Vale, Canela"
  price?: string; // Optional (or curated "Sob consulta")
  features: string[]; // e.g. ["4 Suítes", "Lareira", "Parrilla"]
  imageUrl: string;
  tags: string[];
}

export interface DiferencialItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Name of Lucide icon
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  locationPreference: string;
  propertyType: string;
  notes: string;
}
