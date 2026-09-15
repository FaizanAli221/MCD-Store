"use client";

import type { ReactNode } from "react";
import { ShoppingCart, User, Phone } from "lucide-react";
import { useStore } from "@/lib/store";

const WHATSAPP_NUMBER = "923264382910";

export default function MobileNav() {
  const { cartCount } = useStore();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-line bg-paper py-2 md:hidden"
      aria-label="Quick actions"
    >
      <NavItem icon={<ShoppingCart size={20} />} label="Cart" badge={cartCount} href="#" />
      <NavItem icon={<User size={20} />} label="Account" href="#" />
      <NavItem icon={<Phone size={20} />} label="Call Us" href="tel:+923264382910" />
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 px-3 text-[11px] text-ink"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] text-paper">
          <WhatsAppIcon />
        </span>
        Whatsapp
      </a>
    </nav>
  );
}

function NavItem({
  icon,
  label,
  href,
  badge,
}: {
  icon: ReactNode;
  label: string;
  href: string;
  badge?: number;
}) {
  return (
    <a href={href} className="relative flex flex-col items-center gap-1 px-3 text-[11px] text-ink">
      <span className="relative">
        {icon}
        {!!badge && badge > 0 && (
          <span className="absolute -top-1.5 -right-2 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-ink px-1 text-[9px] font-semibold leading-none text-paper">
            {badge}
          </span>
        )}
      </span>
      {label}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.42-.71-2.9-1.15-4.76-4.08-4.9-4.27-.14-.19-1.17-1.56-1.17-2.98 0-1.42.75-2.11 1.01-2.4.27-.28.58-.35.78-.35.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.61 2 1.11.99 2.04 1.3 2.33 1.44.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.63.77 1.91.91.29.14.48.21.55.33.07.12.07.7-.17 1.38z" />
    </svg>
  );
}
