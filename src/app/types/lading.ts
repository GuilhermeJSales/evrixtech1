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

export type ServicesIcons =
  | "Code"
  | "RefreshCw"
  | "TrendingUp"
  | "Target"
  | "Palette"
  | "Rocket"
  | "BarChart3";
export interface ServicesHighlights {
  id: number;
  icon: ServicesIcons;
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

export type DevServicesIcons =
  | "Rocket"
  | "ShoppingCart"
  | "Building2"
  | "Briefcase"
  | "Layers"
  | "Smartphone";
export interface DevServices {
  id: number;
  icon: DevServicesIcons;
  title: string;
  description: string;
  features: string[];
  idealFor: string;
}

export interface TrafficService {
  title: string;
  subtitle: string;
  description: string;
  pricing: {
    model: string;
    example: string;
    minInvestment: string;
  };
  features: string[];
  platforms: string[];
  cta: string;
}

export type IconsProcess = "Target" | "Palette" | "Rocket" | "BarChart3";
export interface ProcessSteps {
  number: string;
  title: string;
  description: string;
  icon: IconsProcess;
}

export type IconsStats = "CheckCircle2" | "Heart" | "TrendingUp" | "Clock";
export interface StatsData {
  number: string;
  label: string;
  icon: IconsStats;
}
