import React from "react";
import { Container } from "@/components/ui/Container";
import { CheckoutForm } from "@/components/sections/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] min-h-screen">
      <Container>
        <div className="mb-10 pb-6 border-b border-[#2A2A2A]">
          <span className="font-numeric text-xs text-[#FF6600] uppercase tracking-widest block mb-2">
            256-BIT ENCRYPTED DISPATCH
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl uppercase text-[#F5F5F5] tracking-tight">
            CHECKOUT
          </h1>
          <p className="font-body text-sm text-[#9E9E9E] mt-2">
            Authorize dispatch coordinates and payment authorization.
          </p>
        </div>

        <CheckoutForm />
      </Container>
    </div>
  );
}
