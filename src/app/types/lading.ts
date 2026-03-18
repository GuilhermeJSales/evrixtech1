export interface CTA {
  primary: string;
  secondary: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  cta: CTA;
  whatsapp: string;
}

export interface ServicesHighlights {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export type PlanColors = "blue" | "cyan" | "coral";
export interface Plans {
  id: number;
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  limitations: string[];
  cta: string;
  popular: boolean;
  color: PlanColors;
}
