import {
  CheckCircle2,
  Heart,
  TrendingUp,
  Clock,
  LucideIcon,
} from "lucide-react";
import { IconsStats } from "../types/lading";
import { statsData } from "@/data/landingData";

const iconMap: Record<IconsStats, LucideIcon> = {
  CheckCircle2,
  Heart,
  TrendingUp,
  Clock,
};

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statsData.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || CheckCircle2;

            return (
              <div key={idx} className="group text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
