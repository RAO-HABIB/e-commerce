"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const CartView: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "NEXTLEVEL10" || promoCode.trim().toUpperCase() === "PROTO2026") {
      setDiscount(subtotal * 0.1);
      setPromoSuccess("10% PROTOTYPE DISCOUNT APPLIED");
      setPromoError("");
    } else {
      setPromoError("INVALID PROMO OR ACCESS CODE");
      setPromoSuccess("");
    }
  };

  const shipping = subtotal > 200 || subtotal === 0 ? 0 : 25;
  const estimatedTax = (subtotal - discount) * 0.0825;
  const grandTotal = Math.max(0, subtotal - discount + shipping + estimatedTax);

  if (cart.length === 0) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center gap-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] p-8 sm:p-16">
        <div className="w-16 h-16 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#FF6600]">
          <Tag className="w-8 h-8" />
        </div>
        <div className="max-w-md">
          <h3 className="font-display font-black text-2xl uppercase text-[#F5F5F5] mb-2">
            YOUR CART IS CURRENTLY EMPTY
          </h3>
          <p className="font-body text-sm text-[#9E9E9E]">
            No prototypes or performance apparel have been loaded into your staging telemetry.
          </p>
        </div>
        <Button href="/shop" size="lg">
          <span>EXPLORE CATALOG</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      {/* Left: Cart Items List */}
      <div className="lg:col-span-8 flex flex-col gap-4">
        <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
          <span className="font-display font-bold text-xs uppercase text-[#9E9E9E] tracking-wider">
            STAGED PROTOTYPES ({cart.length})
          </span>
          <button
            onClick={clearCart}
            className="text-xs font-numeric text-[#9E9E9E] hover:text-[#FF6600] transition-colors"
          >
            CLEAR ALL
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={`${item.product.id}-${item.size}-${item.colorway}`}
              className="p-4 sm:p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-[#3A3A3A]"
            >
              {/* Product Image & Meta */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] flex-shrink-0 p-2">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-numeric text-[11px] text-[#FF6600]">
                    {item.product.code}
                  </span>
                  <Link
                    href={`/product/${item.product.id}`}
                    className="font-display font-extrabold text-base sm:text-lg uppercase text-[#F5F5F5] hover:text-[#FF6600] transition-colors"
                  >
                    {item.product.name}
                  </Link>
                  <div className="flex items-center gap-3 text-xs font-numeric text-[#9E9E9E]">
                    <span>SIZE: US {item.size}</span>
                    <span>•</span>
                    <span>COLOR: {item.colorway}</span>
                  </div>
                  <span className="font-numeric text-sm font-bold text-[#F5F5F5] sm:hidden mt-1">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Quantity Controls & Remove */}
              <div className="flex items-center justify-between w-full sm:w-auto sm:gap-8 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#2A2A2A]/40">
                <div className="flex items-center border border-[#2A2A2A] rounded-[4px] bg-[#0A0A0A]">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.size, item.colorway, -1)}
                    className="p-2 text-[#9E9E9E] hover:text-[#F5F5F5] hover:bg-[#1C1C1C] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 font-numeric text-xs font-bold text-[#F5F5F5]">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.size, item.colorway, 1)}
                    className="p-2 text-[#9E9E9E] hover:text-[#F5F5F5] hover:bg-[#1C1C1C] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <span className="hidden sm:block font-numeric text-base font-bold text-[#F5F5F5] min-w-[80px] text-right">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>

                <button
                  onClick={() => removeFromCart(item.product.id, item.size, item.colorway)}
                  className="p-2 text-[#9E9E9E] hover:text-[#FF6600] transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Order Summary Box */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-6">
          <h3 className="font-display font-black text-lg uppercase text-[#F5F5F5] pb-4 border-b border-[#2A2A2A]">
            ORDER TELEMETRY
          </h3>

          {/* Subtotal details */}
          <div className="flex flex-col gap-3 text-xs font-numeric">
            <div className="flex justify-between text-[#9E9E9E]">
              <span>SUBTOTAL</span>
              <span className="text-[#F5F5F5]">${subtotal.toFixed(2)}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-[#FF6600]">
                <span>PROMO DISCOUNT (10%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between text-[#9E9E9E]">
              <span>EXPEDITED DISPATCH</span>
              <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
            </div>

            <div className="flex justify-between text-[#9E9E9E]">
              <span>ESTIMATED TAX</span>
              <span className="text-[#F5F5F5]">${estimatedTax.toFixed(2)}</span>
            </div>

            <div className="pt-4 border-t border-[#2A2A2A] flex justify-between text-base font-bold">
              <span className="text-[#F5F5F5]">TOTAL DUE</span>
              <span className="text-[#FF6600] font-numeric">${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Promo Code Form */}
          <form onSubmit={handleApplyPromo} className="flex flex-col gap-2 pt-2 border-t border-[#2A2A2A]">
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="PROMO CODE (e.g. PROTO2026)"
                className="flex-1 bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] px-3 py-2.5 focus:outline-none uppercase"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#1C1C1C] hover:bg-[#2A2A2A] border border-[#2A2A2A] text-xs font-display font-bold text-[#F5F5F5] rounded-[4px] transition-colors"
              >
                APPLY
              </button>
            </div>
            {promoSuccess && <span className="text-[11px] text-green-400 font-numeric">{promoSuccess}</span>}
            {promoError && <span className="text-[11px] text-red-400 font-numeric">{promoError}</span>}
          </form>

          {/* Checkout CTA */}
          <Button href="/checkout" size="lg" className="w-full">
            <span>PROCEED TO SECURE CHECKOUT</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          {/* Guarantee Pill */}
          <div className="flex items-center gap-2 text-xs font-numeric text-[#9E9E9E] justify-center">
            <ShieldCheck className="w-4 h-4 text-[#FF6600]" />
            <span>256-BIT ENCRYPTED QUANTUM CHECKOUT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
