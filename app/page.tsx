import { Fragment } from "react";
import { Tracklist } from "./tracklist";

const LINKS = {
  GitHub: "https://github.com/bixxter",
  X: "https://x.com/bixtter_",
  Telegram: "https://t.me/bixxter",
  Instagram: "https://instagram.com/bixxter_",
  LinkedIn: "https://linkedin.com/in/bixxter",
};

const FIRST = "I’m a software engineer.".split(" ");
const REST = "After hours I build small things that make every day a\u00a0bit more fun.";
const WORD_STAGGER = 70; // ms; the grey line then comes in as one, and the list right after

// Each word comes into focus (blur → sharp), Adlib's own effect. The space stays outside the
// inline-block, or it collapses.
const word = (text: string, i: number) => (
  <Fragment key={i}>
    <span className="w" style={{ animationDelay: `${i * WORD_STAGGER}ms` }}>
      {text}
    </span>{" "}
  </Fragment>
);

export default function Home() {
  const after = FIRST.length * WORD_STAGGER;

  return (
    <main className="wrap">
      <header className="top">
        <span>Asatulla</span>
        <nav>
          {(["GitHub", "X", "Telegram"] as const).map((k) => (
            <a key={k} href={LINKS[k]}>
              {k}
            </a>
          ))}
        </nav>
      </header>

      <h1>
        {FIRST.map(word)}
        <span className="mute w" style={{ animationDelay: `${after}ms` }}>
          {REST}
        </span>
      </h1>

      <Tracklist delay={after + 80} />

      <footer className="foot">
        <div>
          <b>Asatulla</b>bixxter on most things
        </div>
        <div>
          <b>Almaty, Kazakhstan</b>UTC+5
        </div>
        <nav>
          {Object.entries(LINKS).map(([k, href]) => (
            <a key={k} href={href}>
              {k}
            </a>
          ))}
        </nav>
      </footer>
    </main>
  );
}
