"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, Maximize2 } from "lucide-react";

export interface ProductGalleryProps {
  images: string[];
  name: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const activeImage = images[selectedIdx] || images[0];

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-6 w-full">
      {/* Thumbnail Strip */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 lg:w-24 flex-shrink-0">
        {images.map((img, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`relative w-20 h-20 sm:w-24 sm:h-24 bg-[#141414] border rounded-[4px] overflow-hidden flex-shrink-0 transition-all ${
                isSelected
                  ? "border-[#FF6600] shadow-[0_0_12px_rgba(255,102,0,0.4)]"
                  : "border-[#2A2A2A] hover:border-[#9E9E9E] opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </button>
          );
        })}
      </div>

      {/* Main Showcase Stage */}
      <div className="relative flex-1 aspect-square bg-[#141414] border border-[#2A2A2A] rounded-[4px] overflow-hidden p-8 flex items-center justify-center group">
        <div className="absolute inset-0 bg-radial from-white/[0.04] to-transparent pointer-events-none"></div>

        {/* View Angle Pill */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#2A2A2A] rounded-[2px] font-numeric text-xs text-[#9E9E9E]">
          ANGLE 0{selectedIdx + 1} / 0{images.length}
        </div>

        {/* Zoom trigger */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-4 right-4 z-10 p-2 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#2A2A2A] hover:border-[#FF6600] text-[#9E9E9E] hover:text-[#FF6600] rounded-[4px] transition-colors"
          title="Toggle Zoom Mode"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        <div className={`relative w-full h-full transition-transform duration-500 ${isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"}`} onClick={() => setIsZoomed(!isZoomed)}>
          <Image
            src={activeImage}
            alt={name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
