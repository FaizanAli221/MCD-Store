"use client";

import { ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-paper text-xs py-2 px-4 border-b border-white/10">
      <div className="mx-auto max-w-8xl flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-6 text-[11px] text-paper/80">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-sale" />
            100% Authentic MCD Sports
          </span>
          <span className="flex items-center gap-1.5">
            <RotateCcw size={13} className="text-star" />
            Easy 14-Day Returns
          </span>
        </div>

        <div className="mx-auto sm:mx-0 font-medium tracking-wide text-center text-[11px]">
          FREE NATIONWIDE SHIPPING ON ORDERS OVER RS. 5,000 ⚡
        </div>

        <div className="hidden md:flex items-center gap-4 text-[11px] text-paper/80">
          <span className="flex items-center gap-1.5">
            <Truck size={13} />
            Dispatch within 24h
          </span>
        </div>
      </div>
    </div>
  );
}
