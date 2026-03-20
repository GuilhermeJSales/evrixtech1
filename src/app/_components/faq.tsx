import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { faqData } from "@/data/landingData";

export default function Faq() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)]"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <Badge className="mb-4 border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
            Perguntas Frequentes
          </Badge>
          <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Dúvidas
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Comuns
            </span>
          </h2>
          <p className="text-xl text-slate-300">
            Tudo o que você precisa saber antes de começar
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, id) => (
            <AccordionItem
              key={id}
              value={`item-${id}`}
              className="rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/0 px-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30"
            >
              <AccordionTrigger className="cursor-pointer py-6 text-left text-lg font-semibold text-white hover:text-cyan-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 leading-relaxed text-slate-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 text-center">
          <p className="mb-2 text-lg text-white">Ainda tem dúvidas?</p>
          <p className="mb-4 text-slate-300">
            Fale com nosso time no WhatsApp e receba atendimento personalizado
          </p>
          <a
            href="https://wa.me/5511961683295?text=Olá! Tenho algumas dúvidas sobre os serviços da EvrixTech."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-blue-400"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
