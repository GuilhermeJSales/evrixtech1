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
