"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ShieldCheck, Cpu, Flame } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-[#2A2A2A] text-[#F5F5F5] pt-16 pb-12">
      <Container>
        {/* Newsletter & High Impact Marquee Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A2A2A]">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#FF6600] font-numeric text-xs uppercase tracking-widest">
              <Flame className="w-4 h-4" />
              <span>STAY INFORMED ON DROPS</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F5F5]">
              JOIN THE PROTOCOL
            </h3>
            <p className="font-body text-sm text-[#9E9E9E] max-w-md leading-relaxed">
              Gain exclusive early access to experimental footwear drops, aerodynamic laboratory reports, and private capsule allocations.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for joining the Next Level protocol.");
              }}
              className="flex flex-col sm:flex-row gap-2 mt-2 max-w-md"
            >
              <input
                type="email"
                required
                placeholder="ENTER ATHLETE EMAIL"
                className="flex-1 bg-[#141414] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] px-4 py-3.5 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#FF6600] hover:bg-[#FF8533] text-[#0A0A0A] font-display font-extrabold text-xs uppercase tracking-wider rounded-[4px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>SUBSCRIBE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-display font-bold text-xs uppercase text-[#9E9E9E] tracking-widest">
                CATALOG
              </h4>
              <ul className="flex flex-col gap-2 text-xs font-numeric text-[#9E9E9E]">
                <li>
                  <Link href="/shop" className="hover:text-[#FF6600] transition-colors">
                    ALL PROTOTYPES
                  </Link>
                </li>
                <li>
                  <Link href="/shop?cat=PERFORMANCE" className="hover:text-[#FF6600] transition-colors">
                    PERFORMANCE
                  </Link>
                </li>
                <li>
                  <Link href="/shop?cat=LIFESTYLE" className="hover:text-[#FF6600] transition-colors">
                    CYBER UTILITY
                  </Link>
                </li>
                <li>
                  <Link href="/shop?cat=LIMITED" className="hover:text-[#FF6600] transition-colors">
                    LIMITED EDITIONS
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="hover:text-[#FF6600] transition-colors">
                    CAPSULE ARCHIVE
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-display font-bold text-xs uppercase text-[#9E9E9E] tracking-widest">
                ENGINEERING
              </h4>
              <ul className="flex flex-col gap-2 text-xs font-numeric text-[#9E9E9E]">
                <li>
                  <Link href="/about" className="hover:text-[#FF6600] transition-colors">
                    AETHEOS LAB
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#FF6600] transition-colors">
                    CARBON TWILL 3K
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#FF6600] transition-colors">
                    VECTRAN MATRIX
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#FF6600] transition-colors">
                    NITRO-GEL DYNO
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-display font-bold text-xs uppercase text-[#9E9E9E] tracking-widest">
                CONCIERGE
              </h4>
              <ul className="flex flex-col gap-2 text-xs font-numeric text-[#9E9E9E]">
                <li>
                  <Link href="/contact" className="hover:text-[#FF6600] transition-colors">
                    SUPPORT DISPATCH
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="hover:text-[#FF6600] transition-colors">
                    TRACK ORDER
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FF6600] transition-colors">
                    SIZING TELEMETRY
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FF6600] transition-colors">
                    GLOBAL STORES
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Big Wordmark Section */}
        <div className="py-12 border-b border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-[#1C1C1C] select-none hover:text-[#2A2A2A] transition-colors">
            NEXT LEVEL
          </div>
          <div className="flex items-center gap-6 text-xs text-[#9E9E9E] font-numeric">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#FF6600]" />
              ENGINEERED IN SAN FRANCISCO
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FF6600]" />
              SECURE GLOBAL FULFILLMENT
            </span>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-numeric text-[#9E9E9E]">
          <p>© 2026 Created By <span><Link href="https://www.linkedin.com/in/rao-habib-54a755295" className="text-[#FF6600] hover:text-[#FF8533] transition-colors">Rao Habib.</Link></span></p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#F5F5F5] transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/about" className="hover:text-[#F5F5F5] transition-colors">
              TERMS OF SERVICE
            </Link>
            <Link href="/contact" className="hover:text-[#F5F5F5] transition-colors">
              COMPLIANCE
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
