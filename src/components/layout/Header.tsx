"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { MobileNav } from "./MobileNav";
import { PRODUCTS } from "@/lib/data";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { totalItems, wishlist, isCartOpen, setIsCartOpen } = useCart();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { href: "/shop", label: "SHOP" },
    { href: "/collections", label: "COLLECTIONS" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 glass-nav transition-all duration-300">
        <div className="max-w-[1440px] mx-auto h-20 px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="font-display font-black text-xl sm:text-2xl uppercase tracking-tighter text-[#F5F5F5] hover:text-[#FF6600] transition-colors flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 bg-[#FF6600] inline-block rounded-[1px]"></span>
              NEXT LEVEL
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-display font-bold uppercase tracking-[0.12em] transition-all pb-1 ${
                    isActive
                      ? "text-[#FF6600] border-b-2 border-[#FF6600]"
                      : "text-[#9E9E9E] hover:text-[#F5F5F5]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Catalog"
              className="p-2 text-[#9E9E9E] hover:text-[#FF6600] transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Link */}
            <Link
              href="/shop"
              aria-label="Wishlist"
              className="relative p-2 text-[#9E9E9E] hover:text-[#FF6600] transition-colors hidden sm:block"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#FF6600]"></span>
              )}
            </Link>

            {/* Account Link */}
            <Link
              href="/account"
              aria-label="My Account"
              className="p-2 text-[#9E9E9E] hover:text-[#FF6600] transition-colors hidden sm:block"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Cart Button */}
            <Link
              href="/cart"
              aria-label="Shopping Cart"
              className="relative p-2.5 bg-[#141414] hover:bg-[#1C1C1C] border border-[#2A2A2A] hover:border-[#FF6600] rounded-[4px] text-[#F5F5F5] hover:text-[#FF6600] transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="font-numeric text-xs font-bold text-[#FF6600]">
                {totalItems}
              </span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="md:hidden p-2 text-[#9E9E9E] hover:text-[#F5F5F5] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      {/* Interactive Global Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl flex flex-col items-center pt-24 px-4 sm:px-6">
          <div className="w-full max-w-2xl bg-[#141414] border border-[#2A2A2A] rounded-[4px] p-6 shadow-2xl flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
              <span className="font-display font-bold text-xs uppercase text-[#FF6600] tracking-wider">
                SEARCH CATALOG
              </span>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="text-[#9E9E9E] hover:text-[#F5F5F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="w-5 h-5 text-[#9E9E9E] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, materials, categories (e.g. NX-01, Carbon, Limited)..."
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-sm text-[#F5F5F5] rounded-[4px] py-3.5 pl-11 pr-4 focus:outline-none font-sans"
              />
            </div>

            {/* Live Search Results */}
            <div className="max-h-80 overflow-y-auto flex flex-col gap-2">
              {searchQuery && searchResults.length === 0 && (
                <div className="py-8 text-center text-sm text-[#9E9E9E] font-numeric">
                  NO PROTOTYPES FOUND FOR &quot;{searchQuery}&quot;
                </div>
              )}

              {searchResults.map((item) => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-3 bg-[#1C1C1C] hover:bg-[#2B1C16] border border-[#2A2A2A] hover:border-[#FF6600] rounded-[4px] flex items-center justify-between transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm text-[#F5F5F5] uppercase">
                      {item.name}
                    </span>
                    <span className="text-xs text-[#9E9E9E] font-numeric">
                      {item.category} • {item.specs.weight}
                    </span>
                  </div>
                  <span className="font-numeric text-sm font-bold text-[#FF6600]">
                    ${item.price.toFixed(2)}
                  </span>
                </Link>
              ))}

              {!searchQuery && (
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs text-[#9E9E9E] font-numeric self-center mr-2">
                    SUGGESTED:
                  </span>
                  {["NX-PROTOTYPE 01", "AETHEOS", "STEALTH", "LIMITED"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-2.5 py-1 bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#FF6600] text-[11px] font-numeric text-[#9E9E9E] hover:text-[#F5F5F5] rounded-[2px]"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
