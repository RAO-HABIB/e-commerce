"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_USER } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { User, Package, MapPin, Shield, Activity, ArrowUpRight, LogOut, CheckCircle2 } from "lucide-react";

export const AccountDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"orders" | "addresses" | "telemetry">("orders");

  return (
    <div className="py-12 flex flex-col gap-10">
      {/* Profile Header Hero Card */}
      <div className="p-6 sm:p-8 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-[4px] bg-[#1C1C1C] border border-[#FF6600]/40 flex items-center justify-center text-[#FF6600] font-display font-black text-2xl">
            AV
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2 className="font-display font-black text-2xl uppercase text-[#F5F5F5]">
                {MOCK_USER.name}
              </h2>
              <span className="px-2 py-0.5 bg-[#FF6600]/10 border border-[#FF6600] text-[#FF6600] font-numeric text-[10px] uppercase rounded-[2px]">
                {MOCK_USER.membershipTier}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-numeric text-[#9E9E9E] mt-1">
              <span>CALLSIGN: {MOCK_USER.callsign}</span>
              <span>•</span>
              <span>{MOCK_USER.email}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-[#2A2A2A]">
          <div className="p-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] flex flex-col">
            <span className="text-[10px] font-numeric text-[#9E9E9E]">TOTAL TELEMETRY</span>
            <span className="font-numeric text-base font-bold text-[#FF6600]">{MOCK_USER.totalMiles}</span>
          </div>
          <div className="p-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] flex flex-col">
            <span className="text-[10px] font-numeric text-[#9E9E9E]">SAVED CALIBRATION</span>
            <span className="font-numeric text-base font-bold text-[#F5F5F5]">US {MOCK_USER.savedSize}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 border-b border-[#2A2A2A] pb-4">
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-[4px] font-display font-bold text-xs uppercase tracking-wider transition-all ${
            activeTab === "orders"
              ? "bg-[#FF6600] text-[#0A0A0A]"
              : "bg-[#141414] text-[#9E9E9E] hover:text-[#F5F5F5] border border-[#2A2A2A]"
          }`}
        >
          <Package className="w-4 h-4" />
          <span>ORDER MANIFESTS ({MOCK_USER.orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("addresses")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-[4px] font-display font-bold text-xs uppercase tracking-wider transition-all ${
            activeTab === "addresses"
              ? "bg-[#FF6600] text-[#0A0A0A]"
              : "bg-[#141414] text-[#9E9E9E] hover:text-[#F5F5F5] border border-[#2A2A2A]"
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>DISPATCH DESTINATIONS</span>
        </button>

        <button
          onClick={() => setActiveTab("telemetry")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-[4px] font-display font-bold text-xs uppercase tracking-wider transition-all ${
            activeTab === "telemetry"
              ? "bg-[#FF6600] text-[#0A0A0A]"
              : "bg-[#141414] text-[#9E9E9E] hover:text-[#F5F5F5] border border-[#2A2A2A]"
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>BIOMECHANICAL PROFILE</span>
        </button>
      </div>

      {/* Tab Content 1: Orders */}
      {activeTab === "orders" && (
        <div className="flex flex-col gap-6">
          {MOCK_USER.orders.map((ord) => (
            <div
              key={ord.id}
              className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-6"
            >
              {/* Order Top Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#2A2A2A]">
                <div className="flex items-center gap-3">
                  <span className="font-display font-black text-lg uppercase text-[#F5F5F5]">
                    ORDER #{ord.id}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 text-[10px] font-numeric font-bold uppercase rounded-[2px] ${
                      ord.status === "IN TRANSIT"
                        ? "bg-[#FF6600]/20 text-[#FF6600] border border-[#FF6600]/40"
                        : "bg-[#1C1C1C] text-green-400 border border-green-500/30"
                    }`}
                  >
                    {ord.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-numeric text-[#9E9E9E]">
                  <span>DATE: {ord.date}</span>
                  <span>•</span>
                  <span className="text-[#F5F5F5] font-bold">TOTAL: ${ord.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Status Tracker */}
              <div className="p-4 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] flex items-center justify-between text-xs font-numeric">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF6600] animate-ping"></div>
                  <span className="text-[#9E9E9E]">STATUS: {ord.statusDetail}</span>
                </div>
                <span className="text-[#FF6600] font-bold">{ord.trackingNumber}</span>
              </div>

              {/* Order Items */}
              <div className="flex flex-col gap-3">
                {ord.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-4 p-3 bg-[#1C1C1C] border border-[#2A2A2A] rounded-[4px]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[2px] p-2 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.productName}
                          fill
                          sizes="64px"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-sm uppercase text-[#F5F5F5]">
                          {item.productName}
                        </span>
                        <span className="text-xs font-numeric text-[#9E9E9E]">
                          {item.colorway} • Size: US {item.size} • Qty: {item.quantity}
                        </span>
                      </div>
                    </div>

                    <span className="font-numeric text-sm font-bold text-[#FF6600]">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Content 2: Addresses */}
      {activeTab === "addresses" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_USER.addresses.map((addr) => (
            <div
              key={addr.id}
              className="p-6 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display font-bold text-sm uppercase text-[#F5F5F5]">
                    {addr.title}
                  </h4>
                  {addr.isDefault && (
                    <span className="px-2 py-0.5 bg-[#FF6600] text-[#0A0A0A] font-numeric text-[10px] font-bold uppercase rounded-[2px]">
                      DEFAULT
                    </span>
                  )}
                </div>
                <p className="font-numeric text-xs text-[#9E9E9E] leading-relaxed">
                  {addr.street} <br />
                  {addr.city}, {addr.state} {addr.postalCode} <br />
                  {addr.country}
                </p>
              </div>

              <div className="flex gap-3 pt-3 border-t border-[#2A2A2A]">
                <button className="text-xs font-numeric text-[#FF6600] hover:underline">
                  EDIT ADDRESS
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Content 3: Biomechanical Profile */}
      {activeTab === "telemetry" && (
        <div className="p-8 bg-[#141414] border border-[#2A2A2A] rounded-[4px] flex flex-col gap-6">
          <h3 className="font-display font-bold text-base uppercase text-[#FF6600] tracking-wider">
            ATHLETE BIOMECHANICAL PASSPORT
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] flex flex-col">
              <span className="text-[10px] font-numeric text-[#9E9E9E]">GAIT PROFILE</span>
              <span className="font-numeric text-lg font-bold text-[#F5F5F5] mt-1">NEUTRAL / MIDFOOT STRIKE</span>
            </div>
            <div className="p-4 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] flex flex-col">
              <span className="text-[10px] font-numeric text-[#9E9E9E]">PREFERRED OFFSET / DROP</span>
              <span className="font-numeric text-lg font-bold text-[#FF6600] mt-1">8MM (AETHEOS STANDARD)</span>
            </div>
            <div className="p-4 bg-[#0A0A0A] border border-[#2A2A2A] rounded-[4px] flex flex-col">
              <span className="text-[10px] font-numeric text-[#9E9E9E]">CADENCE AVERAGE</span>
              <span className="font-numeric text-lg font-bold text-[#F5F5F5] mt-1">182 STEPS / MIN</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
