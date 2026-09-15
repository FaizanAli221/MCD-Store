import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import MobileNav from "@/components/MobileNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MCD Sports | Sauna Suits & Performance Gear",
  description:
    "MCD Sports delivers unmatched quality, innovation, and superior craftsmanship in every product. Shop sauna suits, tracksuits, and performance gear.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-paper text-ink antialiased pb-16 md:pb-0">
        <StoreProvider>
          {children}
          <MobileNav />
        </StoreProvider>
      </body>
    </html>
  );
}
