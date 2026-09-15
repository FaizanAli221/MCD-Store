import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";

const CUSTOMER_CARE = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Returns Policy", href: "/shipping-returns" },
  { name: "Shipping Policy", href: "/shipping-returns" },
];

const MY_ACCOUNT = [
  { name: "Shop All", href: "/" },
  { name: "Shopping Cart", href: "/cart" },
  { name: "Wishlist", href: "/wishlist" },
  { name: "Checkout", href: "/checkout" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-cream border-t border-line">
      <div className="mx-auto max-w-8xl px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase">GET IN TOUCH</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink/70">
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-ink" />
                <a href="mailto:info@mcd.com.pk" className="hover:text-ink transition-colors">
                  info@mcd.com.pk
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-ink" />
                <a href="tel:+923264382910" className="hover:text-ink transition-colors">
                  +92 326 4382910
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-ink" />
                11am-6pm Mon-Fri
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase">Customer Care</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/70">
              {CUSTOMER_CARE.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-ink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/70">
              {MY_ACCOUNT.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-ink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase">ABOUT MCD SPORTS</h4>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              MCD Sports delivers unmatched quality, innovation, and superior craftsmanship in every piece of athletic gear. We don&apos;t just provide gear, we fuel champions.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-xs text-ink/50">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-ink">MCD Sports</span>. All rights reserved.
      </div>
    </footer>
  );
}
