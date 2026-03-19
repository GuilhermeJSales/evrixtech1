"use client";
import {
  Rocket,
  ShoppingCart,
  Building2,
  Briefcase,
  Layers,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { developmentServices } from "@/data/landingData";
import { DevServicesIcons } from "../types/lading";

const iconMap: Record<DevServicesIcons, LucideIcon> = {
  Rocket,
  ShoppingCart,
  Building2,
  Briefcase,
  Layers,
  Smartphone,
};

export default function DevelopmentServices() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5511961683295?text=Olá! Gostaria de saber mais sobre desenvolvimento de sites da EvrixTech.",
      "_blank",
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-12 md:py-24">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <Badge className="mb-4 border-cyan-500/30 bg-cyan-500/10 text-xs text-cyan-300 sm:text-sm">
            Desenvolvimento Profissional
          </Badge>
          <h2 className="mb-4 px-4 text-3xl font-bold text-white sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
            Desenvolvemos
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              sites modernos, rápidos e otimizados para seus objetivos.
            </span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 md:mb-16 md:gap-8 lg:grid-cols-3">
          {developmentServices.map((service, idx) => {
            const Icon = iconMap[service.icon] || Layers;

            return (
              <Card
                key={service.id}
                className="group border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 md:p-8"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 md:h-16 md:w-16">
                  <Icon className="h-7 w-7 text-cyan-400 md:h-8 md:w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-400 md:mb-4 md:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-slate-300 md:text-base">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="mb-6 space-y-2">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                      <span className="text-xs text-slate-400 md:text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Ideal for badge */}
                <div className="border-t border-white/10 pt-4">
                  <p className="mb-2 text-xs font-semibold text-cyan-400">
                    IDEAL PARA:
                  </p>
                  <p className="text-sm text-slate-300">{service.idealFor}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technologies section */}
        <div className="mb-12 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 md:p-10">
          <div className="mb-8 text-center">
            <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Tecnologias Modernas
            </h3>
            <p className="text-base text-slate-300 md:text-lg">
              Utilizamos as melhores tecnologias do mercado para garantir
              performance e qualidade
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { name: "React", desc: "Interface moderna" },
              { name: "Next.js", desc: "SEO otimizado" },
              { name: "Node.js", desc: "Backend robusto" },
              { name: "WordPress", desc: "CMS popular" },
              { name: "N8N", desc: "Automação de fluxos" },
              { name: "Figma", desc: "Design visual" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10"
              >
                <p className="mb-1 text-base font-bold text-white md:text-lg">
                  {tech.name}
                </p>
                <p className="text-xs text-slate-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Smartphone,
              title: "Responsivo",
              desc: "100% adaptado para mobile, tablet e desktop",
            },
            {
              icon: Rocket,
              title: "Rápido",
              desc: "Performance otimizada e carregamento veloz",
            },
            {
              icon: CheckCircle2,
              title: "SEO Otimizado",
              desc: "Configurado para ranquear no Google",
            },
            {
              icon: Layers,
              title: "Escalável",
              desc: "Preparado para crescer com seu negócio",
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="w-full cursor-pointer border-0 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-5 text-base text-white shadow-lg hover:from-cyan-400 hover:to-blue-400 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <p className="mt-4 text-sm text-slate-400">
            Resposta em até 24 horas • Consulta gratuita
          </p>
        </div>
      </div>
    </section>
  );
}
