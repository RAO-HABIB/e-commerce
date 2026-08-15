import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { COLLECTIONS, PRODUCTS } from "@/lib/data";
import { ArrowRight, Sparkles, Layers } from "lucide-react";

export default function CollectionsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] min-h-screen">
      <Container>
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#2A2A2A]">
          <span className="font-numeric text-xs text-[#FF6600] uppercase tracking-widest block mb-2">
            ARCHITECTURAL CAPSULE ARCHIVE
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-[#F5F5F5] tracking-tight">
            COLLECTIONS
          </h1>
          <p className="font-body text-sm sm:text-base text-[#9E9E9E] mt-3 max-w-2xl">
            Each collection represents a dedicated material research focus, engineered specifically for unique athletic applications and distinct visual identities.
          </p>
        </div>

        {/* Collection Blocks */}
        <div className="flex flex-col gap-24">
          {COLLECTIONS.map((collection, idx) => {
            const collectionProducts = PRODUCTS.filter((p) =>
              collection.productIds.includes(p.id)
            );

            return (
              <section
                key={collection.id}
                id={collection.slug}
                className="flex flex-col gap-10 scroll-mt-28"
              >
                {/* Hero Editorial Card */}
                <div className="relative w-full min-h-[380px] sm:min-h-[440px] bg-[#141414] border border-[#2A2A2A] rounded-[4px] p-8 sm:p-12 flex flex-col justify-end overflow-hidden">
                  <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
                    <Image
                      src={collection.heroImage}
                      alt={collection.title}
                      fill
                      sizes="100vw"
                      className="object-cover opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
                  </div>

                  <div className="relative z-10 max-w-2xl flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-[#0A0A0A] border border-[#2A2A2A] text-[#FF6600] font-numeric text-xs uppercase tracking-wider rounded-[2px]">
                        {collection.badge}
                      </span>
                      <span className="text-xs font-numeric text-[#9E9E9E]">
                        SERIES // {collection.releaseYear}
                      </span>
                    </div>

                    <h2 className="font-display font-black text-3xl sm:text-5xl uppercase text-[#F5F5F5] tracking-tight">
                      {collection.title}
                    </h2>

                    <p className="font-body text-sm text-[#9E9E9E] leading-relaxed">
                      {collection.description}
                    </p>
                  </div>
                </div>

                {/* Capsule Products Grid */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#2A2A2A]">
                    <span className="font-display font-bold text-xs uppercase text-[#9E9E9E] tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#FF6600]" />
                      CAPSULE HARDWARE ({collectionProducts.length})
                    </span>
                    <Link
                      href="/shop"
                      className="text-xs font-numeric text-[#FF6600] hover:underline"
                    >
                      VIEW IN FULL CATALOG &rarr;
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collectionProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
