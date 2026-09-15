"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, RotateCcw, ShieldCheck, Clock } from "lucide-react";

export default function ShippingReturnsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 md:px-8 py-12 space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-ink">
            Shipping & Returns Policy
          </h1>
          <p className="text-sm text-ink/70">
            Clear, transparent policies to ensure a seamless shopping experience.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-cream border border-line p-6 rounded-lg text-center space-y-2">
            <Truck size={28} className="mx-auto text-ink" />
            <h3 className="font-bold text-sm text-ink">Free Shipping</h3>
            <p className="text-xs text-ink/70">On all nationwide orders over Rs. 5,000</p>
          </div>

          <div className="bg-cream border border-line p-6 rounded-lg text-center space-y-2">
            <Clock size={28} className="mx-auto text-ink" />
            <h3 className="font-bold text-sm text-ink">Fast Dispatch</h3>
            <p className="text-xs text-ink/70">Orders dispatch within 24 business hours</p>
          </div>

          <div className="bg-cream border border-line p-6 rounded-lg text-center space-y-2">
            <RotateCcw size={28} className="mx-auto text-ink" />
            <h3 className="font-bold text-sm text-ink">14-Day Returns</h3>
            <p className="text-xs text-ink/70">Easy size exchanges & money back guarantee</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 border-t border-line pt-8 text-sm leading-relaxed text-ink/80">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink uppercase tracking-wider">
              1. Shipping Policy
            </h2>
            <p>
              MCD Sports delivers to all cities and regions across Pakistan. Orders placed before 3:00 PM (PKT) Monday through Friday are processed on the same day.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><strong>Standard Delivery:</strong> 3 to 5 business days (Rs. 250 flat rate for orders below Rs. 5,000).</li>
              <li><strong>Free Shipping:</strong> Automatically applied at checkout for orders of Rs. 5,000 or more.</li>
              <li><strong>Payment Options:</strong> Cash on Delivery (COD), Online Card, or Bank Transfer.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-line pt-6">
            <h2 className="text-lg font-bold text-ink uppercase tracking-wider">
              2. 14-Day Return & Exchange Policy
            </h2>
            <p>
              We want you to be 100% satisfied with your fit and gear. If your item does not fit or if you wish to request a return:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Item must be returned within 14 days of delivery.</li>
              <li>Item must be unworn, unwashed, free of scent, with all original tags attached.</li>
              <li>Size exchanges are processed free of courier charge for defective or incorrectly sent items.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-line pt-6">
            <h2 className="text-lg font-bold text-ink uppercase tracking-wider">
              3. How to Request an Exchange
            </h2>
            <p className="text-xs">
              Contact our WhatsApp Support hotline at <strong>+92 326 4382910</strong> or email <strong>info@mcd.com.pk</strong> with your Order Number and preferred new size. Our logistics team will arrange your exchange pickup promptly.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
