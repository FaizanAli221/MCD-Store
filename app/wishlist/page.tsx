"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { useStore } from "@/lib/store";
import { Product } from "@/lib/types";
import { Heart, ShoppingBag } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, wishlistCount } = useStore();
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlistProducts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      const all: Product[] = data.products || [];
      const filtered = all.filter((p) => wishlist.has(p.id));
      setWishlistProducts(filtered);
    } catch {
      setWishlistProducts([]);
    } finally {
      setLoading(false);
    }
  }, [wishlist]);

  useEffect(() => {
    fetchWishlistProducts();
  }, [fetchWishlistProducts]);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-8xl px-4 md:px-8 py-8 min-h-[60vh]">
        <div className="flex items-center gap-3 mb-6">
          <Heart size={24} className="text-sale fill-sale" />
          <h1 className="text-2xl font-bold tracking-tight text-ink">
            My Saved Wishlist ({wishlistCount})
          </h1>
        </div>

        {wishlistProducts.length === 0 && !loading ? (
          <div className="py-20 text-center space-y-4 max-w-md mx-auto">
            <Heart size={56} className="mx-auto text-ink/20" />
            <h2 className="text-lg font-semibold text-ink">Your wishlist is empty</h2>
            <p className="text-sm text-ink/60">
              Click the heart icon on any product card or detail page to save your favorite items for later.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-ink text-paper text-xs font-bold uppercase tracking-wider rounded hover:bg-ink/90 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <ProductGrid products={wishlistProducts} columns={4} loading={loading} />
        )}
      </main>

      <Footer />
    </>
  );
}
