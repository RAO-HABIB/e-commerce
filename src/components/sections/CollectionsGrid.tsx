import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COLLECTIONS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export const CollectionsGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <Container>
        <SectionHeading
          badge="CAPSULE ARCHIVE"
          title="CURATED COLLECTIONS"
          subtitle="Explore our specialized architectural capsules engineered for distinct terrain profiles, race environments, and aesthetic codes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {COLLECTIONS.map((col, idx) => {
            return (
              <Link
                key={col.id}
                href={`/collections#${col.slug}`}
                className="group relative flex flex-col justify-end min-h-[380px] sm:min-h-[460px] bg-[#141414] border border-[#2A2A2A] hover:border-[#FF6600] rounded-[4px] p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_16px_40px_rgba(255,102,0,0.2)]"
              >
                {/* Background Image Stage */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]">
                  <Image
                    src={col.heroImage}
                    alt={col.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#141414]/90 backdrop-blur-md border border-[#2A2A2A] text-[#FF6600] font-numeric text-xs uppercase tracking-wider rounded-[2px]">
                    {col.badge}
                  </span>
                  <span className="px-2.5 py-1 bg-[#0A0A0A]/80 border border-[#2A2A2A] text-[#9E9E9E] font-numeric text-xs rounded-[2px]">
                    SERIES {col.releaseYear}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 flex flex-col gap-2">
                  <div className="text-xs font-numeric text-[#FF6600] uppercase tracking-widest">
                    {col.subtitle}
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-[#F5F5F5] tracking-tight group-hover:text-[#FF6600] transition-colors">
                      {col.title}
                    </h3>
                    <div className="w-10 h-10 rounded-[4px] bg-[#141414] border border-[#2A2A2A] group-hover:border-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-[#0A0A0A] text-[#F5F5F5] flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#9E9E9E] max-w-lg line-clamp-2 mt-1">
                    {col.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
