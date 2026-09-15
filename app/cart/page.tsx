"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useStore } from "@/lib/store";
import { formatPKR } from "@/lib/utils";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag } from "lucide-react";
import { useState } from "react";

const FREE_SHIPPING_THRESHOLD = 5000;

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore();
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  const items = Object.entries(cart);
  const subtotal = items.reduce(
    (sum, [, item]) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = discountApplied ? Math.round(subtotal * 0.1) : 0;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = isFreeShipping || subtotal === 0 ? 0 : 250;
  const grandTotal = subtotal - discountAmount + shippingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "MCD10") {
      setDiscountApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try 'MCD10' for 10% off!");
    }
  };

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-8xl px-4 md:px-8 py-8 min-h-[60vh]">
        <h1 className="text-2xl font-bold tracking-tight text-ink mb-6">
          Your Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="py-20 text-center space-y-4 max-w-md mx-auto">
            <ShoppingBag size={56} className="mx-auto text-ink/20" />
            <h2 className="text-lg font-semibold text-ink">Your cart is currently empty</h2>
            <p className="text-sm text-ink/60">
              Explore our performance sauna suits, tracksuits, and gym gear to add items to your cart.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-ink text-paper text-xs font-bold uppercase tracking-wider rounded hover:bg-ink/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-line text-xs font-bold uppercase tracking-wider text-ink/60">
                <span>Products ({items.length})</span>
                <button
                  onClick={clearCart}
                  className="text-ink/60 hover:text-sale transition-colors lowercase"
                >
                  Clear all
                </button>
              </div>

              <div className="divide-y divide-line">
                {items.map(([itemKey, item]) => (
                  <div key={itemKey} className="py-4 flex gap-4 items-center">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded bg-cream border border-line">
                      <Image
                        src={item.product.image}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="text-sm font-bold text-ink hover:underline line-clamp-1"
                        >
                          {item.product.title}
                        </Link>
                        <div className="text-xs text-ink/60 flex gap-3">
                          {item.selectedSize && <span>Size: <strong>{item.selectedSize}</strong></span>}
                          <span>Category: <strong>{item.product.category}</strong></span>
                        </div>
                        <span className="text-xs font-semibold text-ink sm:hidden">
                          {formatPKR(item.product.price)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6">
                        <div className="flex items-center border border-line rounded">
                          <button
                            onClick={() => updateQuantity(itemKey, item.quantity - 1)}
                            className="p-1.5 text-ink/70 hover:text-ink"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-xs font-bold text-ink">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(itemKey, item.quantity + 1)}
                            className="p-1.5 text-ink/70 hover:text-ink"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <span className="hidden sm:block text-sm font-bold text-ink min-w-[80px] text-right">
                          {formatPKR(item.product.price * item.quantity)}
                        </span>

                        <button
                          onClick={() => removeFromCart(itemKey)}
                          className="text-ink/40 hover:text-sale transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-cream border border-line p-6 rounded-lg space-y-6">
                <h2 className="text-base font-bold uppercase tracking-wider text-ink">
                  Order Summary
                </h2>

                <div className="space-y-3 text-xs border-b border-line pb-4">
                  <div className="flex justify-between text-ink/80">
                    <span>Subtotal</span>
                    <span className="font-semibold text-ink">{formatPKR(subtotal)}</span>
                  </div>

                  {discountApplied && (
                    <div className="flex justify-between text-green-700 font-semibold">
                      <span>Discount (10% OFF - MCD10)</span>
                      <span>-{formatPKR(discountAmount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-ink/80">
                    <span>Nationwide Shipping</span>
                    <span>
                      {isFreeShipping ? (
                        <strong className="text-green-700 uppercase">Free</strong>
                      ) : (
                        formatPKR(shippingFee)
                      )}
                    </span>
                  </div>
                </div>

                {/* Promo code form */}
                <form onSubmit={handleApplyPromo} className="space-y-2">
                  <label className="text-xs font-semibold text-ink block">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Try 'MCD10'"
                      className="flex-1 px-3 py-2 text-xs bg-paper border border-line rounded text-ink uppercase placeholder:normal-case focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-ink text-paper text-xs font-semibold rounded hover:bg-ink/90 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-[11px] text-sale">{promoError}</p>
                  )}
                  {discountApplied && (
                    <p className="text-[11px] text-green-700 font-medium">
                      ✓ Promo code MCD10 applied successfully!
                    </p>
                  )}
                </form>

                {/* Total */}
                <div className="pt-2 border-t border-line flex justify-between items-baseline">
                  <span className="text-sm font-bold text-ink">Total Amount</span>
                  <span className="text-xl font-black text-ink">
                    {formatPKR(grandTotal)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-ink text-paper text-xs font-bold uppercase tracking-wider rounded hover:bg-ink/90 transition-colors text-center"
                >
                  Proceed to Checkout
                  <ArrowRight size={16} />
                </Link>

                <div className="flex items-center justify-center gap-2 text-[11px] text-ink/60 pt-2">
                  <ShieldCheck size={14} className="text-ink" />
                  <span>Secure 256-bit Encrypted Checkout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
