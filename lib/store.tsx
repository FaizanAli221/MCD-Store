"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { Product } from "./types";

export type CartItem = {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
};

type StoreContextValue = {
  cart: Record<string, CartItem>; // item key -> CartItem
  wishlist: Set<string>;
  cartCount: number;
  wishlistCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number, selectedSize?: string, selectedColor?: string) => void;
  removeFromCart: (itemKey: string) => void;
  updateQuantity: (itemKey: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("mcd_cart");
      const savedWishlist = localStorage.getItem("mcd_wishlist");
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedWishlist) setWishlist(new Set(JSON.parse(savedWishlist)));
    } catch {
      // Ignore localStorage errors
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem("mcd_cart", JSON.stringify(cart));
      localStorage.setItem("mcd_wishlist", JSON.stringify(Array.from(wishlist)));
    } catch {
      // Ignore localStorage errors
    }
  }, [cart, wishlist, mounted]);

  const addToCart = useCallback(
    (product: Product, quantity = 1, selectedSize = "M", selectedColor?: string) => {
      const itemKey = `${product.id}-${selectedSize}-${selectedColor || "default"}`;
      setCart((prev) => {
        const existing = prev[itemKey];
        const currentQty = existing ? existing.quantity : 0;
        return {
          ...prev,
          [itemKey]: {
            product,
            quantity: currentQty + quantity,
            selectedSize,
            selectedColor: selectedColor || product.colors?.[0],
          },
        };
      });
      setIsCartOpen(true);
    },
    []
  );

  const removeFromCart = useCallback((itemKey: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[itemKey];
      return next;
    });
  }, []);

  const updateQuantity = useCallback((itemKey: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemKey);
      return;
    }
    setCart((prev) => {
      if (!prev[itemKey]) return prev;
      return {
        ...prev,
        [itemKey]: { ...prev[itemKey], quantity },
      };
    });
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart({});
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) next.delete(productId);
      else next.add(productId);
      return next;
    });
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => wishlist.has(productId),
    [wishlist]
  );

  const cartCount = useMemo(
    () => Object.values(cart).reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const value: StoreContextValue = {
    cart,
    wishlist,
    cartCount,
    wishlistCount: wishlist.size,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleWishlist,
    isWishlisted,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within a StoreProvider");
  return ctx;
}
