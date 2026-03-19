import {
  DevServices,
  HeroData,
  Plans,
  ServicesHighlights,
} from "@/app/types/lading";

export const heroData: HeroData = {
  title: "Transforme Sua Presença Digital",
  subtitle: "Desenvolvimento Web Premium + Tráfego Pago",
  description:
    "Sites profissionais que convertem visitantes em clientes. Criação, manutenção contínua e estratégias de tráfego pago para empresas que buscam resultados reais.",
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

export const plansData: Plans[] = [
  {
    id: 1,
    name: "Básico",
    tagline: "Presença Digital Profissional",
    description:
      "Ideal para quem está começando e precisa de uma presença online rápida e profissional",
    price: "A partir de R$ 1.500",
    priceNote: "Pagamento único",
    features: [
      "Site baseado em template premium",
      "Customização completa (cores, textos, imagens)",
      "Design responsivo para todos os dispositivos",
      "Otimização básica para SEO",
      "Formulário de contato integrado",
      "Integração com redes sociais",
      "Entrega em até 7 dias úteis",
    ],
    limitations: ["Sem manutenção recorrente", "Suporte técnico por 15 dias"],
    cta: "Começar Agora",
    popular: false,
    color: "blue",
  },
  {
    id: 2,
    name: "Profissional",
    tagline: "Crescimento Sustentável",
    description:
      "Para negócios que querem crescer com suporte contínuo e atualizações constantes",
    price: "R$ 2.500 + R$ 600/mês",
    priceNote: "Entrada + mensalidade",
    features: [
      "Tudo do plano Básico",
      "Manutenção e atualizações mensais ilimitadas",
      "Suporte prioritário via WhatsApp",
      "Otimização contínua de SEO",
      "Backups automáticos semanais",
      "Certificado SSL premium incluso",
      "Até 3 revisões de conteúdo por mês",
    ],
    limitations: [],
    cta: "Quero Crescer",
    popular: true,
    color: "cyan",
  },
  {
    id: 3,
    name: "Enterprise",
    tagline: "Solução Sob Medida",
    description:
      "Layout exclusivo desenvolvido especificamente para sua marca, com acompanhamento total",
    price: "A partir de R$ 5.000 + R$ 1000/mês",
    priceNote: "Entrada + mensalidade",
    features: [
      "Design 100% exclusivo e personalizado",
      "Estudo aprofundado da sua marca e público",
      "Desenvolvimento customizado de funcionalidades",
      "Manutenção e atualizações ilimitadas",
      "Suporte dedicado",
      "Estratégia completa de SEO",
      "Análise semanal de métricas e conversão",
      "Consultoria estratégica mensal",
      "Prioridade absoluta em todas as solicitações",
    ],
    limitations: [],
    cta: "Solicitar Proposta",
    popular: false,
    color: "coral",
  },
];

export const developmentServices: DevServices[] = [
  {
    id: 1,
    icon: "Rocket",
    title: "Landing Pages",
    description:
      "Páginas de alta conversão focadas em um objetivo específico. Design persuasivo que transforma visitantes em leads e clientes.",
    features: [
      "Design focado em conversão",
      "Formulários otimizados",
      "Botão do WhatsApp",
      "SEO Copywriting",
    ],
    idealFor:
      "Campanhas de marketing, lançamentos de produtos, captação de leads",
  },
  {
    id: 2,
    icon: "Building2",
    title: "Sites Institucionais",
    description:
      "Presença online profissional para sua empresa. Apresente seus serviços, valores e diferenciais de forma impactante.",
    features: [
      "Design profissional e moderno",
      "Seções customizáveis",
      "Blog integrado",
      "Formulários de contato",
    ],
    idealFor: "Empresas, prestadores de serviços, consultórios, escritórios",
  },
  {
    id: 3,
    icon: "Briefcase",
    title: "Portfólios",
    description:
      "Mostre seu trabalho da melhor forma. Galerias, cases e projetos organizados para impressionar seus clientes.",
    features: [
      "Galeria de projetos",
      "Filtros por categoria",
      "Lightbox profissional",
      "Responsivo e elegante",
    ],
    idealFor:
      "Designers, fotógrafos, arquitetos, agências criativas, freelancers",
  },
];
