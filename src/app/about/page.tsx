import React from "react";
import { Container } from "@/components/ui/Container";
import { AboutStory } from "@/components/sections/AboutStory";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] min-h-screen">
      <Container>
        <div className="mb-10 pb-6 border-b border-[#2A2A2A]">
          <span className="font-numeric text-xs text-[#FF6600] uppercase tracking-widest block mb-2">
            RESEARCH &amp; DEVELOPMENT
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-[#F5F5F5] tracking-tight">
            ABOUT NEXT LEVEL
          </h1>
          <p className="font-body text-sm sm:text-base text-[#9E9E9E] mt-3 max-w-2xl">
            Born inside a high-speed aerodynamic proving ground, NEXT LEVEL pushes the limits of human propulsion through computational design and composite materials.
          </p>
        </div>

        <AboutStory />
      </Container>
    </div>
  );
}
