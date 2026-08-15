"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, CreditCard, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export const CheckoutForm: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    email: "alexander.vance@kinetic.design",
    firstName: "Alexander",
    lastName: "Vance",
    address: "742 Evergreen Terrace, Sector 4",
    city: "San Francisco",
    state: "CA",
    postalCode: "94107",
    country: "United States",
    cardNumber: "•••• •••• •••• 9428",
    expiry: "10/28",
    cvc: "882",
    deliveryMethod: "express",
  });

  const shipping = subtotal > 200 || subtotal === 0 ? 0 : 25;
  const estimatedTax = subtotal * 0.0825;
  const grandTotal = subtotal + shipping + estimatedTax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    clearCart();
  };

  if (step === "success") {
    return (
      <div className="max-w-2xl mx-auto py-16 px-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] text-center flex flex-col items-center gap-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#1C1C1C] border border-[#FF6600] flex items-center justify-center text-[#FF6600]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="font-numeric text-xs text-[#FF6600] tracking-widest uppercase">
            PROTOCOL ORDER CONFIRMED // #NX-94281
          </span>
          <h2 className="font-display font-black text-3xl uppercase text-[#F5F5F5] mt-2">
            DISPATCH PREPARATION INITIATED
          </h2>
          <p className="font-body text-sm text-[#9E9E9E] mt-3 leading-relaxed">
            Thank you, Alexander. Your prototype order has been registered on the Next Level chain. A cryptographic telemetry manifest has been transmitted to {formData.email}.
          </p>
        </div>

        <div className="w-full p-4 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] text-left text-xs font-numeric flex flex-col gap-2">
          <div className="flex justify-between text-[#9E9E9E]">
            <span>TRACKING ID:</span>
            <span className="text-[#FF6600] font-bold">NX-TRK-8921849102</span>
          </div>
          <div className="flex justify-between text-[#9E9E9E]">
            <span>ESTIMATED DELIVERY:</span>
            <span className="text-[#F5F5F5]">2-3 Business Days (Express)</span>
          </div>
          <div className="flex justify-between text-[#9E9E9E]">
            <span>DESTINATION:</span>
            <span className="text-[#F5F5F5]">{formData.city}, {formData.state}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Button href="/account" variant="secondary">
            VIEW ACCOUNT ORDERS
          </Button>
          <Button href="/shop">
            CONTINUE BROWSING
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      {/* Left 8 Cols: Shipping & Payment Details */}
      <div className="lg:col-span-8 flex flex-col gap-8">
        {/* Contact Info */}
        <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2A]">
            <h3 className="font-display font-black text-base uppercase text-[#F5F5F5]">
              01. ATHLETE CONTACT TELEMETRY
            </h3>
            <span className="text-xs font-numeric text-[#9E9E9E]">STEP 1/3</span>
          </div>
          <div>
            <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
              EMAIL ADDRESS FOR LOGISTICS MANIFEST
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
            />
          </div>
        </div>

        {/* Shipping Address */}
        <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2A]">
            <h3 className="font-display font-black text-base uppercase text-[#F5F5F5]">
              02. DISPATCH DESTINATION
            </h3>
            <span className="text-xs font-numeric text-[#9E9E9E]">STEP 2/3</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                FIRST NAME
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                LAST NAME
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
              STREET ADDRESS / LABORATORY
            </label>
            <input
              type="text"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                CITY
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                STATE / PROVINCE
              </label>
              <input
                type="text"
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                POSTAL CODE
              </label>
              <input
                type="text"
                required
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2A]">
            <h3 className="font-display font-black text-base uppercase text-[#F5F5F5]">
              03. ENCRYPTED PAYMENT TRANSIT
            </h3>
            <span className="text-xs font-numeric text-[#9E9E9E]">STEP 3/3</span>
          </div>

          <div className="p-3 bg-[#1C1C1C] border border-[#FF6600]/30 rounded-[4px] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-[#FF6600]" />
              <span className="text-xs font-display font-bold uppercase text-[#F5F5F5]">
                CREDIT / DEBIT CARD ENCRYPTION
              </span>
            </div>
            <Lock className="w-4 h-4 text-[#9E9E9E]" />
          </div>

          <div>
            <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
              CARD NUMBER
            </label>
            <input
              type="text"
              required
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                EXPIRATION (MM/YY)
              </label>
              <input
                type="text"
                required
                value={formData.expiry}
                onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                SECURITY CVC
              </label>
              <input
                type="text"
                required
                value={formData.cvc}
                onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right 4 Cols: Order Summary Sticky Box */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-6 sticky top-28">
          <h3 className="font-display font-black text-lg uppercase text-[#F5F5F5] pb-4 border-b border-[#2A2A2A]">
            SUMMARY
          </h3>

          {/* Cart preview */}
          <div className="flex flex-col gap-3 max-h-56 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex items-center justify-between text-xs font-numeric py-2 border-b border-[#2A2A2A]/40"
              >
                <div className="flex flex-col">
                  <span className="font-display font-bold text-[#F5F5F5] uppercase">
                    {item.product.name}
                  </span>
                  <span className="text-[11px] text-[#9E9E9E]">
                    Size: US {item.size} • Qty: {item.quantity}
                  </span>
                </div>
                <span className="font-bold text-[#F5F5F5]">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 text-xs font-numeric pt-2 border-t border-[#2A2A2A]">
            <div className="flex justify-between text-[#9E9E9E]">
              <span>SUBTOTAL</span>
              <span className="text-[#F5F5F5]">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[#9E9E9E]">
              <span>DISPATCH</span>
              <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-[#9E9E9E]">
              <span>TAX</span>
              <span className="text-[#F5F5F5]">${estimatedTax.toFixed(2)}</span>
            </div>
            <div className="pt-3 border-t border-[#2A2A2A] flex justify-between text-base font-bold">
              <span className="text-[#F5F5F5]">TOTAL DUE</span>
              <span className="text-[#FF6600] font-numeric">${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            <span>AUTHORIZE &amp; PLACE ORDER</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <div className="flex items-center gap-2 text-[11px] font-numeric text-[#9E9E9E] justify-center">
            <ShieldCheck className="w-4 h-4 text-[#FF6600]" />
            <span>INSTANT DISPATCH VALIDATION</span>
          </div>
        </div>
      </div>
    </form>
  );
};
