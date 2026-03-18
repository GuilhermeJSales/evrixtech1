import {
  Code,
  RefreshCw,
  TrendingUp,
  Target,
  Palette,
  Rocket,
  BarChart3,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { servicesHighlights } from "@/data/landingData";

const iconMap = {
  Code,
  RefreshCw,
  TrendingUp,
  Target,
  Palette,
  Rocket,
  BarChart3,
};

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-center text-4xl font-bold text-transparent sm:mb-12 md:text-5xl">
          Transformamos Ideias em Resultados
        </h2>
        <div className="mt-3 grid gap-8 md:grid-cols-3">
          {servicesHighlights.map((service) => {
            const Icon = iconMap[service.icon] || Code;

            return (
              <Card
                key={service.id}
                className={`group bg-gradient-to-br p-8 ${service.color} border border-white/10 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-7 w-7 text-cyan-400" />
                </div>

                <h3 className="transitions-colors mb-4 text-2xl font-bold text-white group-hover:text-cyan-400">
                  {service.title}
                </h3>

                <p className="text-[16px] leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
