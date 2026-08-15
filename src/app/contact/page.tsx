import React from "react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] min-h-screen">
      <Container>
        <div className="mb-10 pb-6 border-b border-[#2A2A2A]">
          <span className="font-numeric text-xs text-[#FF6600] uppercase tracking-widest block mb-2">
            GLOBAL ATHLETE RELATIONS
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-[#F5F5F5] tracking-tight">
            CONTACT &amp; CONCIERGE
          </h1>
          <p className="font-body text-sm sm:text-base text-[#9E9E9E] mt-3 max-w-2xl">
            Transmit a direct inquiry to our biomechanical support desk or connect with our international laboratory hubs.
          </p>
        </div>

        <ContactForm />
      </Container>
    </div>
  );
}
