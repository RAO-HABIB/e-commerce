import React from "react";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ExplodedViewSection } from "@/components/sections/ExplodedViewSection";
import { CollectionsGrid } from "@/components/sections/CollectionsGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/data";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Showcase */}
      <HeroSection />

      {/* Featured Drops Grid */}
      <section className="py-24 bg-[#0A0A0A] border-b border-[#2A2A2A]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              badge="LATEST LAB DISPATCH"
              title="ACTIVE PROTOTYPES"
              subtitle="Calibrated for elite ground reaction forces. Limited worldwide drops."
              className="mb-0"
            />
            <Button href="/shop" variant="secondary" className="self-start md:self-auto">
              <span>VIEW FULL CATALOG (06)</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* Exploded View Anatomy Section */}
      <ExplodedViewSection />

      {/* Features Showcase Section */}
      <FeaturesSection />

      {/* Capsule Archive Collections */}
      <CollectionsGrid />

      {/* High-Velocity Call To Action Strip */}
      <section className="py-20 bg-[#141414] border-b border-[#2A2A2A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,102,0,0.1),transparent_70%)] pointer-events-none"></div>
        <Container className="relative z-10 text-center flex flex-col items-center">
          <span className="font-numeric text-xs text-[#FF6600] uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            LIMITED PROTOCOL ALLOCATION
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase text-[#F5F5F5] tracking-tight leading-tight max-w-4xl mb-6">
            SECURE YOUR PAIR FROM THE 2026 SPEED LAB
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9E9E9E] max-w-xl mb-8">
            Every pair is individually numbered and accompanied by laboratory calibration telemetry reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/shop" size="lg">
              <span>ORDER NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              <span>LEARN MORE</span>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
