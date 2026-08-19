import Reveal from "./Reveal";
import { asset } from "@/lib/asset";

const TIMELINE = [
  { date: "09 · 2023", text: "QezPes is born in Yerevan — an idea torn straight from the heart, nine months in the making." },
  { date: "01 · 2024", text: "After months of grief and doubt, we come back. Being քեզ պես — being yourself — felt worth fighting for." },
  { date: "18 · 02 · 2024", text: "First drop: hoodies «սեր», «դու», «ես ինձ հերիք եմ» — love, you, I am enough for myself." },
  { date: "06 · 2025", text: "From sketches to steps on the runway — QezPes walks its first Yerevan fashion show." },
  { date: "08 · 2026", text: "QezPes Mini arrives: our first kids collection, for the tiniest քեզ պես people." },
];

export default function Story() {
  return (
    <section className="story section" id="story">
      <div className="wrap story__grid">
        <Reveal>
          <span className="section__kicker">Մեր պատմությունը · our story</span>
          <h2 className="story__title">
            Born one day before heartbreak, <span className="hy">վերածնված սիրով</span> — reborn
            with love.
          </h2>
          <div className="story__body">
            <p>
              QezPes launched on <strong>September 18, 2023</strong> — one day before a tragedy
              that broke every Armenian heart. We almost stopped. The sketches sat in a drawer
              while the words on them waited.
            </p>
            <p>
              We came back because those words were the ones we needed ourselves:{" "}
              <strong>դու բավարար ես — you are enough.</strong> Every piece is designed and
              embroidered in Armenia by founder Anna Baghdasaryan, packed by hand with a note and
              a ribbon, and worn like a hug you give yourself.
            </p>
          </div>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="timeline__item" key={t.date}>
                <div className="timeline__date">{t.date}</div>
                <div className="timeline__text">{t.text}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="story__photos">
            <figure className="story__photo story__photo--a">
              <img src={asset("/img/hoodie-ser-1.jpg")} alt="The first-drop hoodie «սեր» — a red heart-shaped “love” across the back" loading="lazy" />
            </figure>
            <figure className="story__photo story__photo--b">
              <img src={asset("/img/valentine-qezkes-1.jpg")} alt="Two people wearing matching Qez Kes tees" loading="lazy" />
            </figure>
            <svg className="story__stamp" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="circ" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
              </defs>
              <circle cx="60" cy="60" r="58" fill="none" stroke="#c58a8f" strokeWidth="1.5" strokeDasharray="6 5" />
              <text fill="#ecd2cc" fontSize="13.5" fontWeight="700" letterSpacing="2.5">
                <textPath href="#circ">made in armenia · with self-love ·</textPath>
              </text>
              <text x="60" y="67" textAnchor="middle" fontSize="20" fill="#c58a8f">♥</text>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
