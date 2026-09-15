"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    category: "Ordering & Delivery",
    questions: [
      {
        q: "What is the estimated delivery time for my order?",
        a: "All orders across Pakistan are processed within 24 hours. Standard delivery takes 3 to 5 business days to arrive at your address.",
      },
      {
        q: "Do you offer Cash on Delivery (COD)?",
        a: "Yes! Cash on Delivery is available nationwide across Pakistan. You can pay cash directly to the courier when receiving your parcel.",
      },
      {
        q: "How can I track my parcel?",
        a: "Once your order dispatches, you will receive an SMS and email notification with your tracking number and tracking link.",
      },
    ],
  },
  {
    category: "Sauna Suits & Care Instructions",
    questions: [
      {
        q: "How do I choose the correct size for a Sauna Suit?",
        a: "We recommend checking our detailed Size Guide on the product page. If you plan to wear thick hoodies or layers underneath, you may consider sizing up one size.",
      },
      {
        q: "How should I wash and care for my MCD Sauna Suit?",
        a: "Hand wash cold with mild detergent after each workout. Hang to air dry away from direct sunlight. Do not machine wash, tumble dry, or iron.",
      },
      {
        q: "Is the sauna suit suitable for combat sports and sparring?",
        a: "Yes! MCD Sauna Suits feature heavy-duty reinforced triple stitching specifically built to handle intense grappling, bag work, and cardio without tearing.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return and exchange policy?",
        a: "We offer a 14-day hassle-free return and size exchange guarantee. Items must be unworn, unwashed, and in original packaging with tags intact.",
      },
      {
        q: "What if I receive a defective or wrong size item?",
        a: "If there is any issue with your parcel, contact customer service via WhatsApp (+92 326 4382910) or email (info@mcd.com.pk) and we will send a free replacement.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "0-0": true });

  const toggleFAQ = (catIdx: number, qIdx: number) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 md:px-8 py-12 space-y-10">
        <div className="text-center space-y-3">
          <HelpCircle size={36} className="mx-auto text-ink" />
          <h1 className="text-3xl font-bold tracking-tight text-ink">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-ink/70">
            Everything you need to know about MCD Sports gear, delivery, sizing, and returns.
          </p>
        </div>

        <div className="space-y-10">
          {FAQS.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h2 className="text-base font-bold uppercase tracking-wider text-ink border-b border-line pb-2">
                {cat.category}
              </h2>

              <div className="divide-y divide-line border border-line rounded-lg bg-paper overflow-hidden">
                {cat.questions.map((faq, qIdx) => {
                  const key = `${catIdx}-${qIdx}`;
                  const isOpen = !!openItems[key];
                  return (
                    <div key={qIdx}>
                      <button
                        onClick={() => toggleFAQ(catIdx, qIdx)}
                        className="w-full p-4 text-left flex justify-between items-center font-semibold text-sm text-ink hover:bg-cream/50 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          size={16}
                          className={cn("transition-transform text-ink/60 shrink-0 ml-4", isOpen && "rotate-180")}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs leading-relaxed text-ink/70 animate-fade-in">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
