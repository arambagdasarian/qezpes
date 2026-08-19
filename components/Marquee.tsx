const MANTRAS: Array<{ text: string; hy?: boolean }> = [
  { text: "դու բավարար ես", hy: true },
  { text: "you are enough" },
  { text: "ես ինձ հերիք եմ", hy: true },
  { text: "made with self-love" },
  { text: "քեզ պես միայն դու ես", hy: true },
  { text: "only you are like you" },
  { text: "մենք բավարար ենք", hy: true },
  { text: "for every body" },
];

export default function Marquee() {
  const run = (key: string) => (
    <span className="marquee__item" key={key} aria-hidden={key === "b"}>
      {MANTRAS.map((m, i) => (
        <span key={i} className={m.hy ? "hy" : undefined}>
          {m.text} <span className="dot"> ♥ </span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-label="Mantras">
      <div className="marquee__track">
        {run("a")}
        {run("b")}
      </div>
    </div>
  );
}
