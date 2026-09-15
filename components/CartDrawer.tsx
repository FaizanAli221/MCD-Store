"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPKR } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 5000;

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartCount,
  } = useStore();

  if (!isCartOpen) return null;

  const items = Object.entries(cart);
  const subtotal = items.reduce(
    (sum, [, item]) => sum + item.product.price * item.quantity,
    0
  );
  const progressPercent = Math.min(
    100,
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100
  );
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-paper border-l border-line flex flex-col shadow-2xl animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-ink" />
              <h2 className="text-base font-bold text-ink">
                Shopping Cart ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-ink/60 hover:text-ink transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-cream border-b border-line p-4">
            <div className="text-xs font-medium text-ink mb-1.5 flex justify-between">
              {remainingForFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-sale">{formatPKR(remainingForFreeShipping)}</strong> more for <strong>Free Shipping</strong>
                </span>
              ) : (
                <span className="text-green-700 font-semibold">
                  🎉 You unlocked FREE Nationwide Shipping!
                </span>
              )}
            </div>
            <div className="h-2 w-full bg-line rounded-full overflow-hidden">
              <div
                className="h-full bg-ink transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-line">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <ShoppingBag size={48} className="mx-auto text-ink/20" />
                <p className="text-sm text-ink/60">Your shopping cart is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-ink text-paper text-xs font-semibold rounded hover:bg-ink/90 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map(([itemKey, item]) => (
                <div key={itemKey} className="py-4 flex gap-4 first:pt-0 last:pb-0">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded bg-cream border border-line">
                    <Image
                      src={item.product.image}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="text-xs font-semibold text-ink line-clamp-1 hover:underline"
                        >
                          {item.product.title}
                        </Link>
                        <button
                          onClick={() => removeFromCart(itemKey)}
                          className="text-ink/40 hover:text-sale transition-colors p-0.5"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-[11px] text-ink/60">
                        {item.selectedSize && (
                          <span>Size: <strong>{item.selectedSize}</strong></span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-line rounded">
                        <button
                          onClick={() => updateQuantity(itemKey, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-ink/70 hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-xs font-semibold text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(itemKey, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-ink/70 hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-ink">
                        {formatPKR(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="border-t border-line bg-paper p-6 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-ink/70">
                  <span>Subtotal</span>
                  <span className="font-semibold text-ink">{formatPKR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-ink/70">
                  <span>Shipping</span>
                  <span>
                    {remainingForFreeShipping === 0 ? (
                      <strong className="text-green-700">FREE</strong>
                    ) : (
                      "Calculated at checkout"
                    )}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="flex items-center justify-center py-3 text-xs font-semibold border border-ink text-ink rounded hover:bg-cream transition-colors text-center"
                >
                  View Cart
                </Link>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 text-xs font-semibold bg-ink text-paper rounded hover:bg-ink/90 transition-colors text-center"
                >
                  Checkout
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
