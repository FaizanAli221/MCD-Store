import { Product, SortKey } from "./types";

export function formatPKR(amount: number): string {
  return `Rs.${amount.toLocaleString("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function discountPercent(price: number, compareAtPrice?: number | null): number | null {
  if (!compareAtPrice || compareAtPrice <= price) return null;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

export function sortProducts(products: Product[], sortKey: SortKey): Product[] {
  const list = [...products];
  switch (sortKey) {
    case "alpha-asc":
      return list.sort((a, b) => a.title.localeCompare(b.title));
    case "alpha-desc":
      return list.sort((a, b) => b.title.localeCompare(a.title));
    case "price-asc":
      return list.sort((a, b) => a.price - b.price);
    case "price-desc":
      return list.sort((a, b) => b.price - a.price);
    case "newest":
      return list.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "best-selling":
      return list.sort((a, b) => {
        const rankA = a.bestSellerRank ?? Infinity;
        const rankB = b.bestSellerRank ?? Infinity;
        return rankA - rankB;
      });
    default:
      return list;
  }
}

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "alpha-asc", label: "Alphabetically, A-Z" },
  { value: "alpha-desc", label: "Alphabetically, Z-A" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "best-selling", label: "Best Selling" },
  { value: "newest", label: "Newest" },
];

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
