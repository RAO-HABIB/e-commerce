"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterSidebar } from "@/components/ui/FilterSidebar";
import { PRODUCTS } from "@/lib/data";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc">("newest");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = ["PERFORMANCE", "LIFESTYLE", "LIMITED EDITION", "CONCEPT"];
  const allSizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];

  const handleReset = () => {
    setSelectedCategory("ALL");
    setSelectedSize(null);
    setPriceRange([0, 500]);
    setSortBy("newest");
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== "ALL" && p.category !== selectedCategory) {
        return false;
      }
      // Size filter
      if (selectedSize !== null && !p.sizes.includes(selectedSize)) {
        return false;
      }
      // Price range
      if (p.price < priceRange[0] || p.price > priceRange[1]) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0; // Default order
    });
  }, [selectedCategory, selectedSize, priceRange, sortBy]);

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] min-h-screen">
      <Container>
        {/* Page Header */}
        <div className="mb-10 pb-8 border-b border-[#2A2A2A]">
          <span className="font-numeric text-xs text-[#FF6600] uppercase tracking-widest block mb-2">
            COMPLETE HARDWARE INVENTORY
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-[#F5F5F5] tracking-tight">
            THE CATALOG
          </h1>
          <p className="font-body text-sm sm:text-base text-[#9E9E9E] mt-3 max-w-2xl">
            Engineered precision meets cinematic minimalism. Explore the latest advancements in high-performance footwear and experimental prototypes.
          </p>
        </div>

        {/* Toolbar Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#2A2A2A]">
          <div className="flex items-center gap-4">
            <span className="font-numeric text-xs text-[#9E9E9E] uppercase tracking-wider">
              SHOWING <strong className="text-[#F5F5F5]">{filteredProducts.length}</strong> PROTOTYPES
            </span>

            {/* Mobile Filter Trigger */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden px-3 py-1.5 bg-[#141414] border border-[#2A2A2A] text-xs font-display font-bold uppercase text-[#F5F5F5] rounded-[4px] flex items-center gap-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF6600]" />
              FILTERS
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-numeric text-[#9E9E9E] uppercase hidden sm:inline">
              SORT BY:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#141414] border border-[#2A2A2A] text-xs font-numeric text-[#F5F5F5] rounded-[4px] px-3 py-1.5 focus:outline-none focus:border-[#FF6600] cursor-pointer uppercase"
            >
              <option value="newest">NEWEST ARRIVALS</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>

        {/* Mobile Filter Accordion */}
        {mobileFilterOpen && (
          <div className="lg:hidden mb-8 p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px]">
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setMobileFilterOpen(false);
              }}
              sizes={allSizes}
              selectedSize={selectedSize}
              onSelectSize={(size) => {
                setSelectedSize(size);
                setMobileFilterOpen(false);
              }}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              onReset={handleReset}
              totalResults={filteredProducts.length}
            />
          </div>
        )}

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              sizes={allSizes}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              onReset={handleReset}
              totalResults={filteredProducts.length}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center bg-[#141414] border border-[#2A2A2A] rounded-[4px] p-8">
                <h3 className="font-display font-black text-xl uppercase text-[#F5F5F5]">
                  NO MATCHING PROTOTYPES
                </h3>
                <p className="font-body text-xs text-[#9E9E9E] mt-2 mb-6">
                  Try clearing your active filters or adjusting the price threshold.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#FF6600] text-[#0A0A0A] font-display font-extrabold text-xs uppercase rounded-[4px]"
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
