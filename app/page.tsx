"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { Product, GridColumns, SortKey, ProductsApiResponse } from "@/lib/types";

function CollectionContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") || "all";
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState<GridColumns>(4);
  const [sort, setSort] = useState<SortKey>("best-selling");
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(
    async (sortKey: SortKey, category: string, searchQuery: string) => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        params.set("sort", sortKey);
        if (category && category !== "all") {
          params.set("category", category);
        }
        if (searchQuery.trim()) {
          params.set("search", searchQuery.trim());
        }

        const res = await fetch(`/api/products?${params.toString()}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch products (${res.status})`);
        }

        const data: ProductsApiResponse = await res.json();
        setProducts(data.products ?? []);
        if (data.categories && data.categories.length > 0) {
          setCategories(data.categories);
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Something went wrong while fetching products";
        setError(message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchProducts(sort, activeCategory, search);
  }, [sort, activeCategory, search, fetchProducts]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    const params = new URLSearchParams(window.location.search);
    if (cat === "all") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    const queryString = params.toString();
    router.replace(queryString ? `/?${queryString}` : "/", { scroll: false });
  };

  const getHeading = () => {
    if (search.trim()) return `Results for "${search.trim()}"`;
    if (activeCategory !== "all") return activeCategory;
    return "All Products";
  };

  return (
    <>
      <Navbar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleCategoryChange}
        search={search}
        onSearchChange={setSearch}
      />

      <main>
        <div className="mx-auto max-w-8xl px-4 md:px-8 pt-6 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-ink">{getHeading()}</h1>
          {activeCategory !== "all" && (
            <button
              onClick={() => handleCategoryChange("all")}
              className="text-xs text-ink/60 hover:text-ink underline"
            >
              View All
            </button>
          )}
        </div>

        <FilterBar
          columns={columns}
          onColumnsChange={setColumns}
          sort={sort}
          onSortChange={setSort}
          resultCount={products.length}
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          searchQuery={search}
          onClearSearch={() => setSearch("")}
        />

        {error ? (
          <div className="mx-auto max-w-8xl px-4 md:px-8 py-16 text-center">
            <p className="text-sale font-medium text-sm">{error}</p>
            <button
              onClick={() => fetchProducts(sort, activeCategory, search)}
              className="mt-4 px-4 py-2 text-xs bg-ink text-paper rounded font-medium"
            >
              Retry
            </button>
          </div>
        ) : (
          <ProductGrid products={products} columns={columns} loading={loading} />
        )}
      </main>

      <Footer />
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper" />}>
      <CollectionContent />
    </Suspense>
  );
}
