"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight, User, ShoppingBag, Heart, Shield } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { totalItems, wishlist } = useCart();

  const links = [
    { href: "/", label: "HOME" },
    { href: "/shop", label: "SHOP CATALOG" },
    { href: "/collections", label: "COLLECTIONS" },
    { href: "/about", label: "ABOUT LABS" },
    { href: "/contact", label: "CONTACT & CONCIERGE" },
    { href: "/account", label: "ACCOUNT & ORDERS" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0A0A0A] bg-opacity-95 backdrop-blur-2xl animate-in fade-in duration-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 h-20 border-b border-[#2A2A2A]">
        <span className="font-display font-black text-xl tracking-tighter text-[#F5F5F5]">
          NEXT LEVEL
        </span>
        <button
          onClick={onClose}
          className="p-2 text-[#9E9E9E] hover:text-[#F5F5F5] transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`py-4 text-2xl font-display font-black uppercase tracking-tight flex items-center justify-between border-b border-[#2A2A2A]/40 transition-colors ${
                  isActive ? "text-[#FF6600]" : "text-[#F5F5F5] hover:text-[#FF6600]"
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className={`w-5 h-5 ${isActive ? "text-[#FF6600]" : "text-[#9E9E9E]"}`} />
              </Link>
            );
          })}
        </div>

        {/* Bottom Quick Stats */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/cart"
              onClick={onClose}
              className="p-3 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex items-center justify-between text-xs font-display font-bold text-[#F5F5F5]"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#FF6600]" />
                <span>CART</span>
              </div>
              <span className="font-numeric bg-[#FF6600] text-[#0A0A0A] px-1.5 py-0.5 rounded text-[10px]">
                {totalItems}
              </span>
            </Link>

            <Link
              href="/account"
              onClick={onClose}
              className="p-3 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex items-center justify-between text-xs font-display font-bold text-[#F5F5F5]"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#FF6600]" />
                <span>ACCOUNT</span>
              </div>
              <Shield className="w-3.5 h-3.5 text-[#9E9E9E]" />
            </Link>
          </div>

          <p className="text-[11px] text-[#9E9E9E] font-numeric text-center">
            NEXT LEVEL R&D CORP © 2026. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};
