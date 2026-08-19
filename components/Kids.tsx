import Reveal from "./Reveal";
import { asset } from "@/lib/asset";

export default function Kids() {
  return (
    <section className="kids section" id="kids">
      <div className="wrap kids__grid">
        <Reveal>
          <figure className="kids__media">
            <img
              src={asset("/img/kids-collection-1.jpg")}
              alt="Two kids in matching QezPes tees and shorts"
              loading="lazy"
            />
          </figure>
        </Reveal>
        <Reveal delay={0.12}>
          <span className="section__kicker">QezPes Mini</span>
          <h2 className="kids__title">
            QezPes, <em>but make it mini.</em>
          </h2>
          <p className="kids__copy">
            Tiny tees and shorts for ages 3–15, made for playing, running, and big dreams — so the
            littlest ones grow up hearing it early: դու բավարար ես, you are enough.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#shop">
              Shop the mini set
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
