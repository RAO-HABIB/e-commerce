"use client";

import React from "react";
import { RotateCcw } from "lucide-react";

export interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  sizes: number[];
  selectedSize: number | null;
  onSelectSize: (size: number | null) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  onReset: () => void;
  totalResults: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  sizes,
  selectedSize,
  onSelectSize,
  priceRange,
  onPriceChange,
  onReset,
  totalResults,
}) => {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-8">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
        <div>
          <span className="font-display font-black text-sm uppercase text-[#F5F5F5] tracking-wider">
            FILTERS
          </span>
          <span className="font-numeric text-xs text-[#9E9E9E] ml-2">
            ({totalResults})
          </span>
        </div>
        <button
          onClick={onReset}
          className="text-xs font-numeric text-[#9E9E9E] hover:text-[#FF6600] flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          RESET
        </button>
      </div>

      {/* Category Section */}
      <div className="flex flex-col gap-3">
        <h4 className="font-display font-bold text-xs uppercase text-[#9E9E9E] tracking-widest">
          CATEGORY
        </h4>
        <div className="flex flex-col gap-1.5">
          {["ALL", ...categories].map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`text-left px-3 py-2 rounded-[4px] text-xs font-display font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-[#1C1C1C] text-[#FF6600] border-l-2 border-[#FF6600]"
                    : "text-[#9E9E9E] hover:text-[#F5F5F5] hover:bg-[#141414]"
                }`}
              >
                <span>{cat}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Size Grid */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h4 className="font-display font-bold text-xs uppercase text-[#9E9E9E] tracking-widest">
            SIZE (US)
          </h4>
          {selectedSize && (
            <button
              onClick={() => onSelectSize(null)}
              className="text-[10px] text-[#FF6600] hover:underline"
            >
              Clear
            </button>
          )}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map((s) => {
            const isSelected = selectedSize === s;
            return (
              <button
                key={s}
                onClick={() => onSelectSize(isSelected ? null : s)}
                className={`h-9 flex items-center justify-center font-numeric text-xs rounded-[4px] border transition-all ${
                  isSelected
                    ? "bg-[#FF6600] border-[#FF6600] text-[#0A0A0A] font-bold shadow-[0_0_12px_rgba(255,102,0,0.3)]"
                    : "bg-[#141414] border-[#2A2A2A] text-[#F5F5F5] hover:border-[#FF6600]"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="flex flex-col gap-3">
        <h4 className="font-display font-bold text-xs uppercase text-[#9E9E9E] tracking-widest">
          PRICE RANGE ($)
        </h4>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-numeric text-[#9E9E9E]">$</span>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => onPriceChange([Number(e.target.value) || 0, priceRange[1]])}
              className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] py-2 pl-6 pr-2 focus:outline-none"
              placeholder="Min"
            />
          </div>
          <span className="text-[#2A2A2A] font-numeric">-</span>
          <div className="relative flex-1">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-numeric text-[#9E9E9E]">$</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value) || 500])}
              className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] py-2 pl-6 pr-2 focus:outline-none"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {/* Lab Guarantee Pill */}
      <div className="p-4 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-2">
        <span className="font-display font-bold text-xs text-[#FF6600] uppercase tracking-wider">
          NEXT LABS DISPATCH
        </span>
        <p className="text-[11px] text-[#9E9E9E] leading-relaxed">
          All performance footwear is pre-calibrated in our micro-dynamics test bed and ships with a certificate of compliance.
        </p>
      </div>
    </aside>
  );
};
