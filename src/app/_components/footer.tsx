"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import { companyInfo } from "@/data/landingData";
import { useToast } from "../_hooks/use_toats";

// =====================
// TYPES
// =====================

type FormData = {
  name: string;
  email: string;
  message: string;
};

// =====================

export default function Footer() {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // =====================
  // HANDLERS
  // =====================

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    const message = `Olá! Meu nome é ${formData.name}.\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`;

    window.open(
      `https://wa.me/5511961683295?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    setFormData({ name: "", email: "", message: "" });

    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp.",
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as {
      name: keyof FormData;
      value: string;
    };

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-gradient-to-b from-slate-950 to-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* ===================== */}
          {/* BRAND */}
          {/* ===================== */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                <span className="text-xl font-bold text-white">E</span>
              </div>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent">
                {companyInfo.name}
              </span>
            </div>

            <p className="mb-6 leading-relaxed text-slate-400">
              {companyInfo.tagline}
            </p>

            <div className="flex gap-4">
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500"
              >
                <Instagram className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>

              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500"
              >
                <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>

              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500"
              >
                <Facebook className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* ===================== */}
          {/* CONTACT */}
          {/* ===================== */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Contato</h3>

            <div className="space-y-4">
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-cyan-400"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-cyan-500/20">
                  <Phone className="h-5 w-5" />
                </div>
                <span>{companyInfo.phoneFormatted}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                  <Mail className="h-5 w-5" />
                </div>
                <span>{companyInfo.email}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>
                  {companyInfo.address.city}, {companyInfo.address.state}
                </span>
              </div>
            </div>
          </div>

          {/* ===================== */}
          {/* FORM */}
          {/* ===================== */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-500/50"
              />

              <Input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-500/50"
              />

              <Textarea
                name="message"
                placeholder="Sua mensagem"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="resize-none border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-500/50"
              />

              <Button
                type="submit"
                className="w-full border-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* BOTTOM */}
      {/* ===================== */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © {currentYear} {companyInfo.name}. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-500 transition-colors hover:text-cyan-400"
            >
              Política de Privacidade
            </a>

            <a
              href="#"
              className="text-slate-500 transition-colors hover:text-cyan-400"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
