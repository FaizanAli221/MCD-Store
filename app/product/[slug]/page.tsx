"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarRating from "@/components/StarRating";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/lib/types";
import { formatPKR, discountPercent, cn } from "@/lib/utils";
import { useStore } from "@/lib/store";
import {
  Heart,
  ShoppingCart,
  ShieldCheck,
  Truck,
  ChevronDown,
  ChevronRight,
  Minus,
  Plus,
  Check,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [openAccordion, setOpenAccordion] = useState<string>("desc");

  const { addToCart, toggleWishlist, isWishlisted } = useStore();

  const fetchProductDetail = useCallback(async () => {
    if (!slug) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/products/${slug}`);
      if (!res.ok) {
        setProduct(null);
        return;
      }
      const data = await res.json();
      const p: Product = data.product;
      setProduct(p);
      setSelectedImage(p.image);
      if (p.sizes && p.sizes.length > 0) setSelectedSize(p.sizes[0]);
      if (p.colors && p.colors.length > 0) setSelectedColor(p.colors[0]);

      // Fetch related products in same category
      const relRes = await fetch(`/api/products?category=${encodeURIComponent(p.category)}`);
      const relData = await relRes.json();
      const filtered = (relData.products as Product[]).filter((item) => item.id !== p.id).slice(0, 4);
      setRelatedProducts(filtered);
    } catch {
      setProduct(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchProductDetail();
  }, [fetchProductDetail]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="mx-auto max-w-8xl px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 animate-pulse">
          <div className="aspect-[4/5] bg-cream rounded" />
          <div className="space-y-4">
            <div className="h-8 bg-cream w-3/4 rounded" />
            <div className="h-4 bg-cream w-1/4 rounded" />
            <div className="h-6 bg-cream w-1/3 rounded" />
            <div className="h-20 bg-cream rounded" />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="mx-auto max-w-8xl px-4 md:px-8 py-20 text-center space-y-4">
          <h1 className="text-2xl font-bold text-ink">Product Not Found</h1>
          <p className="text-sm text-ink/60">
            The product you are looking for does not exist or has been removed.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2.5 bg-ink text-paper text-xs font-semibold rounded"
          >
            Back to Shop
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const discount = discountPercent(product.price, product.compareAtPrice);
  const wishlisted = isWishlisted(product.id);
  const images = product.galleryImages || [product.image, product.hoverImage].filter(Boolean) as string[];

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    router.push("/checkout");
  };

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-8xl px-4 md:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-ink/60 mb-6">
          <Link href="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} />
          <Link href={`/?category=${encodeURIComponent(product.category)}`} className="hover:text-ink">
            {product.category}
          </Link>
          <ChevronRight size={12} />
          <span className="text-ink font-medium truncate max-w-[200px] sm:max-w-none">
            {product.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto shrink-0">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={cn(
                      "relative h-20 w-20 shrink-0 overflow-hidden rounded bg-cream border transition-all",
                      selectedImage === img ? "border-ink ring-1 ring-ink" : "border-line opacity-70 hover:opacity-100"
                    )}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="relative flex-1 aspect-[4/5] bg-cream rounded-lg overflow-hidden border border-line">
              {discount !== null && (
                <span className="absolute top-3 left-3 z-10 rounded bg-ink px-2.5 py-1 text-xs font-bold text-paper">
                  -{discount}% OFF
                </span>
              )}
              {!product.inStock && (
                <span className="absolute top-3 right-3 z-10 rounded bg-paper/90 px-3 py-1 text-xs font-semibold text-ink">
                  Sold Out
                </span>
              )}
              <Image
                src={selectedImage || product.image}
                alt={product.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Info & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ink/50">
                {product.category}
              </span>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                {product.title}
              </h1>

              <div className="mt-2 flex items-center gap-3">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size={16} />
                <span className="text-xs text-green-700 font-medium flex items-center gap-1">
                  <Check size={14} /> In Stock
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 pb-4 border-b border-line">
              <span className="text-2xl font-black text-ink">
                {formatPKR(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-base text-ink/40 line-through">
                  {formatPKR(product.compareAtPrice)}
                </span>
              )}
            </div>

            {/* Description intro */}
            {product.description && (
              <p className="text-sm leading-relaxed text-ink/70">
                {product.description}
              </p>
            )}

            {/* Color variants */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-ink block mb-2">
                  Color
                </label>
                <div className="flex items-center gap-2">
                  {product.colors.map((hex) => (
                    <button
                      key={hex}
                      onClick={() => setSelectedColor(hex)}
                      style={{ backgroundColor: hex }}
                      className={cn(
                        "h-8 w-8 rounded-full border border-line transition-transform",
                        selectedColor === hex ? "ring-2 ring-ink ring-offset-2 scale-110" : "hover:scale-105"
                      )}
                      aria-label={`Color option ${hex}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">
                    Select Size: <strong>{selectedSize}</strong>
                  </label>
                  <button
                    onClick={() => setOpenAccordion("size-chart")}
                    className="text-xs text-ink/60 underline hover:text-ink"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={cn(
                        "py-2.5 text-xs font-bold rounded border transition-colors",
                        selectedSize === sz
                          ? "bg-ink text-paper border-ink"
                          : "bg-paper text-ink border-line hover:border-ink"
                      )}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Counter & Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold uppercase tracking-wider text-ink">
                  Quantity:
                </label>
                <div className="flex items-center border border-line rounded">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-ink/70 hover:text-ink"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 text-sm font-semibold text-ink">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-ink/70 hover:text-ink"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
                <button
                  onClick={() => addToCart(product, quantity, selectedSize, selectedColor)}
                  disabled={!product.inStock}
                  className="sm:col-span-8 flex items-center justify-center gap-2 py-3.5 px-6 bg-ink text-paper text-xs font-bold uppercase tracking-wider rounded hover:bg-ink/90 disabled:opacity-50 transition-colors"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="sm:col-span-4 flex items-center justify-center gap-2 py-3.5 px-4 border border-line text-xs font-semibold rounded hover:bg-cream transition-colors"
                >
                  <Heart
                    size={16}
                    className={wishlisted ? "fill-sale text-sale" : "text-ink"}
                  />
                  {wishlisted ? "Saved" : "Wishlist"}
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="w-full py-3.5 px-6 bg-sale text-paper text-xs font-bold uppercase tracking-wider rounded hover:bg-sale/90 disabled:opacity-50 transition-colors shadow-sm"
              >
                Buy It Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-line text-xs text-ink/70">
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-ink shrink-0" />
                <span>Free shipping nationwide over Rs. 5,000</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-ink shrink-0" />
                <span>100% Original MCD Performance Gear</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="divide-y divide-line border-b border-line text-sm">
              {/* Features & Specs */}
              <div>
                <button
                  onClick={() => setOpenAccordion((prev) => (prev === "desc" ? "" : "desc"))}
                  className="w-full py-3.5 flex justify-between items-center font-bold text-ink"
                >
                  Features & Specifications
                  <ChevronDown
                    size={16}
                    className={cn("transition-transform", openAccordion === "desc" && "rotate-180")}
                  />
                </button>
                {openAccordion === "desc" && (
                  <div className="pb-4 space-y-3 text-xs text-ink/70 animate-fade-in">
                    {product.features && (
                      <ul className="list-disc pl-4 space-y-1">
                        {product.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    )}
                    {product.specifications && (
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-line">
                        {Object.entries(product.specifications).map(([k, v]) => (
                          <div key={k}>
                            <span className="font-semibold text-ink">{k}:</span> {v}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Size Guide Accordion */}
              <div>
                <button
                  onClick={() => setOpenAccordion((prev) => (prev === "size-chart" ? "" : "size-chart"))}
                  className="w-full py-3.5 flex justify-between items-center font-bold text-ink"
                >
                  Size Guide & Fit
                  <ChevronDown
                    size={16}
                    className={cn("transition-transform", openAccordion === "size-chart" && "rotate-180")}
                  />
                </button>
                {openAccordion === "size-chart" && (
                  <div className="pb-4 text-xs text-ink/70 animate-fade-in">
                    <table className="w-full border-collapse border border-line text-center">
                      <thead>
                        <tr className="bg-cream text-ink font-semibold">
                          <th className="border border-line p-1.5">Size</th>
                          <th className="border border-line p-1.5">Chest (in)</th>
                          <th className="border border-line p-1.5">Waist (in)</th>
                          <th className="border border-line p-1.5">Height (ft)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-line p-1.5 font-bold">S</td><td className="border border-line p-1.5">34-36</td><td className="border border-line p-1.5">28-30</td><td className="border border-line p-1.5">5&apos;3&quot; - 5&apos;6&quot;</td></tr>
                        <tr><td className="border border-line p-1.5 font-bold">M</td><td className="border border-line p-1.5">38-40</td><td className="border border-line p-1.5">32-34</td><td className="border border-line p-1.5">5&apos;7&quot; - 5&apos;10&quot;</td></tr>
                        <tr><td className="border border-line p-1.5 font-bold">L</td><td className="border border-line p-1.5">42-44</td><td className="border border-line p-1.5">36-38</td><td className="border border-line p-1.5">5&apos;11&quot; - 6&apos;1&quot;</td></tr>
                        <tr><td className="border border-line p-1.5 font-bold">XL</td><td className="border border-line p-1.5">46-48</td><td className="border border-line p-1.5">40-42</td><td className="border border-line p-1.5">6&apos;1&quot; - 6&apos;3&quot;</td></tr>
                        <tr><td className="border border-line p-1.5 font-bold">2XL</td><td className="border border-line p-1.5">50-52</td><td className="border border-line p-1.5">44-46</td><td className="border border-line p-1.5">6&apos;3&quot;+</td></tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Shipping & Returns Accordion */}
              <div>
                <button
                  onClick={() => setOpenAccordion((prev) => (prev === "shipping" ? "" : "shipping"))}
                  className="w-full py-3.5 flex justify-between items-center font-bold text-ink"
                >
                  Shipping & Easy Returns
                  <ChevronDown
                    size={16}
                    className={cn("transition-transform", openAccordion === "shipping" && "rotate-180")}
                  />
                </button>
                {openAccordion === "shipping" && (
                  <div className="pb-4 text-xs text-ink/70 space-y-2 animate-fade-in">
                    <p>• Dispatch time: Within 24-48 business hours.</p>
                    <p>• Delivery: 3 to 5 business days across Pakistan.</p>
                    <p>• Returns: Hassle-free 14-day exchange or refund guarantee.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-10 border-t border-line">
            <h2 className="text-xl font-bold tracking-tight text-ink mb-6">
              You May Also Like
            </h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
