import Reveal from "./Reveal";

const VALUES = [
  {
    icon: "🪡",
    title: "Embroidered in Yerevan",
    text: "Stitched, not printed — every word is sewn to last.",
  },
  {
    icon: "🤍",
    title: "For every body",
    text: "Oversized, unisex cuts in S–M and L–XL. Meant for everybody and EVERY BODY.",
  },
  {
    icon: "🎀",
    title: "Packed with love",
    text: "Every order is wrapped by hand, with a ribbon and a note from Anna.",
  },
  {
    icon: "📦",
    title: "🇦🇲 → 🇺🇸",
    text: "Free shipping across Armenia. US orders ship from Los Angeles.",
  },
];

export default function Values() {
  return (
    <div className="wrap">
      <div className="values">
        {VALUES.map((v, i) => (
          <Reveal className="value" key={v.title} delay={i * 0.08}>
            <div className="value__icon" aria-hidden="true">
              {v.icon}
            </div>
            <div className="value__title">{v.title}</div>
            <div className="value__text">{v.text}</div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
