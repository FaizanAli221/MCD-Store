export type Product = {
  id: string;
  slug: string;
  title: string;
  image: string;
  hoverImage?: string;
  price: number; // current/sale price, in PKR (smallest display unit = whole rupees)
  compareAtPrice?: number | null; // original price, shown struck through
  rating: number; // 0-5
  reviewCount: number;
  category: string;
  colors?: string[];
  inStock: boolean;
  createdAt: string; // ISO date, used for "Newest" sorting
  bestSellerRank?: number | null; // lower = better seller, null = not a best seller
};

export type SortKey =
  | "alpha-asc"
  | "alpha-desc"
  | "price-asc"
  | "price-desc"
  | "best-selling"
  | "newest";

export type GridColumns = 1 | 2 | 3 | 4;

export type ProductsApiResponse = {
  products: Product[];
  count: number;
  categories: string[];
};
