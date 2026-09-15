"use client";

import Link from "next/link";
import { Menu, Search, User, Heart, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/lib/store";

type Props = {
  categories?: string[];
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
  search?: string;
  onSearchChange?: (search: string) => void;
};

export default function Navbar({
  categories = [],
  activeCategory = "all",
  onSelectCategory,
  search = "",
  onSearchChange,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, wishlistCount, setIsCartOpen } = useStore();

  const handleCategoryClick = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-line">
      <div className="mx-auto max-w-8xl px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 -ml-2 text-ink flex items-center gap-2"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
            <span className="hidden md:inline text-xs font-semibold uppercase tracking-wider">
              Menu
            </span>
          </button>

          <Link
            href="/"
            onClick={(e) => {
              if (onSelectCategory) {
                e.preventDefault();
                handleCategoryClick("all");
              }
            }}
            className="absolute left-1/2 -translate-x-1/2 font-black tracking-tighter text-2xl select-none"
            aria-label="MCD Sports home"
          >
            MCD
          </Link>

          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((prev) => !prev)}
              className="p-1 text-ink hover:opacity-60 transition-opacity"
            >
              <Search size={20} />
            </button>
            <Link
              href="/about"
              aria-label="About Us"
              className="hidden sm:inline text-xs font-semibold hover:opacity-60 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/wishlist"
              aria-label={`Wishlist, ${wishlistCount} items`}
              className="relative p-1 text-ink hover:opacity-60 transition-opacity"
            >
              <Heart size={20} />
              <CountBadge count={wishlistCount} />
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Cart, ${cartCount} items`}
              className="relative p-1 text-ink hover:opacity-60 transition-opacity"
            >
              <ShoppingCart size={20} />
              <CountBadge count={cartCount} />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="py-3 border-t border-line animate-fade-in">
            <div className="relative flex items-center">
              <Search size={16} className="absolute left-3 text-ink/50" />
              <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Search products, sauna suits, hoodies..."
                className="w-full bg-cream py-2 pl-9 pr-8 text-sm text-ink placeholder:text-ink/40 rounded focus:outline-none border border-line"
                autoFocus
              />
              {search && (
                <button
                  onClick={() => onSearchChange?.("")}
                  className="absolute right-3 text-xs text-ink/60 hover:text-ink"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-paper animate-fade-in">
          <ul className="mx-auto max-w-8xl px-4 md:px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ink/50 block mb-2">
                Shop Collections
              </span>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleCategoryClick("all")}
                    className={`block text-left py-1 text-sm ${
                      activeCategory === "all" ? "text-ink font-bold" : "text-ink/80 hover:text-ink"
                    }`}
                  >
                    Shop All Products
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className={`block text-left py-1 text-sm ${
                        activeCategory.toLowerCase() === cat.toLowerCase()
                          ? "text-ink font-bold"
                          : "text-ink/80 hover:text-ink"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ink/50 block mb-2">
                Navigation
              </span>
              <ul className="space-y-1 text-sm text-ink/80">
                <li>
                  <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-ink block py-1">
                    Home / Store
                  </Link>
                </li>
                <li>
                  <Link href="/cart" onClick={() => setMenuOpen(false)} className="hover:text-ink block py-1">
                    Shopping Cart ({cartCount})
                  </Link>
                </li>
                <li>
                  <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="hover:text-ink block py-1">
                    My Wishlist ({wishlistCount})
                  </Link>
                </li>
                <li>
                  <Link href="/checkout" onClick={() => setMenuOpen(false)} className="hover:text-ink block py-1">
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ink/50 block mb-2">
                Information & Help
              </span>
              <ul className="space-y-1 text-sm text-ink/80">
                <li>
                  <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-ink block py-1">
                    About MCD Sports
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-ink block py-1">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" onClick={() => setMenuOpen(false)} className="hover:text-ink block py-1">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link href="/shipping-returns" onClick={() => setMenuOpen(false)} className="hover:text-ink block py-1">
                    Shipping & Returns Policy
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}

function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-ink px-1 text-[10px] font-semibold leading-none text-paper">
      {count}
    </span>
  );
}
