"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";

export interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colorways[0]?.name || "");
  const isWishlisted = wishlist.includes(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[Math.floor(product.sizes.length / 2)] || 9;
    addToCart(product, defaultSize, selectedColor);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      className="group relative flex flex-col bg-[#141414] border border-[#2A2A2A] hover:border-[#3A3A3A] rounded-[4px] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.isNew && (
          <span className="px-2.5 py-0.5 bg-[#FF6600] text-[#0A0A0A] font-display font-extrabold text-[10px] tracking-wider uppercase rounded-[2px]">
            NEW
          </span>
        )}
        {product.isLimited && (
          <span className="px-2.5 py-0.5 bg-[#1C1C1C] text-[#FF6600] border border-[#FF6600]/40 font-numeric text-[10px] tracking-wider uppercase rounded-[2px]">
            LIMITED
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className={`absolute top-3 right-3 z-10 p-2 rounded-[4px] border transition-all duration-200 ${
          isWishlisted
            ? "bg-[#FF6600] border-[#FF6600] text-[#0A0A0A]"
            : "bg-[#0A0A0A]/80 backdrop-blur-md border-[#2A2A2A] text-[#9E9E9E] hover:text-[#FF6600] hover:border-[#FF6600]"
        }`}
      >
        <Heart className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} />
      </button>

      {/* Product Image Stage */}
      <Link href={`/product/${product.id}`} className="relative w-full aspect-square bg-[#0A0A0A] overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-radial from-white/[0.03] to-transparent pointer-events-none"></div>
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
        />

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent">
          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 bg-[#FF6600] hover:bg-[#FF8533] text-[#0A0A0A] font-display font-extrabold text-xs uppercase tracking-wider rounded-[4px] flex items-center justify-center gap-2 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add (US 9)
          </button>
        </div>
      </Link>

      {/* Details Box */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4 border-t border-[#2A2A2A]">
        <div>
          <div className="flex items-center justify-between text-xs text-[#9E9E9E] mb-1 font-numeric">
            <span>{product.code}</span>
            <span className="text-[#FF6600] font-medium">{product.category}</span>
          </div>

          <Link href={`/product/${product.id}`} className="block group-hover:text-[#FF6600] transition-colors">
            <h3 className="font-display font-extrabold text-lg uppercase text-[#F5F5F5] tracking-tight line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="font-body text-xs text-[#9E9E9E] line-clamp-2 mt-1">
            {product.tagline}
          </p>
        </div>

        {/* Footer: Price & Color Swatches */}
        <div className="flex items-center justify-between pt-3 border-t border-[#2A2A2A]/50">
          <div className="flex items-baseline gap-2">
            <span className="font-numeric text-lg font-bold text-[#F5F5F5]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-numeric text-xs text-[#9E9E9E] line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {product.colorways.map((cw) => (
              <button
                key={cw.name}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedColor(cw.name);
                }}
                title={cw.name}
                className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  selectedColor === cw.name
                    ? "border-[#FF6600] scale-125 shadow-[0_0_8px_rgba(255,102,0,0.6)]"
                    : "border-[#2A2A2A] hover:border-[#9E9E9E]"
                }`}
                style={{ backgroundColor: cw.hex }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
