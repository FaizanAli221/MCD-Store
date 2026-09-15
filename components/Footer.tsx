import { Mail, Phone, Clock } from "lucide-react";

const CUSTOMER_CARE = [
  "Privacy Policy",
  "Returns Policy",
  "Terms and Conditions",
  "About Us",
  "Contact Us",
  "FAQ",
  "Terms of Service",
  "Refund policy",
];

const MY_ACCOUNT = ["Cart", "Shop", "Wishlist"];

export default function Footer() {
  return (
    <footer className="mt-20 bg-cream">
      <div className="mx-auto max-w-8xl px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="font-bold text-sm tracking-wide">GET IN TOUCH</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink/70">
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@mcd.com.pk" className="hover:text-ink">
                  info@mcd.com.pk
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+923264382910" className="hover:text-ink">
                  +92 326 4382910
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0" />
                11am-6pm Mon-Fri
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wide">Customer Care</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink/70">
              {CUSTOMER_CARE.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-ink">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wide">My Account</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink/70">
              {MY_ACCOUNT.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-ink">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wide">ABOUT</h4>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              MCD Sports are committed to delivering unmatched quality,
              innovation, and superior craftsmanship in every product. With a
              highly trained team of specialists, we ensure expert guidance
              and personalized solutions to meet our customers&apos; unique
              needs. At MCD Sports, we don&apos;t just provide gear, we fuel
              champions.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-xs text-ink/50">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-ink">MCD Sports</span>
      </div>
    </footer>
  );
}
