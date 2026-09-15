"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Flame, Zap, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-8xl px-4 md:px-8 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sale">
            Craftsmanship & Performance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-ink">
            ENGINEERED TO FUEL CHAMPIONS
          </h1>
          <p className="text-base text-ink/70 leading-relaxed">
            MCD Sports is a premium athletic wear brand dedicated to delivering state-of-the-art sauna suits, combat training wear, and high-performance workout gear. Built for serious athletes and dedicated fitness enthusiasts.
          </p>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-cream border border-line p-6 rounded-lg space-y-3 text-center">
            <Flame size={32} className="mx-auto text-sale" />
            <h3 className="font-bold text-base text-ink">Thermal Tech</h3>
            <p className="text-xs text-ink/70 leading-relaxed">
              Proprietary polymer matrix engineered for rapid heat retention and accelerated perspiration.
            </p>
          </div>

          <div className="bg-cream border border-line p-6 rounded-lg space-y-3 text-center">
            <ShieldCheck size={32} className="mx-auto text-ink" />
            <h3 className="font-bold text-base text-ink">Heavy-Duty Durability</h3>
            <p className="text-xs text-ink/70 leading-relaxed">
              Triple-stitched anti-tear composite fabrics designed to withstand intense sparring and cardio sessions.
            </p>
          </div>

          <div className="bg-cream border border-line p-6 rounded-lg space-y-3 text-center">
            <Zap size={32} className="mx-auto text-star" />
            <h3 className="font-bold text-base text-ink">Combat Fit</h3>
            <p className="text-xs text-ink/70 leading-relaxed">
              Ergonomic active cut crafted alongside professional fighters for zero restriction of movement.
            </p>
          </div>

          <div className="bg-cream border border-line p-6 rounded-lg space-y-3 text-center">
            <Award size={32} className="mx-auto text-ink" />
            <h3 className="font-bold text-base text-ink">Nationwide Legacy</h3>
            <p className="text-xs text-ink/70 leading-relaxed">
              Trusted by thousands of athletes across Pakistan for weight cuts and daily conditioning.
            </p>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-b border-line py-12">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-lg overflow-hidden border border-line bg-cream">
            <Image
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1000&q=80"
              alt="MCD Sports Athlete Training"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              OUR MISSION & COMMITMENT
            </h2>
            <p className="text-sm text-ink/70 leading-relaxed">
              At MCD Sports, we believe that sweat is the currency of progress. Every sauna suit, hoodie, and tracksuit in our line is tested under extreme conditions to guarantee durability, safety, and peak thermal efficiency.
            </p>
            <p className="text-sm text-ink/70 leading-relaxed">
              Whether you are preparing for a championship fight weight cut or accelerating your personal weight loss journey, MCD Sports equips you with uncompromised quality.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-ink text-paper text-xs font-bold uppercase tracking-wider rounded hover:bg-ink/90 transition-colors"
            >
              Shop The Collection
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
