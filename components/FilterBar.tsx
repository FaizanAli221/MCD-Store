"use client";

import { useState } from "react";
import { ListFilter, ChevronDown, X } from "lucide-react";
import { GridColumns, SortKey } from "@/lib/types";
import { SORT_OPTIONS, cn } from "@/lib/utils";

type Props = {
  columns: GridColumns;
  onColumnsChange: (cols: GridColumns) => void;
  sort: SortKey;
  onSortChange: (sort: SortKey) => void;
  resultCount: number;
  categories?: string[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  searchQuery?: string;
  onClearSearch?: () => void;
};

const COLUMN_OPTIONS: GridColumns[] = [1, 2, 3, 4];

export default function FilterBar({
  columns,
  onColumnsChange,
  sort,
  onSortChange,
  resultCount,
  categories = [],
  activeCategory = "all",
  onCategoryChange,
  searchQuery = "",
  onClearSearch,
}: Props) {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="mx-auto max-w-8xl px-4 md:px-8 py-4">
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setFilterOpen((prev) => !prev)}
          aria-expanded={filterOpen}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors px-3 py-1.5 rounded-full border",
            filterOpen || activeCategory !== "all"
              ? "border-ink bg-ink text-paper"
              : "border-line text-ink hover:border-ink"
          )}
        >
          <ListFilter size={16} />
          {activeCategory === "all" ? "Filter" : activeCategory}
        </button>

        <div className="hidden sm:flex items-center gap-1" role="group" aria-label="Grid columns">
          {COLUMN_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => onColumnsChange(n)}
              aria-pressed={columns === n}
              aria-label={`${n} column grid`}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded transition-colors",
                columns === n ? "bg-ink" : "bg-transparent hover:bg-cream"
              )}
            >
              <GridIcon count={n} active={columns === n} />
            </button>
          ))}
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortKey)}
            aria-label="Sort products"
            className="appearance-none cursor-pointer rounded-full border border-line bg-paper py-2 pl-4 pr-9 text-sm text-ink focus:outline-none"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink/60"
          />
        </div>
      </div>

      {filterOpen && (
        <div className="mt-3 p-4 rounded-lg bg-cream border border-line animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink/70">
              Categories
            </span>
            {activeCategory !== "all" && (
              <button
                onClick={() => onCategoryChange?.("all")}
                className="text-xs text-ink/60 hover:text-ink underline"
              >
                Reset
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange?.("all")}
              className={cn(
                "px-3 py-1.5 text-xs rounded-full transition-colors",
                activeCategory === "all"
                  ? "bg-ink text-paper font-medium"
                  : "bg-paper text-ink border border-line hover:border-ink"
              )}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange?.(cat)}
                className={cn(
                  "px-3 py-1.5 text-xs rounded-full transition-colors",
                  activeCategory.toLowerCase() === cat.toLowerCase()
                    ? "bg-ink text-paper font-medium"
                    : "bg-paper text-ink border border-line hover:border-ink"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-2 flex items-center justify-between text-xs text-ink/60">
        <span>{resultCount} {resultCount === 1 ? "product" : "products"}</span>
        {searchQuery && (
          <span className="flex items-center gap-1 bg-cream px-2 py-0.5 rounded-full">
            Searching &quot;{searchQuery}&quot;
            {onClearSearch && (
              <button onClick={onClearSearch} aria-label="Clear search" className="hover:text-ink">
                <X size={12} />
              </button>
            )}
          </span>
        )}
      </div>
    </div>
  );
}

function GridIcon({ count, active }: { count: number; active: boolean }) {
  const barColor = active ? "bg-paper" : "bg-ink";
  return (
    <span className="flex gap-[2px]">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={cn("h-4 w-[3px]", barColor)} />
      ))}
    </span>
  );
}
