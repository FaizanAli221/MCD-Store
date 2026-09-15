import { Product, GridColumns } from "@/lib/types";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

const GRID_CLASS: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
};

export default function ProductGrid({
  products,
  columns,
  loading,
}: {
  products: Product[];
  columns: GridColumns;
  loading?: boolean;
}) {
  if (loading) {
    return (
      <div className={cn("mx-auto max-w-8xl grid gap-x-4 gap-y-8 px-4 md:px-8", GRID_CLASS[columns])}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-[3/4] bg-cream" />
            <div className="mt-3 h-4 w-3/4 bg-cream" />
            <div className="mt-2 h-3 w-1/2 bg-cream" />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="mx-auto max-w-8xl px-4 md:px-8 py-20 text-center">
        <p className="text-sm text-ink/60">No products match this filter yet.</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mx-auto max-w-8xl grid gap-x-4 gap-y-8 px-4 md:px-8 animate-fade-in",
        GRID_CLASS[columns]
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} columns={columns} />
      ))}
    </div>
  );
}
