import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cpu, Wind, Compass, Sparkles, ShieldAlert, Award } from "lucide-react";

export const AboutStory: React.FC = () => {
  const milestones = [
    {
      year: "2023",
      title: "KINETIC LABORATORY FOUNDED",
      desc: "Originated as a confidential materials science research outpost in San Francisco, modeling sub-surface propulsion vectors.",
    },
    {
      year: "2024",
      title: "FIRST AEROSHANK PROTOTYPE",
      desc: "Developed a proprietary 1.2mm multi-directional carbon fiber matrix with 89.4% recorded kinetic energy recovery.",
    },
    {
      year: "2025",
      title: "WORLD ATHLETICS CALIBRATION",
      desc: "Fine-tuned sole stack heights and stiffness thresholds to produce race-legal supersonic speed running footwear.",
    },
    {
      year: "2026",
      title: "GLOBAL CAPSULE RELEASE",
      desc: "Public deployment of the Aetheos system, bringing aerospace-grade precision to competitive athletes worldwide.",
    },
  ];

  return (
    <div className="flex flex-col gap-24 py-12">
      {/* Editorial Intro Banner */}
      <section className="relative w-full min-h-[500px] bg-[#141414] border border-[#2A2A2A] rounded-[4px] overflow-hidden p-8 sm:p-16 flex flex-col justify-end">
        <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3z6ALY8lszDa0LRZhwB_AeHJ0G2V0o3nJn5mBetcgpTJsxu1030HDYAX6HRIcwHnNjQVDe9UE6ADRRsSRAAoY-HlOEgxRk2etvvW8Je-zxlE9NC_AzwxDwK3eGcrf5bXZg_gfpmttvNRUemTktG7G_oVo2gTY4PYslzCCkfQMBAWZtPVs8F9JetK2QGXqtR6yr3EFbs5fUJUn1ezx3HJbIW22Xmm-QnjjJjr3kGSiL16Eq7uXPyNp6Q"
            alt="Next Level R&D Laboratory"
            fill
            sizes="100vw"
            className="object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-3xl flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] border border-[#FF6600]/40 text-[#FF6600] font-numeric text-xs uppercase tracking-widest rounded-[2px] w-fit">
            <Cpu className="w-3.5 h-3.5" />
            MISSION DISPATCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase text-[#F5F5F5] tracking-tight leading-[1.05]">
            ENGINEERED PRECISION. <br />
            ZERO COMPROMISE.
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9E9E9E] leading-relaxed max-w-2xl">
            We operate at the convergence of aerospace engineering, computational fluid dynamics, and athletic biomechanics. Every curve, tension wire, and carbon weave is mathematically derived to eliminate deceleration.
          </p>
        </div>
      </section>

      {/* 3 Pillars Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-4 hover:border-[#FF6600] transition-colors">
          <div className="w-12 h-12 rounded-[4px] bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#FF6600]">
            <Wind className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl uppercase text-[#F5F5F5]">
            AERODYNAMIC INTEGRITY
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
            Wind-tunnel calibrated silhouettes minimizing surface boundary layer drag by up to 14.8% during forward sprint phases.
          </p>
        </div>

        <div className="p-8 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-4 hover:border-[#FF6600] transition-colors">
          <div className="w-12 h-12 rounded-[4px] bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#FF6600]">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl uppercase text-[#F5F5F5]">
            KINETIC RECOIL
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
            Proprietary carbon shank matrix engineered to store torsional compression energy and discharge it instantly during toe-off.
          </p>
        </div>

        <div className="p-8 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-4 hover:border-[#FF6600] transition-colors">
          <div className="w-12 h-12 rounded-[4px] bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#FF6600]">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl uppercase text-[#F5F5F5]">
            CIRCULAR COMPOSITES
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
            Over 50% bio-synthesized light-cured resins and closed-loop reclaimed aerospace composites in every production prototype.
          </p>
        </div>
      </section>

      {/* Laboratory Innovation Timeline */}
      <section className="bg-[#141414] border border-[#2A2A2A] rounded-[4px] p-8 sm:p-12">
        <SectionHeading
          badge="R&D MILESTONES"
          title="CHRONOLOGY OF SPEED"
          subtitle="From early CAD wireframes to gold-standard podium placements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {milestones.map((m, idx) => (
            <div
              key={m.year}
              className="p-6 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-3 relative group hover:border-[#FF6600] transition-colors"
            >
              <div className="font-numeric text-3xl font-black text-[#FF6600]">
                {m.year}
              </div>
              <h4 className="font-display font-extrabold text-sm uppercase text-[#F5F5F5]">
                {m.title}
              </h4>
              <p className="font-body text-xs text-[#9E9E9E] leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
