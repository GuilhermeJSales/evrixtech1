import { HeroData, ServicesHighlights } from "@/app/types/lading";

export const heroData: HeroData = {
  title: "Transforme Sua Presença Digital",
  subtitle: "Desenvolvimento Web Premium + Tráfego Pago",
  description: "Sites Profissionais que convertem visitantes em clientes...",
  cta: {
    primary: "Falar com Especialista",
    secondary: "Ver Nossos Planos",
  },
  whatsapp: "+5511961683295",
};

export const servicesHighlights: ServicesHighlights[] = [
  {
    id: 1,
    icon: "Code",
    title: "Desenvolvimento Profissional",
    description:
      "Sites modernos, rápidos e otimizados para conversão. Código limpo e tecnologias atuais para garantir performance máxima.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    icon: "RefreshCw",
    title: "Manutenção Contínua",
    description:
      "Seu site sempre atualizado, seguro e funcionando perfeitamente. Atualizações de conteúdo, segurança e performance sem preocupação.",
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    id: 3,
    icon: "TrendingUp",
    title: "Tráfego Qualificado",
    description:
      "Estratégias de tráfego pago que trazem clientes reais. Gestão profissional de anúncios com foco em ROI e resultados mensuráveis.",
    color: "from-teal-500/20 to-emerald-500/20",
  },
];
