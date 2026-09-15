import { Product } from "./types";

const DEFAULT_SIZES = ["S", "M", "L", "XL", "2XL"];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "women-half-zip-hoodie-full-sauna-suit",
    title: "MCD Women Half Zip Hoodie Full Sauna Suit",
    description:
      "Engineered specifically for maximum thermal reflection and rapid weight management. Features heavy-duty elastic cuffs, adjustable hood drawstring, and a smooth half-zip design for easy wearing.",
    features: [
      "Advanced thermal neoprene layer retains body heat",
      "Ergonomic active fit for unrestricted movement",
      "Windproof and waterproof outer barrier",
      "Zippered secure pockets for essentials",
    ],
    specifications: {
      Material: "100% High-Density Polymer & Neoprene Blend",
      Weight: "580g",
      Fit: "Athletic Slim Fit",
      Care: "Hand wash cold, air dry only",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80",
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
    ],
    price: 6500,
    compareAtPrice: null,
    rating: 5,
    reviewCount: 29,
    category: "Sauna Suits",
    colors: ["#1f6f6f", "#c23b6a"],
    inStock: true,
    createdAt: "2026-08-20T00:00:00.000Z",
    bestSellerRank: 4,
  },
  {
    id: "p2",
    slug: "3-0-weight-loss-sauna-suit-blue",
    title: "MCD 3.0 Weight Loss Sauna Suit Blue",
    description:
      "The MCD 3.0 represents the next generation in weight loss gear. Crafted with ultra-lightweight heat-trapping fabric, this suit accelerates perspiration during training sessions.",
    features: [
      "Lightweight non-rip synthetic material",
      "Elasticized cuffs, waist, and ankles lock heat inside",
      "Odour-resistant antibacterial treatment",
      "Reflective piping for low-light safety",
    ],
    specifications: {
      Material: "Ripstop Nylon with PU Thermal Inner Coating",
      Weight: "490g",
      Fit: "Relaxed Training Fit",
      Care: "Wipe down with damp cloth after use",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80",
    ],
    price: 5995,
    compareAtPrice: 6395,
    rating: 5,
    reviewCount: 25,
    category: "Sauna Suits",
    colors: ["#1c2f6e"],
    inStock: true,
    createdAt: "2026-07-11T00:00:00.000Z",
    bestSellerRank: 8,
  },
  {
    id: "p3",
    slug: "3-0-weight-loss-sauna-suit",
    title: "MCD 3.0 Weight Loss Sauna Suit",
    description:
      "Our best-selling signature sauna suit engineered for combat sports athletes, runners, and fitness enthusiasts pushing for peak condition.",
    features: [
      "Over 1,000+ 5-star customer reviews",
      "Triple-stitched reinforced seams",
      "Maximum sweat output technology",
      "Breathable underarm ventilation zones",
    ],
    specifications: {
      Material: "High-grade Silver PU Coated Polyester",
      Weight: "520g",
      Fit: "Standard Athletic Fit",
      Care: "Hand wash cold",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    ],
    price: 5995,
    compareAtPrice: 6395,
    rating: 5,
    reviewCount: 1034,
    category: "Sauna Suits",
    colors: ["#4b5d3a"],
    inStock: true,
    createdAt: "2026-02-02T00:00:00.000Z",
    bestSellerRank: 1,
  },
  {
    id: "p4",
    slug: "pro-thermal-sauna-jacket",
    title: "MCD Pro Thermal Sauna Jacket",
    description:
      "Designed as a standalone zip-up thermal jacket that can be worn casually or during heavy cardio sessions. Sleek matte black finish.",
    features: [
      "Full front zip with lock-in closure",
      "Waterproof chest pocket for mobile phones",
      "Scuba hood design locks warmth around head & neck",
    ],
    specifications: {
      Material: "Softshell Thermal Composite",
      Weight: "440g",
      Fit: "Slim Fit",
      Care: "Machine wash cold delicate",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
    ],
    price: 3995,
    compareAtPrice: 4495,
    rating: 4,
    reviewCount: 62,
    category: "Jackets",
    colors: ["#111111"],
    inStock: true,
    createdAt: "2026-06-01T00:00:00.000Z",
    bestSellerRank: 12,
  },
  {
    id: "p5",
    slug: "core-training-tracksuit",
    title: "MCD Core Training Tracksuit",
    description:
      "Complete 2-piece jacket and pants set for warmups, cool downs, and travel. Durable stretch fabric provides uncompromised flexibility.",
    features: [
      "2-piece matching set",
      "Zippered ankle gussets for quick shoe changes",
      "Moisture-wicking mesh lining",
    ],
    specifications: {
      Material: "Polyester-Elastane Blend",
      Weight: "650g",
      Fit: "Regular Fit",
      Care: "Machine wash warm",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80",
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
    ],
    price: 7200,
    compareAtPrice: null,
    rating: 4,
    reviewCount: 18,
    category: "Tracksuits",
    colors: ["#222222", "#7a1f1f"],
    inStock: true,
    createdAt: "2026-08-29T00:00:00.000Z",
    bestSellerRank: null,
  },
  {
    id: "p6",
    slug: "featherweight-running-jacket",
    title: "MCD Featherweight Running Jacket",
    description:
      "Ultra-thin packable windbreaker jacket designed for marathon runners and outdoor endurance athletes.",
    features: [
      "Packs down into its own zip chest pocket",
      "360-degree reflective accents",
      "DWR water-repellent coating",
    ],
    specifications: {
      Material: "100% Micro Ripstop Nylon",
      Weight: "140g",
      Fit: "Athletic Fit",
      Care: "Machine wash cold",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    ],
    price: 4850,
    compareAtPrice: 5300,
    rating: 5,
    reviewCount: 41,
    category: "Jackets",
    colors: ["#0f3d5c"],
    inStock: false,
    createdAt: "2026-05-14T00:00:00.000Z",
    bestSellerRank: 20,
  },
  {
    id: "p7",
    slug: "sauna-suit-pro-max-black",
    title: "MCD Sauna Suit Pro Max Black",
    description:
      "Heavy-duty pro tier sauna suit built with reinforced dual-layer heat reflective lining for elite weight cutting.",
    features: [
      "Dual-layer heat lock barrier",
      "Anti-tear cross-weave polyester",
      "Elastic wrist and ankle seals",
    ],
    specifications: {
      Material: "Heavy-Duty Polymer Mesh Composite",
      Weight: "610g",
      Fit: "Pro Combat Fit",
      Care: "Hand wash cold",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    ],
    price: 6995,
    compareAtPrice: 7495,
    rating: 5,
    reviewCount: 210,
    category: "Sauna Suits",
    colors: ["#111111"],
    inStock: true,
    createdAt: "2026-01-09T00:00:00.000Z",
    bestSellerRank: 2,
  },
  {
    id: "p8",
    slug: "vented-training-hoodie",
    title: "MCD Vented Training Hoodie",
    description:
      "Breathable performance pullover hoodie featuring soft French terry interior and laser-cut back vents.",
    features: [
      "Laser-cut back ventilation matrix",
      "Kangaroo pocket with internal phone slot",
      "Double-layered hood with soft jersey lining",
    ],
    specifications: {
      Material: "80% Cotton, 20% Technical Polyester",
      Weight: "480g",
      Fit: "Regular Fit",
      Care: "Machine wash warm",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
    ],
    price: 3450,
    compareAtPrice: null,
    rating: 4,
    reviewCount: 55,
    category: "Hoodies",
    colors: ["#5b5b5b", "#111111"],
    inStock: true,
    createdAt: "2026-04-22T00:00:00.000Z",
    bestSellerRank: 15,
  },
  {
    id: "p9",
    slug: "elite-heavyweight-fleece-hoodie",
    title: "MCD Elite Heavyweight Fleece Hoodie",
    description:
      "Ultra-thick 480GSM organic cotton fleece hoodie built for cold weather roadwork, pre-workout warmups, and everyday athletic lifestyle.",
    features: [
      "Heavyweight 480GSM fleece construction",
      "Double-lined thermal hood for maximum heat retention",
      "Ribbed side panels for athletic mobility",
      "Concealed zipper stash pocket inside kangaroo pouch",
    ],
    specifications: {
      Material: "85% Heavy Cotton, 15% Polyester Fleece",
      Weight: "720g",
      Fit: "Oversized Athletic Fit",
      Care: "Machine wash cold inside out",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80",
    ],
    price: 4200,
    compareAtPrice: 4800,
    rating: 5,
    reviewCount: 88,
    category: "Hoodies",
    colors: ["#111111", "#3b3b3b"],
    inStock: true,
    createdAt: "2026-09-01T00:00:00.000Z",
    bestSellerRank: 3,
  },
  {
    id: "p10",
    slug: "pro-fight-leather-boxing-gloves-16oz",
    title: "MCD Pro Fight Leather Boxing Gloves 16oz",
    description:
      "Genuine cowhide leather training and sparring gloves. Hand-molded quad-layer foam padding offers unmatched wrist protection and impact dispersion.",
    features: [
      "100% Genuine Full-Grain Cowhide Leather",
      "Quad-layer shock absorbing foam core",
      "Extra wide hook-and-loop wrist strap for rigid support",
      "Moisture-wicking mesh palm liner",
    ],
    specifications: {
      Material: "Genuine Grain Leather & Latex Foam",
      Weight: "16oz / 450g per glove",
      Fit: "Professional Sparring Fit",
      Care: "Wipe clean with damp cloth and leather conditioner",
    },
    sizes: ["12oz", "14oz", "16oz"],
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    ],
    price: 8500,
    compareAtPrice: 9500,
    rating: 5,
    reviewCount: 142,
    category: "Combat Gear",
    colors: ["#b81414", "#111111"],
    inStock: true,
    createdAt: "2026-08-15T00:00:00.000Z",
    bestSellerRank: 5,
  },
  {
    id: "p11",
    slug: "thermal-compression-shirt-tights-set",
    title: "MCD Thermal Compression Shirt & Tights Set",
    description:
      "High-compression base layer suit designed to improve blood circulation, reduce muscle vibration, and maintain core temperature during workouts.",
    features: [
      "Graduated compression technology aids recovery",
      "Flatlock anti-chafing seams",
      "4-way stretch fabric for 360-degree mobility",
      "Quick-dry moisture transport system",
    ],
    specifications: {
      Material: "82% Nylon, 18% Elastane",
      Weight: "360g",
      Fit: "Second-Skin Compression Fit",
      Care: "Machine wash cold delicate",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    ],
    price: 5450,
    compareAtPrice: 5995,
    rating: 5,
    reviewCount: 76,
    category: "Compression",
    colors: ["#111111"],
    inStock: true,
    createdAt: "2026-07-28T00:00:00.000Z",
    bestSellerRank: 7,
  },
  {
    id: "p12",
    slug: "stealth-training-sweatpants",
    title: "MCD Stealth Training Sweatpants",
    description:
      "Tapered athletic jogger pants crafted from heavy French terry cotton. Deep waterproof zip pockets keep your belongings secure during sprints.",
    features: [
      "Tapered leg with rib cuff bottom",
      "Waterproof zippered hand pockets",
      "Elastic waistband with custom metal-tipped drawcord",
    ],
    specifications: {
      Material: "90% Cotton, 10% Spandex",
      Weight: "410g",
      Fit: "Tapered Slim Fit",
      Care: "Machine wash cold",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80",
    ],
    price: 3850,
    compareAtPrice: 4200,
    rating: 4,
    reviewCount: 43,
    category: "Tracksuits",
    colors: ["#1c1c1c", "#4a4a4a"],
    inStock: true,
    createdAt: "2026-06-18T00:00:00.000Z",
    bestSellerRank: 10,
  },
  {
    id: "p13",
    slug: "heavy-duty-weightlifting-leather-belt",
    title: "MCD Heavy Duty Weightlifting Leather Belt",
    description:
      "4-inch wide 10mm thick genuine leather powerlifting belt with heavy steel double-prong buckle. Provides rock-solid lumbar support during heavy squats & deadlifts.",
    features: [
      "10mm thickness 100% genuine buffalo leather",
      "Stainless steel heavy double-prong buckle",
      "Suede inner lining prevents slipping",
      "Reinforced double stitching around entire border",
    ],
    specifications: {
      Material: "Full Grain Buffalo Leather & Steel Buckle",
      Weight: "950g",
      Fit: "Adjustable 28\" - 44\" Waist",
      Care: "Treat with leather oil occasionally",
    },
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    ],
    price: 3200,
    compareAtPrice: 3600,
    rating: 5,
    reviewCount: 119,
    category: "Accessories",
    colors: ["#5c3a21", "#111111"],
    inStock: true,
    createdAt: "2026-05-02T00:00:00.000Z",
    bestSellerRank: 6,
  },
  {
    id: "p14",
    slug: "neoprene-sweat-waist-trimmer-belt",
    title: "MCD Neoprene Sweat Waist Trimmer Belt",
    description:
      "Targeted thermal waist trimmer belt designed to increase core body temperature around the midsection during workouts.",
    features: [
      "4mm latex-free thick neoprene core",
      "Anti-slip grid inner texture prevents bunching",
      "Fully adjustable strong Velcro fastening",
    ],
    specifications: {
      Material: "100% Latex-Free Neoprene",
      Weight: "220g",
      Fit: "One Size Fits Most (Up to 44\" Waist)",
      Care: "Hand wash cold, air dry",
    },
    sizes: ["One Size"],
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    ],
    price: 2450,
    compareAtPrice: 2800,
    rating: 5,
    reviewCount: 310,
    category: "Sauna Suits",
    colors: ["#111111"],
    inStock: true,
    createdAt: "2026-03-10T00:00:00.000Z",
    bestSellerRank: 9,
  },
  {
    id: "p15",
    slug: "speed-jump-rope-hand-wraps-kit",
    title: "MCD Speed Jump Rope & Hand Wraps Kit",
    description:
      "Essential cardio & conditioning kit including a 360-degree ball bearing speed cable jump rope and 4.5m semi-elastic boxing hand wraps.",
    features: [
      "High-speed 360-degree aluminum ball bearings",
      "3-meter adjustable steel wire cable with PVC sheath",
      "Includes pair of 4.5m breathable cotton hand wraps",
    ],
    specifications: {
      Material: "Aluminum, Steel Wire & Woven Cotton",
      Weight: "310g total kit",
      Fit: "Universal Adjustable",
      Care: "Wipe cable, hand wash wraps",
    },
    sizes: ["One Size"],
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    ],
    price: 1850,
    compareAtPrice: null,
    rating: 4,
    reviewCount: 94,
    category: "Accessories",
    colors: ["#111111"],
    inStock: true,
    createdAt: "2026-04-05T00:00:00.000Z",
    bestSellerRank: 11,
  },
  {
    id: "p16",
    slug: "performance-tech-compression-shorts",
    title: "MCD Performance Tech Compression Shorts",
    description:
      "Compression shorts featuring an integrated phone pocket and athletic cup pocket. High-stretch moisture wicking fabric.",
    features: [
      "Side smartphone pocket holds device snug during running",
      "Built-in athletic cup pocket (cup sold separately)",
      "Ergonomic flatlock seams prevent chafing",
    ],
    specifications: {
      Material: "85% Polyester, 15% Spandex",
      Weight: "190g",
      Fit: "Snug Compression Fit",
      Care: "Machine wash cold",
    },
    sizes: DEFAULT_SIZES,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    ],
    price: 2950,
    compareAtPrice: 3300,
    rating: 5,
    reviewCount: 52,
    category: "Compression",
    colors: ["#1c2f6e", "#111111"],
    inStock: true,
    createdAt: "2026-08-01T00:00:00.000Z",
    bestSellerRank: 14,
  },
];

export function getProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const CATEGORIES = Array.from(
  new Set(PRODUCTS.map((p) => p.category))
).sort();
