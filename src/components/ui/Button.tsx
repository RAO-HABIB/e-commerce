import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-[#FF6600] hover:bg-[#FF8533] text-[#0A0A0A] font-display font-extrabold uppercase tracking-wider rounded-[4px] border border-[#FF6600] hover:border-[#FF8533] shadow-[0_4px_20px_rgba(255,102,0,0.25)] hover:shadow-[0_8px_30px_rgba(255,102,0,0.4)] transition-all duration-300 transform hover:-translate-y-[1px]",
    secondary:
      "bg-[#141414] hover:bg-[#1C1C1C] text-[#F5F5F5] hover:text-[#FF6600] font-display font-bold uppercase tracking-wider rounded-[4px] border border-[#2A2A2A] hover:border-[#FF6600] transition-all duration-300 transform hover:-translate-y-[1px]",
    outline:
      "bg-transparent hover:bg-white/5 text-[#F5F5F5] font-display font-bold uppercase tracking-wider rounded-[4px] border border-[#2A2A2A] hover:border-[#F5F5F5] transition-all duration-300",
    ghost:
      "bg-transparent hover:bg-white/5 text-[#9E9E9E] hover:text-[#F5F5F5] font-sans font-medium transition-colors",
    icon:
      "p-2.5 rounded-[4px] bg-[#141414] hover:bg-[#1C1C1C] border border-[#2A2A2A] hover:border-[#FF6600] text-[#F5F5F5] hover:text-[#FF6600] transition-all duration-200 flex items-center justify-center",
  };

  const combinedClass = `inline-flex items-center justify-center gap-2 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed ${variant !== "icon" ? sizeClasses[size] : ""} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};
