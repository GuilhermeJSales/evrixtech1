import { Card } from "@/components/ui/card";
import { BarChart3, LucideIcon, Palette, Rocket, Target } from "lucide-react";
import { IconsProcess } from "../types/lading";
import { processSteps } from "@/data/landingData";

const iconMap: Record<IconsProcess, LucideIcon> = {
  Target,
  Palette,
  Rocket,
  BarChart3,
};

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Como
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Trabalhamos
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-300">
            Processo otimizado para entregar resultados rápidos sem perder
            qualidade
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Target;
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className="relative">
                {/* Connection line (hidden on mobile, shown on desktop) */}
                {idx < processSteps.length - 1 && (
                  <div className="absolute top-16 left-full hidden h-0.5 w-8 bg-gradient-to-r from-cyan-500/50 to-transparent lg:block"></div>
                )}

                <Card
                  className={`group h-full bg-gradient-to-br p-6 ${isEven ? "from-cyan-500/5 to-blue-500/5" : "from-blue-500/5 to-cyan-500/5"} border border-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10`}
                >
                  {/* Step number */}
                  <div className="mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 bg-clip-text text-6xl font-bold text-transparent">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
