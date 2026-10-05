"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowUpRight, Zap, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0A] border-b border-[#2A2A2A]">
      {/* Background Subtle Tech Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,102,0,0.12),transparent_70%)] pointer-events-none"></div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      ></div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Top Pre-title Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#FF6600]/40 rounded-[4px] mb-8 animate-fade-in shadow-[0_0_15px_rgba(255,102,0,0.15)]">
          <Zap className="w-3.5 h-3.5 text-[#FF6600]" />
          <span className="font-numeric text-xs font-bold uppercase tracking-[0.2em] text-[#FF6600]">
            AETHEOS PROPULSION ARCHITECTURE 2026
          </span>
        </div>

        {/* Hero Huge Display Headline */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[110px] uppercase text-[#F5F5F5] tracking-tighter leading-[0.9] max-w-6xl mb-6 select-none">
          FEEL THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] via-[#FF8533] to-[#FFB596]">FUTURE</span>
        </h1>

        <p className="font-body text-base sm:text-lg text-[#9E9E9E] max-w-2xl leading-relaxed mb-10">
          Engineered precision meets cinematic minimalism. Experience our next-generation carbon-shank runner tuned for explosive mechanical energy return.
        </p>

        {/* 3D Floating Hero Sneaker Showcase */}
        <div className="relative w-full max-w-4xl aspect-[16/10] sm:aspect-[21/10] my-4 flex items-center justify-center">
          {/* Radial Glow underneath */}
          <div className="absolute w-3/4 h-3/4 bg-[#FF6600]/15 blur-[90px] rounded-full pointer-events-none"></div>

          <div className="relative w-full h-full animate-float">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3z6ALY8lszDa0LRZhwB_AeHJ0G2V0o3nJn5mBetcgpTJsxu1030HDYAX6HRIcwHnNjQVDe9UE6ADRRsSRAAoY-HlOEgxRk2etvvW8Je-zxlE9NC_AzwxDwK3eGcrf5bXZg_gfpmttvNRUemTktG7G_oVo2gTY4PYslzCCkfQMBAWZtPVs8F9JetK2QGXqtR6yr3EFbs5fUJUn1ezx3HJbIW22Xmm-QnjjJjr3kGSiL16Eq7uXPyNp6Q"
              alt="Next Level Prototype 01 Sneaker 3D Showcase"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 896px, 1024px"
              priority
              className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
            />
          </div>

          {/* Interactive Floating Hotspots */}
          <div className="hidden md:flex absolute top-12 left-10 p-3 bg-[#141414]/90 backdrop-blur-md border border-[#2A2A2A] rounded-[4px] items-center gap-3 text-left">
            <div className="w-2 h-2 rounded-full bg-[#FF6600] animate-ping"></div>
            <div>
              <div className="text-[10px] font-numeric text-[#FF6600] uppercase tracking-wider">PROPULSION</div>
              <div className="text-xs font-display font-bold text-[#F5F5F5] uppercase">1.2mm Carbon Twill</div>
            </div>
          </div>

          <div className="hidden md:flex absolute bottom-8 right-10 p-3 bg-[#141414]/90 backdrop-blur-md border border-[#2A2A2A] rounded-[4px] items-center gap-3 text-left">
            <Sparkles className="w-4 h-4 text-[#FF6600]" />
            <div>
              <div className="text-[10px] font-numeric text-[#FF6600] uppercase tracking-wider">ULTRALIGHT</div>
              <div className="text-xs font-display font-bold text-[#F5F5F5] uppercase">214 Grams Total</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button href="/shop" size="lg" className="w-full sm:w-auto">
            <span>EXPLORE CATALOG</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button href="/collections" variant="secondary" size="lg" className="w-full sm:w-auto">
            <span>VIEW CAPSULES</span>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex items-center gap-2 text-xs font-numeric text-[#9E9E9E] uppercase tracking-widest opacity-75 animate-bounce">
          <ArrowDown className="w-4 h-4 text-[#FF6600]" />
          <span>SCROLL FOR LAB SPECIFICATIONS</span>
        </div>
      </Container>
    </section>
  );
};
