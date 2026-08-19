import { asset } from "@/lib/asset";

const REELS = [
  { src: "/video/hero-a.mp4", poster: "/video/poster-a.jpg", tag: "Yerevan, in Brave" },
  { src: "/video/hero-b.mp4", poster: "/video/poster-b.jpg", tag: "Styling Radiant" },
  { src: "/video/hero-c.mp4", poster: "/video/poster-c.jpg", tag: "Shoot day" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div>
          <p className="hero__eyebrow rise d1">Made in Yerevan · since 18.09.2023</p>
          <h1>
            <span className="rise d2" style={{ display: "block" }}>
              Քեզ Պես
            </span>
            <em className="hero__like rise d3">— there&rsquo;s only one like you.</em>
          </h1>
          <p className="hero__copy rise d3">
            Oversized tees and hoodies embroidered with the words you need to hear,
            stitched in Armenia <em>with self-love</em>. Worn in Yerevan, shipped to
            Los Angeles, made for every body.
          </p>
          <div className="hero__ctas rise d4">
            <a className="btn btn--primary" href="#shop">
              Shop the drop
            </a>
            <a className="btn btn--ghost" href="#story">
              Our story
            </a>
          </div>
        </div>

        <div className="reels" aria-label="Moments from our Instagram">
          {REELS.map((r) => (
            <figure className="reel" key={r.src}>
              <video
                src={asset(r.src)}
                poster={asset(r.poster)}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <figcaption className="reel__tag">{r.tag}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
