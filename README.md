# MCD Store — Sports E-Commerce Collection Page

A production-ready replica of an MCD Sports-style collection page, built with
Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons. Deploys to
Vercel with zero extra configuration.

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **API:** Next.js Route Handlers (`/app/api/products/route.ts`)
- **State:** React Context for cart/wishlist (`lib/store.tsx`)
- **Data:** Typed mock dataset (`lib/data.ts`) shaped 1:1 like a future
  Prisma `Product` model

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset auto-detects as Next.js — no config needed.
4. Deploy.

## Project structure

```
app/
  layout.tsx          Root layout, font, StoreProvider, MobileNav
  page.tsx             Collection page: fetches products, manages sort/grid state
  globals.css
  api/
    products/route.ts  GET /api/products?sort=&category=
components/
  Navbar.tsx            Hamburger, logo, search/account/wishlist/cart icons
  FilterBar.tsx         Filter button, 1/2/3/4-col grid toggle, sort dropdown
  ProductGrid.tsx        Responsive grid + loading skeleton + empty state
  ProductCard.tsx         Discount badge, hover image swap, add-to-cart bar
  StarRating.tsx
  Footer.tsx             4-column footer
  MobileNav.tsx           Sticky bottom nav (Cart, Account, Call, WhatsApp)
lib/
  types.ts               Product, SortKey, GridColumns, CartLine
  data.ts                 Mock product dataset (Prisma-shaped)
  utils.ts                formatPKR, sortProducts, discountPercent
  store.tsx                Cart/wishlist context provider
```

## Swapping in a real database

`lib/data.ts` exports `getProducts()` and `getProductBySlug()`. To move to
Postgres via Prisma:

1. `npx prisma init`, then define a `Product` model matching `lib/types.ts`.
2. Replace the bodies of `getProducts()` / `getProductBySlug()` with
   `prisma.product.findMany()` / `prisma.product.findUnique()`.
3. Nothing else changes — `app/api/products/route.ts` and every component
   already consume the `Product` type, not the mock array directly.

## Notes

- Product photography uses royalty-free Unsplash URLs as placeholders — swap
  `image` / `hoverImage` in `lib/data.ts` for your own product photos (or a
  CDN/S3 bucket) before shipping.
- Cart and wishlist state is in-memory (React Context) for this demo. For
  persistence across sessions, swap `lib/store.tsx` for a server-backed cart
  (e.g. a `cart` table + route handlers) or `localStorage`.
- WhatsApp and phone numbers in `Footer.tsx` / `MobileNav.tsx` are
  placeholders — update them to your own.
