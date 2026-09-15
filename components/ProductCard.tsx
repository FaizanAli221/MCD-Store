"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Product, GridColumns } from "@/lib/types";
import { formatPKR, discountPercent, cn } from "@/lib/utils";
import { useStore } from "@/lib/store";
import StarRating from "./StarRating";

export default function ProductCard({
  product,
  columns,
}: {
  product: Product;
  columns: GridColumns;
}) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const discount = discountPercent(product.price, product.compareAtPrice);
  const wishlisted = isWishlisted(product.id);
  const titleSize = columns >= 4 ? "text-sm" : "text-base";

  return (
    <div className="group flex flex-col justify-between">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream border border-line rounded">
        {discount !== null && (
          <span className="absolute left-2 top-2 z-10 rounded bg-ink px-2 py-1 text-[11px] font-semibold text-paper">
            -{discount}%
          </span>
        )}
        {!product.inStock && (
          <span className="absolute right-2 top-2 z-10 rounded bg-paper/90 px-2 py-1 text-[11px] font-medium text-ink">
            Sold out
          </span>
        )}

        <button
          onClick={() => toggleWishlist(product.id)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="absolute right-2 bottom-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100 shadow-sm"
        >
          <Heart
            size={16}
            className={wishlisted ? "fill-sale text-sale" : "text-ink"}
          />
        </button>

        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className={cn(
              "object-cover transition-opacity duration-300",
              product.hoverImage && "group-hover:opacity-0"
            )}
          />
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </Link>

        {/* Hover action bar */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full bg-ink transition-transform duration-200 group-hover:translate-y-0 z-20">
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="flex w-full items-center justify-center gap-2 py-2.5 text-xs font-semibold text-paper hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
          >
            <ShoppingCart size={14} />
            {product.inStock ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <Link
          href={`/product/${product.slug}`}
          className={cn("font-medium leading-snug text-ink hover:underline block line-clamp-2", titleSize)}
        >
          {product.title}
        </Link>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <div className="flex items-center gap-2 pt-0.5">
          <span className={cn("font-semibold", discount !== null ? "text-sale" : "text-ink")}>
            {formatPKR(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-ink/40 line-through">
              {formatPKR(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
