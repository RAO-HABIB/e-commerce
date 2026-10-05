import type { Metadata } from "next";
import { Archivo, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXT LEVEL | High-Performance Engineered Footwear",
  description:
    "Engineered precision meets cinematic minimalism. Explore our advanced carbon-shank prototypes, biomechanical telemetry, and aerodynamic speed architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${spaceGrotesk.variable} dark`}
    >
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F5F5] antialiased selection:bg-[#FF6600] selection:text-[#0A0A0A]">
        <CartProvider>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
