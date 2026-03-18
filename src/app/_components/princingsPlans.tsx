"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { plansData } from "@/data/landingData";
import { ArrowRight, Check, Crown } from "lucide-react";

export default function PricingsPlans() {
  const handlePlanClick = (planName: string) => {
    const message = `Olá! Tenho interesse no plano ${planName} da EvrixTech. Gostaria de mais informações.`;
    window.open(
      `https://wa.me/5511961683295?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const getColorClass = (color: string, isPopular: boolean) => {
    const colors = {
      blue: {
        badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
        gradient: "from-blue-500/5 to-cyan-500/5",
        border: "border-blue-500/20 hover:border-blue-500/40",
        button:
          "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400",
        glow: "group-hover:shadow-blue-500/20",
      },
      cyan: {
        badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
        gradient: "from-cyan-500/5 to-blue-500/5",
        border: "border-cyan-500/30 hover:border-cyan-400/50",
        button:
          "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400",
        glow: "group-hover:shadow-cyan-500/30",
      },
      coral: {
        badge: "bg-orange-500/10 text-orange-300 border-orange-500/30",
        gradient: "from-orange-500/5 to-pink-500/5",
        border: "border-orange-500/20 hover:border-orange-500/40",
        button:
          "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400",
        glow: "group-hover:shadow-orange-500/20",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="plans"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <Badge className="mb-4 border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
            Planos & Preços
          </Badge>
          <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Escolha Seu Plano de
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Crescimento
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-300">
            Soluções flexíveis para cada momento do seu negócio. Do básico ao
            exclusivo, todos os planos com foco em resultados.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {plansData.map((plan) => {
            const colors = getColorClass(plan.color, plan.popular);

            return (
              <Card
                key={plan.id}
                className={`group relative overflow-visible bg-gradient-to-br p-8 ${colors.gradient} border backdrop-blur-xl ${colors.border} ${colors.glow} transition-all duration-500 hover:scale-105 ${plan.popular ? "md:z-10 md:scale-105" : ""}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                    <Badge className="border-0 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-sm text-white shadow-lg">
                      <Crown className="mr-1 h-3 w-3" />
                      Mais Popular
                    </Badge>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="mb-2 text-3xl font-bold text-white">
                    {plan.name}
                  </h3>
                  <p className="mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-sm font-semibold text-transparent">
                    {plan.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6 border-b border-white/10 pb-6">
                  <div className="mb-1 text-2xl font-bold text-white">
                    {plan.price}
                  </div>
                  <p className="text-sm text-slate-400">{plan.priceNote}</p>
                </div>

                {/* Features */}
                <div className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Check className="h-5 w-5 text-cyan-400" />
                      </div>
                      <span className="text-sm leading-relaxed text-slate-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full cursor-pointer py-6 text-base font-semibold ${colors.button} group border-0 text-white shadow-lg transition-all duration-300`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-slate-400">
            Todos os planos incluem hospedagem segura, certificado SSL e suporte
            técnico.
            <br />
            <span className="text-cyan-400">
              Dúvidas? Fale conosco no WhatsApp!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
