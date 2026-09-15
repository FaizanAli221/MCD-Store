"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";
import { formatPKR } from "@/lib/utils";
import { ShieldCheck, Truck, CreditCard, Lock, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useStore();

  const items = Object.entries(cart);
  const subtotal = items.reduce(
    (sum, [, item]) => sum + item.product.price * item.quantity,
    0
  );
  const isFreeShipping = subtotal >= 5000;
  const shippingFee = isFreeShipping || subtotal === 0 ? 0 : 250;
  const total = subtotal + shippingFee;

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Lahore");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod"); // 'cod' | 'card' | 'bank'
  const [submitting, setSubmitting] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !address || !phone) {
      alert("Please complete all required fields.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      clearCart();
      const orderId = `MCD-${Math.floor(100000 + Math.random() * 900000)}`;
      router.push(`/checkout/success?orderId=${orderId}&email=${encodeURIComponent(email)}`);
    }, 1200);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-paper flex flex-col justify-center items-center px-4 text-center space-y-4">
        <h1 className="text-2xl font-bold text-ink">Your cart is empty</h1>
        <p className="text-sm text-ink/60">Add items to your cart before proceeding to checkout.</p>
        <Link
          href="/"
          className="px-6 py-2.5 bg-ink text-paper text-xs font-bold uppercase rounded"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      {/* Checkout Minimal Header */}
      <header className="border-b border-line py-4 bg-paper sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter text-ink">
            MCD
          </Link>
          <div className="flex items-center gap-1 text-xs text-ink/70">
            <Lock size={14} className="text-green-700" />
            <span className="font-semibold text-green-700">Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 md:px-8 py-8">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Contact Info */}
            <div className="space-y-4">
              <h2 className="text-base font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper text-xs">
                  1
                </span>
                Contact Information
              </h2>
              <div>
                <label className="block text-xs font-semibold text-ink mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-cream border border-line rounded text-ink focus:outline-none focus:border-ink"
                />
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div className="space-y-4 pt-4 border-t border-line">
              <h2 className="text-base font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper text-xs">
                  2
                </span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-cream border border-line rounded text-ink focus:outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-cream border border-line rounded text-ink focus:outline-none focus:border-ink"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House number, street name, area"
                  className="w-full px-3.5 py-2.5 text-sm bg-cream border border-line rounded text-ink focus:outline-none focus:border-ink"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">
                    City *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-cream border border-line rounded text-ink focus:outline-none focus:border-ink"
                  >
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Gujranwala">Gujranwala</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">
                    Phone Number (Mobile) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="03261234567"
                    className="w-full px-3.5 py-2.5 text-sm bg-cream border border-line rounded text-ink focus:outline-none focus:border-ink"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="space-y-4 pt-4 border-t border-line">
              <h2 className="text-base font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper text-xs">
                  3
                </span>
                Payment Method
              </h2>

              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors bg-cream border-line">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-ink"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 font-bold text-sm text-ink">
                      <Truck size={16} /> Cash on Delivery (COD)
                    </div>
                    <p className="text-xs text-ink/60">Pay cash upon parcel delivery at your doorstep.</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors border-line">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="accent-ink"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 font-bold text-sm text-ink">
                      <CreditCard size={16} /> Credit / Debit Card (Visa, Mastercard)
                    </div>
                    <p className="text-xs text-ink/60">Direct online payment processed securely.</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-ink text-paper text-sm font-bold uppercase tracking-wider rounded hover:bg-ink/90 disabled:opacity-50 transition-colors shadow-md"
              >
                {submitting ? "Processing Order..." : `Complete Order — ${formatPKR(total)}`}
              </button>
            </div>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5">
            <div className="bg-cream border border-line p-6 rounded-lg space-y-6 sticky top-24">
              <h2 className="text-base font-bold uppercase tracking-wider text-ink border-b border-line pb-3">
                Order Items ({items.length})
              </h2>

              <div className="divide-y divide-line max-h-[300px] overflow-y-auto pr-2">
                {items.map(([itemKey, item]) => (
                  <div key={itemKey} className="py-3 flex gap-3 items-center">
                    <div className="relative h-14 w-14 shrink-0 rounded overflow-hidden bg-paper border border-line">
                      <Image src={item.product.image} alt="" fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-xs">
                      <h4 className="font-semibold text-ink line-clamp-1">{item.product.title}</h4>
                      <p className="text-ink/60">Qty: {item.quantity} {item.selectedSize && `| Size: ${item.selectedSize}`}</p>
                    </div>
                    <span className="text-xs font-bold text-ink">
                      {formatPKR(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-line pt-4 space-y-2 text-xs text-ink/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-ink">{formatPKR(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{isFreeShipping ? <strong className="text-green-700">FREE</strong> : formatPKR(shippingFee)}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-ink pt-2 border-t border-line">
                  <span>Total Amount</span>
                  <span>{formatPKR(total)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-ink/60 bg-paper p-3 rounded border border-line">
                <ShieldCheck size={16} className="text-green-700 shrink-0" />
                <span>100% Satisfaction & 14-Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
