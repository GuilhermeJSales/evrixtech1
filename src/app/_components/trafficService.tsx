"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trafficService } from "@/data/landingData";
import { BarChart3, Target, TrendingUp, Zap } from "lucide-react";

export default function TrafficService() {
  const handleCTAClick = () => {
    const message = `Olá! Tenho interesse no serviço de Tráfego Pago da EvrixTech. Gostaria de uma proposta.`;
    window.open(
      `https://wa.me/5511961683295?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const platformIcons: Record<string, string> = {
    "Google Ads": "🎯",
    "Meta Ads": "📱",
    "Instagram Ads": "📸",
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 transform rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <Badge className="mb-4 border-orange-500/30 bg-orange-500/10 text-orange-300">
              <Zap className="mr-1 h-3 w-3" />
              Serviço Premium
            </Badge>

            <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              {trafficService.title}
              <span className="mt-2 block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                {trafficService.subtitle}
              </span>
            </h2>

            <p className="mb-8 text-xl leading-relaxed text-slate-300">
              {trafficService.description}
            </p>

            {/* Pricing model */}
            <Card className="mb-8 border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-pink-500/10 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-pink-500">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {trafficService.pricing.model}
                  </h3>
                  <p className="mb-3 text-sm text-slate-300">
                    {trafficService.pricing.example}
                  </p>
                  <Badge
                    variant="outline"
                    className="border-orange-500/30 text-orange-300"
                  >
                    {trafficService.pricing.minInvestment}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Platforms */}
            <div className="mb-8 flex flex-wrap gap-3">
              {trafficService.platforms.map((platform, idx) => (
                <Badge
                  key={idx}
                  className="border-white/10 bg-white/5 px-4 py-2 text-slate-200 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <span className="mr-2">{platformIcons[platform]}</span>
                  {platform}
                </Badge>
              ))}
            </div>

            <Button
              onClick={handleCTAClick}
              size="lg"
              className="border-0 bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-6 text-lg text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:from-orange-400 hover:to-pink-400 hover:shadow-orange-500/40"
            >
              {trafficService.cta}
              <TrendingUp className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right content - Features grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {trafficService.features.map((feature, idx) => {
              const icons = [
                Target,
                BarChart3,
                TrendingUp,
                Zap,
                Target,
                BarChart3,
                TrendingUp,
              ];
              const Icon = icons[idx % icons.length];

              return (
                <Card
                  key={idx}
                  className="group border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-white/10"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-pink-500/20 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5 text-orange-400" />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200">
                    {feature}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
