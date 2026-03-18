"use client";

import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { heroData } from "@/data/landingData";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${heroData.whatsapp.replace(/\D/g, "")}?text=Olá! Gostaria de saber mais sobre os serviços da EvrixTech.`,
      "_blank",
    );
  };

  const handleScrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animação dos elementos do background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80 md:h-96 md:w-96"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl delay-700 sm:h-80 sm:w-80 md:h-96 md:w-96"></div>
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-3xl sm:h-96 sm:w-96 md:h-[600px] md:w-[600px]"></div>

        {/* Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 backdrop-blur-sm sm:mb-8 sm:px-4">
          <Sparkles className="h-3 w-3 text-cyan-400 sm:h-4 sm:w-4" />
          <span className="text-xs font-medium text-cyan-300 sm:text-sm">
            Desenvolvimento Web Premium
          </span>
        </div>
        <h1 className="animate-fade-in-up mb-4 px-4 text-4xl font-bold sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="text-white">
            {heroData.title.split(" ").slice(0, 2).join(" ")}
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {heroData.title.split(" ").slice(2).join(" ")}
          </span>
        </h1>

        <p className="animate-fade-in-up mb-3 px-4 text-lg font-semibold text-blue-200/80 delay-200 sm:mb-4 sm:text-xl md:text-2xl">
          {heroData.subtitle}
        </p>

        <p className="animate-fade-in-up mx-auto mb-8 max-w-3xl px-4 text-base leading-relaxed text-slate-300 delay-300 sm:mb-12 sm:text-lg">
          {heroData.description}
        </p>

        {/* CTA BUTTONS */}
        <div className="animate-fade-in-up flex flex-col items-center justify-center gap-3 px-4 delay-400 sm:flex-row sm:gap-4">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="group hover:from-cyan-4 w-full cursor-pointer border-0 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-5 text-base text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:to-blue-400 hover:shadow-cyan-500/40 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
          >
            <Phone className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12 sm:h-5 sm:w-5" />
            {heroData.cta.primary}
          </Button>

          <Button
            onClick={handleScrollToPlans}
            size="lg"
            variant="outline"
            className="w-full cursor-pointer border-white/10 bg-white/5 px-6 text-base text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
          >
            {heroData.cta.secondary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </Button>
        </div>

        <div className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 transform animate-bounce md:block">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cyan-500/30 p-2">
            <div className="animate-scroll-down h-3 w-1.5 rounded-full bg-cyan-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
