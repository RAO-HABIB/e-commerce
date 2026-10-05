import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldAlert, Layers, Wind, Activity } from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: "feat-1",
      title: "CARBON FIBER SHANK",
      badge: "MATERIAL LAB",
      desc: "Aerospace-grade 3K twill composite plate engineered to propel you forward with zero torsional flex sacrifice.",
      icon: Activity,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuADAH1uzA4DF_33ZiQKay_vOB4oKU0PnMuEb6yBOFolhBZj8Rw9Sv_KT5KRaqGzZRyza-4aHU8YB7-GzlcAdfzIBpa3oea88WvYZTGjvo5QdAISGfOhwTE22Wu5M9iyIlRQWVX9KmHrurQYCNPlant7aph-jjRsoUBnNjGV0vs9fAWozNsofAB7KwMkV5R5muds0SZUKxr-YAfv_6L6KAuwTzdXdRhw7GYNPhPoHnf6ZdSzyEf-K3E-hw",
    },
    {
      id: "feat-2",
      title: "FLYWIRE LOCKDOWN",
      badge: "TENSION SYSTEM",
      desc: "Dynamic Vectran tension cords adapting instantly to midfoot micro-rotations during high-velocity lateral shifts.",
      icon: Layers,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkzLE8PUF1_TC0WytS0WYr-LbL4KaCvxh4ccFehj-ON211MAfDPiRymgCKWLX6X-DYMG9m-QIlXIlvPXC6gfoAFWK5jPiSEO0tRIB5OjumYP_wIY3qGv4j88uASwOkV7p7tKxM0Cwx04Uqyh0O_00q-Uy6rP7JVImjNIEQ1j3gMaegsTxCvWWGO6H1yZihVzJFctM-0cZR2kHPayeFXl9aeCboZbNAEBjiNYZb-UagqxtTndqlmEn1zQ",
    },
    {
      id: "feat-3",
      title: "THERMO-REGULATED MESH",
      badge: "AERODYNAMICS",
      desc: "Multi-layered micro-perforated monofilament mapping foot heat zones to maintain ideal core temperature.",
      icon: Wind,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBUznV-IC8XfAPQ9AkGjyqekiOIlsRmkXCTTHGwtZDr9JJ6-AVKY7o0td_SwDQPNE6YDwSUmF_xsl4V-j8Qnw3FH6nRUfhcj6hpc94sROJMKgA8axGBhsRmcWPSCKKN9XfuZ7SEYl78PvR4TmxoyWRq6aJy_m3xrdhhH48Sl12YZj6Ta5aMA844F8rmGlhG45Nls1eCbsGzOyOMqY1uaHwzmSAWq4_47Vvo8fpzNyObaeXCVeEv25rn-Q",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <Container>
        <SectionHeading
          badge="STRUCTURAL TELEMETRY"
          title="ENGINEERED MATRIX"
          subtitle="Every component is optimized in our computational aerodynamics simulator to eliminate drag, redistribute shock vectors, and channel velocity."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative flex flex-col bg-[#141414] border border-[#2A2A2A] hover:border-[#FF6600] rounded-[4px] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,102,0,0.15)]"
              >
                {/* Feature Image Window */}
                <div className="relative w-full h-64 bg-[#0A0A0A] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-[#0A0A0A]/90 border border-[#2A2A2A] text-[#FF6600] font-numeric text-[11px] uppercase tracking-wider rounded-[2px]">
                      0{idx + 1} // {feature.badge}
                    </span>
                  </div>
                </div>

                {/* Feature Details Content */}
                <div className="p-6 flex flex-col gap-3 flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#FF6600]">
                      <Icon className="w-4 h-4" />
                      <span className="font-numeric text-xs uppercase tracking-wider font-bold">
                        FEATURE SPEC
                      </span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl uppercase text-[#F5F5F5] tracking-tight group-hover:text-[#FF6600] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-[#9E9E9E] leading-relaxed mt-2">
                      {feature.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between text-xs font-numeric text-[#9E9E9E]">
                    <span>STATUS: CALIBRATED</span>
                    <span className="text-[#FF6600] font-bold">100% OPERATIONAL</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
