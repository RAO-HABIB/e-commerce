"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/sections/ProductGallery";
import { ProductSpecs } from "@/components/sections/ProductSpecs";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { PRODUCTS, Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Heart, ShoppingBag, ArrowLeft, ShieldCheck, Zap, Sparkles, Check } from "lucide-react";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0] || 9);
  const [selectedColorway, setSelectedColorway] = useState<string>(
    product.colorways[0]?.name || "Default"
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColorway, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] min-h-screen">
      <Container>
        {/* Breadcrumb Bar */}
        <div className="flex items-center gap-2 text-xs font-numeric text-[#9E9E9E] mb-8 pb-4 border-b border-[#2A2A2A]">
          <Link href="/shop" className="hover:text-[#FF6600] flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            CATALOG
          </Link>
          <span>/</span>
          <span className="text-[#FF6600]">{product.category}</span>
          <span>/</span>
          <span className="text-[#F5F5F5] font-bold">{product.name}</span>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Gallery (Left 7 Cols) */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.gallery} name={product.name} />
          </div>

          {/* Purchasing Controls & Telemetry (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Header / Badges */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-numeric text-xs text-[#FF6600] tracking-widest uppercase">
                  {product.code} // {product.category}
                </span>
                {product.isLimited && (
                  <span className="px-2 py-0.5 bg-[#1C1C1C] border border-[#FF6600]/40 text-[#FF6600] font-numeric text-[10px] uppercase rounded-[2px]">
                    LIMITED PRODUCTION
                  </span>
                )}
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl uppercase text-[#F5F5F5] tracking-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 mt-1">
                <span className="font-numeric text-3xl font-black text-[#F5F5F5]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="font-numeric text-sm text-[#9E9E9E] line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <p className="font-body text-sm text-[#9E9E9E] leading-relaxed">
              {product.description}
            </p>

            {/* Colorway Picker */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-[#2A2A2A]">
              <div className="flex items-center justify-between text-xs font-numeric">
                <span className="text-[#9E9E9E] uppercase">COLORWAY:</span>
                <span className="text-[#F5F5F5] font-bold">{selectedColorway}</span>
              </div>
              <div className="flex items-center gap-3">
                {product.colorways.map((cw) => (
                  <button
                    key={cw.name}
                    onClick={() => setSelectedColorway(cw.name)}
                    className={`h-9 px-3 rounded-[4px] border flex items-center gap-2 text-xs font-numeric transition-all ${
                      selectedColorway === cw.name
                        ? "bg-[#1C1C1C] border-[#FF6600] text-[#F5F5F5]"
                        : "bg-[#141414] border-[#2A2A2A] text-[#9E9E9E] hover:border-[#9E9E9E]"
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/40"
                      style={{ backgroundColor: cw.hex }}
                    />
                    <span>{cw.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-[#2A2A2A]">
              <div className="flex items-center justify-between text-xs font-numeric">
                <span className="text-[#9E9E9E] uppercase">SELECT SIZE (US MEN):</span>
                <span className="text-[#FF6600] font-bold">CALIBRATED FIT</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-11 rounded-[4px] border font-numeric text-xs transition-all flex items-center justify-center ${
                        isSelected
                          ? "bg-[#FF6600] border-[#FF6600] text-[#0A0A0A] font-black shadow-[0_0_15px_rgba(255,102,0,0.4)]"
                          : "bg-[#141414] border-[#2A2A2A] text-[#F5F5F5] hover:border-[#FF6600]"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-6 border-t border-[#2A2A2A]">
              <div className="flex gap-3">
                <Button onClick={handleAddToCart} size="lg" className="flex-1">
                  <ShoppingBag className="w-5 h-5" />
                  <span>ADD TO CART // ${product.price.toFixed(2)}</span>
                </Button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-4 rounded-[4px] border transition-all ${
                    isWishlisted
                      ? "bg-[#FF6600] border-[#FF6600] text-[#0A0A0A]"
                      : "bg-[#141414] border-[#2A2A2A] text-[#9E9E9E] hover:text-[#FF6600] hover:border-[#FF6600]"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              {addedNotice && (
                <div className="p-3 bg-[#1C1C1C] border border-[#FF6600] text-[#FF6600] font-numeric text-xs rounded-[4px] flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4" />
                  <span>PROTOTYPE STAGED TO CART SUCCESSFULLY</span>
                </div>
              )}
            </div>

            {/* Fast Stats Bullet Strip */}
            <div className="p-4 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-2 text-xs font-numeric">
              <div className="flex items-center gap-2 text-[#9E9E9E]">
                <Zap className="w-4 h-4 text-[#FF6600]" />
                <span>SUPERSONIC DISPATCH: Same-day laboratory packaging</span>
              </div>
              <div className="flex items-center gap-2 text-[#9E9E9E]">
                <ShieldCheck className="w-4 h-4 text-[#FF6600]" />
                <span>NFC CRYPTOGRAPHIC AUTHENTICITY CHIP EMBEDDED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Specs, Materials & Shipping Breakdown */}
        <ProductSpecs product={product} />

        {/* Related Gear Section */}
        <div className="mt-24 pt-16 border-t border-[#2A2A2A]">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-numeric text-xs text-[#FF6600] uppercase tracking-widest block mb-1">
                COMPATIBLE HARDWARE
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-[#F5F5F5]">
                RELATED PROTOTYPES
              </h2>
            </div>
            <Link href="/shop" className="text-xs font-numeric text-[#FF6600] hover:underline">
              VIEW ENTIRE LINEUP &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
