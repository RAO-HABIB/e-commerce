"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, MapPin, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "SIZING_INQUIRY",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
      {/* Left 5 Cols: Contact Details & Showrooms */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        <div>
          <span className="font-numeric text-xs text-[#FF6600] uppercase tracking-widest block mb-2">
            DIRECT CONCIERGE &amp; DISPATCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-[#F5F5F5] tracking-tight">
            CONNECT WITH <br />THE LAB
          </h2>
          <p className="font-body text-sm text-[#9E9E9E] mt-3 leading-relaxed">
            Have questions regarding prototype specifications, custom athlete calibration, or international private courier delivery? Our telemetry team is available 24/7.
          </p>
        </div>

        {/* Channels */}
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex items-center gap-4">
            <div className="w-10 h-10 rounded-[4px] bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#FF6600]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-numeric text-[#9E9E9E] uppercase">CONCIERGE INQUIRIES</div>
              <div className="text-xs font-numeric font-bold text-[#F5F5F5]">dispatch@nextlevel.design</div>
            </div>
          </div>

          <div className="p-4 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex items-center gap-4">
            <div className="w-10 h-10 rounded-[4px] bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#FF6600]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-numeric text-[#9E9E9E] uppercase">TELEMETRY HOTLINE</div>
              <div className="text-xs font-numeric font-bold text-[#F5F5F5]">+1 (415) 890-KINETIC</div>
            </div>
          </div>

          <div className="p-4 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex items-center gap-4">
            <div className="w-10 h-10 rounded-[4px] bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#FF6600]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-numeric text-[#9E9E9E] uppercase">HEADQUARTERS &amp; PROVING GROUND</div>
              <div className="text-xs font-numeric font-bold text-[#F5F5F5]">400 Mission St, Suite 2200, San Francisco, CA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right 7 Cols: Interactive Form */}
      <div className="lg:col-span-7 bg-[#141414] border border-[#2A2A2A] rounded-[4px] p-6 sm:p-10 flex flex-col justify-center">
        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#1C1C1C] border border-[#FF6600] flex items-center justify-center text-[#FF6600]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-black text-2xl uppercase text-[#F5F5F5]">
              DISPATCH TRANSMISSION RECEIVED
            </h3>
            <p className="font-body text-sm text-[#9E9E9E] max-w-md">
              Your inquiry has been routed to our biomechanical support lead. Expect a direct transmission within 4 business hours.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="secondary" className="mt-4">
              SEND ANOTHER MESSAGE
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h3 className="font-display font-black text-xl uppercase text-[#F5F5F5] pb-3 border-b border-[#2A2A2A]">
              TRANSMIT A DIRECT INQUIRY
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Marcus Reid"
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. athlete@velocity.com"
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                INQUIRY TOPIC
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-numeric text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none cursor-pointer"
              >
                <option value="SIZING_INQUIRY">SIZING &amp; BIOMECHANICAL TELEMETRY</option>
                <option value="ORDER_DISPATCH">ORDER LOGISTICS &amp; TRACKING</option>
                <option value="CUSTOM_CALIBRATION">ATHLETE SPONSORSHIP &amp; PROTOTYPE TESTING</option>
                <option value="MEDIA">PRESS &amp; DESIGN COLLABORATION</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-numeric text-[#9E9E9E] mb-1.5 uppercase">
                MESSAGE TRANSMISSION
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Detail your requirements, race dates, or specific questions..."
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF6600] text-xs font-sans text-[#F5F5F5] rounded-[4px] p-3 focus:outline-none resize-none"
              ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full mt-2">
              <Send className="w-4 h-4" />
              <span>TRANSMIT DISPATCH</span>
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
