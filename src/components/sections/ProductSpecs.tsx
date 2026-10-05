"use client";

import React, { useState } from "react";
import { Product } from "@/lib/data";
import { ShieldCheck, Truck, RotateCcw, Cpu, Check } from "lucide-react";

export interface ProductSpecsProps {
  product: Product;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<"specs" | "materials" | "shipping">("specs");

  return (
    <div className="w-full flex flex-col gap-6 mt-16 pt-12 border-t border-[#2A2A2A]">
      {/* Tabs Switcher */}
      <div className="flex items-center gap-2 border-b border-[#2A2A2A] pb-4 overflow-x-auto">
        <button
          onClick={() => setActiveTab("specs")}
          className={`px-5 py-2.5 rounded-[4px] font-display font-bold text-xs uppercase tracking-wider transition-all ${
            activeTab === "specs"
              ? "bg-[#FF6600] text-[#0A0A0A]"
              : "bg-[#141414] text-[#9E9E9E] hover:text-[#F5F5F5] border border-[#2A2A2A]"
          }`}
        >
          TECHNICAL SPECS
        </button>

        <button
          onClick={() => setActiveTab("materials")}
          className={`px-5 py-2.5 rounded-[4px] font-display font-bold text-xs uppercase tracking-wider transition-all ${
            activeTab === "materials"
              ? "bg-[#FF6600] text-[#0A0A0A]"
              : "bg-[#141414] text-[#9E9E9E] hover:text-[#F5F5F5] border border-[#2A2A2A]"
          }`}
        >
          MATERIALS BREAKDOWN
        </button>

        <button
          onClick={() => setActiveTab("shipping")}
          className={`px-5 py-2.5 rounded-[4px] font-display font-bold text-xs uppercase tracking-wider transition-all ${
            activeTab === "shipping"
              ? "bg-[#FF6600] text-[#0A0A0A]"
              : "bg-[#141414] text-[#9E9E9E] hover:text-[#F5F5F5] border border-[#2A2A2A]"
          }`}
        >
          DISPATCH & RETURNS
        </button>
      </div>

      {/* Tab 1: Specs Table */}
      {activeTab === "specs" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-[4px] p-6 flex flex-col gap-4">
            <h4 className="font-display font-bold text-sm uppercase text-[#FF6600] tracking-wider">
              DYNAMIC TELEMETRY
            </h4>
            <div className="flex flex-col divide-y divide-[#2A2A2A] text-xs font-numeric">
              <div className="py-2.5 flex justify-between">
                <span className="text-[#9E9E9E]">TOTAL DRY WEIGHT</span>
                <span className="text-[#F5F5F5] font-bold">{product.specs.weight}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-[#9E9E9E]">HEEL-TO-TOE DROP</span>
                <span className="text-[#F5F5F5] font-bold">{product.specs.drop}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-[#9E9E9E]">STACK HEIGHT</span>
                <span className="text-[#F5F5F5] font-bold">{product.specs.stackHeight}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-[#9E9E9E]">PROPULSION SHANK</span>
                <span className="text-[#F5F5F5] font-bold">{product.specs.propulsion}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-[#9E9E9E]">CUSHIONING MATRIX</span>
                <span className="text-[#F5F5F5] font-bold">{product.specs.cushioning}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-[#9E9E9E]">OPTIMAL SURFACE</span>
                <span className="text-[#F5F5F5] font-bold">{product.specs.surface}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#2A2A2A] rounded-[4px] p-6 flex flex-col gap-4">
            <h4 className="font-display font-bold text-sm uppercase text-[#FF6600] tracking-wider">
              KEY ARCHITECTURAL FEATURES
            </h4>
            <ul className="flex flex-col gap-3">
              {product.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-[#F5F5F5]">
                  <span className="p-1 bg-[#1C1C1C] border border-[#FF6600]/40 text-[#FF6600] rounded-[2px] mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Tab 2: Materials */}
      {activeTab === "materials" && (
        <div className="bg-[#141414] border border-[#2A2A2A] rounded-[4px] p-6 flex flex-col gap-6">
          <div>
            <h4 className="font-display font-bold text-sm uppercase text-[#FF6600] tracking-wider mb-2">
              COMPOSITE COMPOSITION
            </h4>
            <p className="text-xs text-[#9E9E9E] leading-relaxed max-w-xl">
              Each pair is constructed using sustainable aerospace-derived synthetic polymers and closed-loop bio-based foams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {product.materials.map((mat) => (
              <div
                key={mat.name}
                className="p-4 bg-[#1C1C1C] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-1"
              >
                <span className="font-numeric text-2xl font-black text-[#FF6600]">
                  {mat.percentage}
                </span>
                <span className="font-display font-bold text-xs uppercase text-[#F5F5F5]">
                  {mat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Shipping */}
      {activeTab === "shipping" && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-3">
            <Truck className="w-6 h-6 text-[#FF6600]" />
            <h5 className="font-display font-bold text-sm uppercase text-[#F5F5F5]">
              EXPEDITED GLOBAL AIR
            </h5>
            <p className="text-xs text-[#9E9E9E] leading-relaxed">
              Complimentary carbon-neutral DHL Express delivery on all orders over $200. Guaranteed 2-3 business day arrival.
            </p>
          </div>

          <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-3">
            <RotateCcw className="w-6 h-6 text-[#FF6600]" />
            <h5 className="font-display font-bold text-sm uppercase text-[#F5F5F5]">
              30-DAY TRIAL GUARANTEE
            </h5>
            <p className="text-xs text-[#9E9E9E] leading-relaxed">
              Put the shoes through their paces. If they don&apos;t shatter your performance records, return them for a 100% refund.
            </p>
          </div>

          <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-3">
            <ShieldCheck className="w-6 h-6 text-[#FF6600]" />
            <h5 className="font-display font-bold text-sm uppercase text-[#F5F5F5]">
              CERTIFIED AUTHENTICITY
            </h5>
            <p className="text-xs text-[#9E9E9E] leading-relaxed">
              Includes embedded cryptographic NFC authentication chip in the right tongue linking to your verified athlete passport.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
