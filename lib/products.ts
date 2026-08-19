export type Colorway = {
  id: string;
  name: string;
  hex: string;
  img: string;
  ringed?: boolean; // light swatch that needs an outline
};

export type Product = {
  id: string;
  name: string;
  hy: string; // Armenian name / line
  blurb: string;
  priceAmd: number;
  priceUsd: number; // cents
  sizes: string[];
  colorways: Colorway[];
  badge?: string;
  wide?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "signature-tee",
    name: "The Signature Tee",
    hy: "«Քեզ Պես» շապիկ",
    blurb:
      "The one that started it all — heavyweight oversized cotton with the qez·pes wordmark embroidered over the heart, finished with contrast stitching.",
    priceAmd: 11900,
    priceUsd: 4500,
    sizes: ["S–M", "L–XL"],
    badge: "Seven colors",
    colorways: [
      { id: "gentle", name: "Gentle", hex: "#f1ebe0", img: "/img/tee-gentle-1.jpg", ringed: true },
      { id: "blush", name: "Blush", hex: "#c58a8f", img: "/img/tee-blush-1.jpg" },
      { id: "brownie", name: "Brownie", hex: "#462e24", img: "/img/tee-brownie-1.jpg" },
      { id: "noir", name: "Noir", hex: "#211e1f", img: "/img/tee-noir-1.jpg" },
      { id: "navy", name: "Navy", hex: "#28304a", img: "/img/tee-navy-1.jpg" },
      { id: "radiant", name: "Radiant", hex: "#77202c", img: "/img/tee-radiant-1.jpg" },
      { id: "brave", name: "Brave", hex: "#a6a3a8", img: "/img/tee-brave-1.jpg" },
    ],
  },
  {
    id: "cherry-tee",
    name: "Cherry on Top",
    hy: "բալային էներգիա",
    blurb:
      "Coral pink with a cream ringer collar and “made with self-love” hand-embroidered next to a little cherry. Cherry energy, worn on your chest.",
    priceAmd: 14900,
    priceUsd: 5500,
    sizes: ["S–M", "L–XL"],
    badge: "Embroidered",
    colorways: [
      { id: "cherry", name: "Cherry", hex: "#ee8a84", img: "/img/tee-cherry-1.jpg" },
    ],
  },
  {
    id: "selflove-tee",
    name: "Self-Love",
    hy: "սերը սկսվում է ինձնից",
    blurb:
      "Soft ivory cotton with “made with self-love” in pink script over the heart. The quietest shirt we make, saying the loudest thing.",
    priceAmd: 14900,
    priceUsd: 5500,
    sizes: ["S–M", "L–XL"],
    badge: "Embroidered",
    colorways: [
      { id: "ivory", name: "Ivory", hex: "#f4ede1", img: "/img/tee-selflove-1.jpg", ringed: true },
    ],
  },
  {
    id: "qez-kes",
    name: "Qez Kes — the matching tee",
    hy: "«Քեզ Կես» — քո կեսի հետ",
    blurb:
      "Our Valentine's drop: «քեզ♥կես» — “to your half.” Made to be worn together, in wine and in ivory. Price is per piece; hearts sold separately.",
    priceAmd: 14900,
    priceUsd: 5500,
    sizes: ["S–M", "L–XL"],
    badge: "Limited drop",
    colorways: [
      { id: "wine", name: "Wine", hex: "#6e1423", img: "/img/valentine-qezkes-2.jpg" },
      { id: "ivory", name: "Ivory", hex: "#f5eee3", img: "/img/valentine-duo-1.jpg", ringed: true },
    ],
  },
  {
    id: "strong-tee",
    name: "Strong",
    hy: "«քեզ պես ուժեղ»",
    blurb:
      "A statement tee that says it in Armenian: there is no one as strong as you. Stone gray, oversized, with the words layered front and center.",
    priceAmd: 12900,
    priceUsd: 4900,
    sizes: ["S–M", "L–XL"],
    colorways: [
      { id: "stone", name: "Stone", hex: "#aba9ae", img: "/img/tee-strong-1.jpg" },
    ],
  },
  {
    id: "ser-hoodie",
    name: "Hoodie «սեր»",
    hy: "սեր = love",
    blurb:
      "From our very first drop: a cloud-white hoodie with «սեր» — love — drawn as a big red heart across the back. The original QezPes hug.",
    priceAmd: 16900,
    priceUsd: 7500,
    sizes: ["S–M", "L–XL"],
    badge: "First drop",
    colorways: [
      { id: "cloud", name: "Cloud", hex: "#f5f2ea", img: "/img/hoodie-ser-1.jpg", ringed: true },
    ],
  },
  {
    id: "panama",
    name: "The Panama",
    hy: "ամառային սեր",
    blurb:
      "A soft bucket hat with the qez·pes wordmark stitched on the brim. Your new everyday favorite — the coolest shade of the summer.",
    priceAmd: 7900,
    priceUsd: 2900,
    sizes: ["One size"],
    badge: "New",
    colorways: [
      { id: "gentle", name: "Gentle", hex: "#f6f3ec", img: "/img/panama-gentle-1.jpg", ringed: true },
      { id: "navy", name: "Navy", hex: "#2a3148", img: "/img/panama-navy-1.jpg" },
    ],
  },
  {
    id: "mini-set",
    name: "QezPes Mini",
    hy: "մեր ամենափոքրիկ քեզպեսները",
    blurb:
      "Our first kids collection — tiny tee and shorts sets for ages 3–15, made for playing, running, and becoming more and more քեզ պես every day.",
    priceAmd: 11900,
    priceUsd: 4500,
    sizes: ["3–7", "8–12", "12–16"],
    badge: "Kids · new",
    colorways: [
      { id: "wine", name: "Wine", hex: "#6e1423", img: "/img/kids-collection-1.jpg" },
      { id: "ivory", name: "Ivory", hex: "#f5eee3", img: "/img/kids-collection-2.jpg", ringed: true },
    ],
  },
];

export const AMD = (n: number) => `${n.toLocaleString("en-US").replace(/,/g, ".")} ֏`;
export const USD = (cents: number) => `$${(cents / 100).toFixed(0)}`;
