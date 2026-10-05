import React from "react";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col gap-3 max-w-3xl mb-12 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#FF6600]/30 text-[#FF6600] font-numeric text-xs uppercase tracking-[0.15em] rounded-[4px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#F5F5F5] tracking-tight leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-sm sm:text-base text-[#9E9E9E] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
