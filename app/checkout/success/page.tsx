"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Truck, Package, ShoppingBag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "MCD-789241";
  const email = searchParams.get("email") || "customer@example.com";

  return (
    <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 text-center">
      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700 mb-6 animate-fade-in">
        <CheckCircle2 size={48} />
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-ink">
        Thank You For Your Order!
      </h1>
      <p className="mt-2 text-sm text-ink/70">
        Your order <strong className="text-ink font-bold">#{orderId}</strong> has been received and is currently being processed.
      </p>

      <div className="mt-8 bg-cream border border-line rounded-lg p-6 text-left space-y-4 shadow-sm">
        <h3 className="font-bold text-sm uppercase tracking-wider text-ink border-b border-line pb-3">
          Order Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-ink/70">
          <div>
            <span className="block font-semibold text-ink">Order Reference</span>
            <span>#{orderId}</span>
          </div>
          <div>
            <span className="block font-semibold text-ink">Confirmation Sent To</span>
            <span>{email}</span>
          </div>
          <div>
            <span className="block font-semibold text-ink">Payment Status</span>
            <span className="text-green-700 font-semibold">Confirmed (COD)</span>
          </div>
          <div>
            <span className="block font-semibold text-ink">Estimated Delivery</span>
            <span>3 - 5 Business Days</span>
          </div>
        </div>

        <div className="pt-3 border-t border-line flex items-center gap-3 text-xs text-ink/80">
          <Truck size={18} className="text-ink shrink-0" />
          <span>You will receive an SMS and email with tracking updates as soon as your parcel dispatches.</span>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-ink text-paper text-xs font-bold uppercase tracking-wider rounded hover:bg-ink/90 transition-colors"
        >
          <ShoppingBag size={16} />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-[50vh] bg-paper" />}>
        <SuccessContent />
      </Suspense>
      <Footer />
    </>
  );
}
