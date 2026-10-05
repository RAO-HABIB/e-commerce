"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EXPLODED_VIEW_DATA, PRODUCTS } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Cpu, CheckCircle2, ArrowRight, Gauge } from "lucide-react";

export const ExplodedViewSection: React.FC = () => {
  const { addToCart } = useCart();
  const [activeLayer, setActiveLayer] = useState(0);
  const featuredProduct = PRODUCTS[0]; // NX-PROTOTYPE 01

  return (
    <section className="py-24 bg-[#141414] border-b border-[#2A2A2A] relative overflow-hidden">
      {/* Background Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #141414 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Exploded Technical Schematic */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-lg bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] p-6 flex items-center justify-center overflow-hidden group shadow-2xl">
              <div className="absolute top-3 left-3 flex items-center gap-2 font-numeric text-[10px] text-[#FF6600] tracking-widest uppercase">
                <Cpu className="w-3.5 h-3.5" />
                <span>EXPLODED BLUEPRINT // CAD-V4</span>
              </div>

              <div className="relative w-full h-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsqz2Y_O-HFBNxTG2q2rPqAE2CV9NoRQcSnRvMcPZfalMgpsMMNvecYVA9OTaTv3kaGFHYk2MRWO27UPAdjUsRiPh9pkKUZDDRyVV5x81DQgUmXKIw4BUBBnXp22QfRaxgJPMob03whKDj4b4_-OVImAYp6R4UkTWYuKItewPqPeaZepwlo4Cmzhk1C0A9mT0OW6qBpopOVDEShqmU7tPciBcGv_Xdlk8x_c02uo0ZuH6JKeu2WDGY6g"
                  alt="Anatomy of Speed Sneaker Exploded View"
                  fill
                  sizes="(max-width: 1024px) 100vw, 512px"
                  className="object-contain mix-blend-screen opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Hologram Corner Target Markers */}
              <div className="absolute bottom-3 right-3 text-right font-numeric text-[10px] text-[#9E9E9E]">
                AXIS: X:42 Y:88 Z:12
              </div>
            </div>

            {/* Interactive Layer Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg mt-4">
              {EXPLODED_VIEW_DATA.layers.map((layer, idx) => (
                <button
                  key={layer.name}
                  onClick={() => setActiveLayer(idx)}
                  className={`p-2 rounded-[4px] border text-[11px] font-numeric text-left transition-all ${
                    activeLayer === idx
                      ? "bg-[#FF6600] border-[#FF6600] text-[#0A0A0A] font-bold"
                      : "bg-[#0A0A0A] border-[#2A2A2A] text-[#9E9E9E] hover:border-[#FF6600] hover:text-[#F5F5F5]"
                  }`}
                >
                  <div className="text-[9px] opacity-75">LAYER 0{idx + 1}</div>
                  <div className="truncate">{layer.name.split(" ")[0]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Technical Telemetry & Story */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1C1C] border border-[#FF6600]/40 text-[#FF6600] font-numeric text-xs uppercase tracking-[0.15em] rounded-[4px] mb-3">
                <Gauge className="w-3.5 h-3.5 text-[#FF6600]" />
                {EXPLODED_VIEW_DATA.badge}
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl uppercase text-[#F5F5F5] tracking-tight leading-[1.05]">
                {EXPLODED_VIEW_DATA.title}
              </h2>
              <p className="font-body text-sm sm:text-base text-[#9E9E9E] leading-relaxed mt-4">
                {EXPLODED_VIEW_DATA.description}
              </p>
            </div>

            {/* Dynamic Active Layer Inspector Box */}
            <div className="p-4 bg-[#1C1C1C] border-l-2 border-[#FF6600] border-y border-r border-[#2A2A2A] rounded-[4px] flex flex-col gap-1">
              <span className="font-display font-bold text-xs text-[#FF6600] uppercase tracking-wider">
                ACTIVE COMPONENT ANALYSIS // 0{activeLayer + 1}
              </span>
              <h4 className="font-display font-black text-base text-[#F5F5F5] uppercase">
                {EXPLODED_VIEW_DATA.layers[activeLayer].name}
              </h4>
              <p className="font-body text-xs text-[#9E9E9E]">
                {EXPLODED_VIEW_DATA.layers[activeLayer].desc}
              </p>
            </div>

            {/* Telemetry Metrics 4-Box Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {EXPLODED_VIEW_DATA.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] flex flex-col"
                >
                  <span className="font-numeric text-[10px] text-[#9E9E9E] uppercase tracking-wider">
                    {spec.label}
                  </span>
                  <span className="font-numeric text-xl font-bold text-[#FF6600] mt-1">
                    {spec.value}
                  </span>
                  <span className="font-numeric text-[10px] text-[#9E9E9E] mt-0.5">
                    {spec.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Pricing & Direct Add */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-[#2A2A2A]">
              <div>
                <span className="text-[11px] font-numeric text-[#9E9E9E] block uppercase">
                  CALIBRATED RETAIL PRICE
                </span>
                <span className="font-numeric text-3xl font-black text-[#F5F5F5]">
                  ${featuredProduct.price.toFixed(2)}
                </span>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => addToCart(featuredProduct, 9, featuredProduct.colorways[0].name)}
                  size="lg"
                  className="flex-1 sm:flex-none"
                >
                  <span>ORDER PROTOTYPE</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
