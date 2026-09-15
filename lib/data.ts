import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "women-half-zip-hoodie-full-sauna-suit",
    title: "MCD Women Half Zip Hoodie Full Sauna Suit",
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80",
    price: 6500,
    compareAtPrice: null,
    rating: 5,
    reviewCount: 29,
    category: "Sauna Suits",
    colors: ["#1f6f6f", "#c23b6a"],
    inStock: true,
    createdAt: "2026-08-20T00:00:00.000Z",
    bestSellerRank: 4,
  },
  {
    id: "p2",
    slug: "3-0-weight-loss-sauna-suit-blue",
    title: "MCD 3.0 Weight Loss Sauna Suit Blue",
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80",
    price: 5995,
    compareAtPrice: 6395,
    rating: 5,
    reviewCount: 25,
    category: "Sauna Suits",
    colors: ["#1c2f6e"],
    inStock: true,
    createdAt: "2026-07-11T00:00:00.000Z",
    bestSellerRank: 8,
  },
  {
    id: "p3",
    slug: "3-0-weight-loss-sauna-suit",
    title: "MCD 3.0 Weight Loss Sauna Suit",
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    price: 5995,
    compareAtPrice: 6395,
    rating: 5,
    reviewCount: 1034,
    category: "Sauna Suits",
    colors: ["#4b5d3a"],
    inStock: true,
    createdAt: "2026-02-02T00:00:00.000Z",
    bestSellerRank: 1,
  },
  {
    id: "p4",
    slug: "pro-thermal-sauna-jacket",
    title: "MCD Pro Thermal Sauna Jacket",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
    price: 3995,
    compareAtPrice: 4495,
    rating: 4,
    reviewCount: 62,
    category: "Jackets",
    colors: ["#111111"],
    inStock: true,
    createdAt: "2026-06-01T00:00:00.000Z",
    bestSellerRank: 12,
  },
  {
    id: "p5",
    slug: "core-training-tracksuit",
    title: "MCD Core Training Tracksuit",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
    price: 7200,
    compareAtPrice: null,
    rating: 4,
    reviewCount: 18,
    category: "Tracksuits",
    colors: ["#222222", "#7a1f1f"],
    inStock: true,
    createdAt: "2026-08-29T00:00:00.000Z",
    bestSellerRank: null,
  },
  {
    id: "p6",
    slug: "featherweight-running-jacket",
    title: "MCD Featherweight Running Jacket",
    image:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    price: 4850,
    compareAtPrice: 5300,
    rating: 5,
    reviewCount: 41,
    category: "Jackets",
    colors: ["#0f3d5c"],
    inStock: false,
    createdAt: "2026-05-14T00:00:00.000Z",
    bestSellerRank: 20,
  },
  {
    id: "p7",
    slug: "sauna-suit-pro-max-black",
    title: "MCD Sauna Suit Pro Max Black",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    price: 6995,
    compareAtPrice: 7495,
    rating: 5,
    reviewCount: 210,
    category: "Sauna Suits",
    colors: ["#111111"],
    inStock: true,
    createdAt: "2026-01-09T00:00:00.000Z",
    bestSellerRank: 2,
  },
  {
    id: "p8",
    slug: "vented-training-hoodie",
    title: "MCD Vented Training Hoodie",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
    price: 3450,
    compareAtPrice: null,
    rating: 4,
    reviewCount: 55,
    category: "Hoodies",
    colors: ["#5b5b5b", "#111111"],
    inStock: true,
    createdAt: "2026-04-22T00:00:00.000Z",
    bestSellerRank: 15,
  },
];

export function getProducts(): Product[] {
  return PRODUCTS;
}

export const CATEGORIES = Array.from(
  new Set(PRODUCTS.map((p) => p.category))
).sort();
