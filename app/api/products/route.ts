import { NextRequest, NextResponse } from "next/server";
import { getProducts, CATEGORIES } from "@/lib/data";
import { sortProducts } from "@/lib/utils";
import { SortKey } from "@/lib/types";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sort = (searchParams.get("sort") as SortKey) || "best-selling";
  const category = searchParams.get("category");
  const search = searchParams.get("search")?.trim().toLowerCase();

  let products = getProducts();

  if (category && category.toLowerCase() !== "all") {
    products = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search)
    );
  }

  products = sortProducts(products, sort);

  return NextResponse.json({
    products,
    count: products.length,
    categories: CATEGORIES,
  });
}
