"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { Mascot } from "./mascot";

type Track = {
  n: string;
  name: string;
  line: string;
  terms: string;
  href: string;
  peek?: (playing: boolean) => ReactNode;
};

const SIDES: { title: string; note: string; tracks: Track[] }[] = [
  {
    title: "Side A — Apps",
    note: "macOS",
    tracks: [
      {
        n: "A1",
        name: "Dyno Chess",
        line: "Chess in your MacBook’s notch. Hover, play a move, get back to work.",
        terms: "Free · Pro $14.99",
        href: "https://dynochess.bixxter.com",
        peek: () => <img src="/img/dyno.jpg" alt="" />,
      },
      {
        n: "A2",
        name: "Adlib",
        line: "Synced lyrics that float over your screen, word by word. Apple Music and Spotify.",
        terms: "$4.99 once",
        href: "https://tryadlib.web.app",
        peek: (playing) => <Lyrics playing={playing} />,
      },
    ],
  },
  {
    title: "Side B — Claude Code",
    note: "Open source",
    tracks: [
      {
        n: "B1",
        name: "app-growth-design",
        line: "A skill built from 30 app teardowns: onboarding, paywalls, pricing, retention. Every claim has a source.",
        terms: "Free · MIT",
        href: "https://github.com/bixxter/app-growth-design",
        peek: () => (
          <div className="term">
            <s>$</s> npx app-growth-design
            <br />
            <i>✓</i> installed to ~/.claude/skills
            <br />
            <br />
            <s>&gt;</s> my paywall converts at 2%, what do I test first?
            <br />
            Structure out-tests price. A trial on a weekly plan took 12-month LTV from $7.40 to $54.50.{" "}
            <s>[06]</s>
          </div>
        ),
      },
      {
        n: "B2",
        name: "adlib-lyrics",
        line: "Adlib’s lyrics inside Claude Code, right above your prompt. The mascot dances on the beat.",
        terms: "Free · MIT",
        href: "https://github.com/bixxter/adlib-lyrics",
        peek: () => (
          <div className="term band">
            <Mascot />
            <div>
              <s>the build is green, the coffee’s warm</s>
              <br />
              <b>one more commit</b> before the storm
              <br />
              <s>and the agent hums along</s>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Bonus track",
    note: "",
    tracks: [
      {
        n: "★",
        name: "Videos",
        line: "Besides all this, I love filming videos. They end up on Instagram.",
        terms: "",
        href: "https://instagram.com/bixxter_",
      },
    ],
  },
];

const TRACKS = SIDES.flatMap((s) => s.tracks);

// Adlib's own lines (from its landing page), sung with its word-focus effect.
const SONG = [
  "Every word I need is glowing in the corner",
  "Eyes still on my work, but I sing it low",
  "Don’t need a window, don’t need a stage",
  "Just the lines that find me where I am",
];

function Lyrics({ playing }: { playing: boolean }) {
  const [k, setK] = useState(0);
  useEffect(() => {
    if (!playing || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setK((k) => (k + 1) % SONG.length), 2600);
    return () => clearInterval(id);
  }, [playing]);
  const at = (o: number) => SONG[(k + o + SONG.length) % SONG.length];
  return (
    <div className="lyrics">
      <div className="dim">{at(-1)}</div>
      {/* the key remounts the line, so each word's focus animation plays again */}
      <div className="now" key={k}>
        {at(0)
          .split(" ")
          .map((w, i) => (
            <Fragment key={i}>
              <span style={{ animationDelay: `${i * 170}ms` }}>{w}</span>{" "}
            </Fragment>
          ))}
      </div>
      <div className="dim">{at(1)}</div>
    </div>
  );
}

export function Tracklist({ delay }: { delay: number }) {
  const box = useRef<HTMLDivElement>(null);
  // i: the row in focus (null = none). last: what the preview shows, kept while it hides.
  // x, y: the description column and the top of that row; the preview sits just above the row,
  // over rows that are blurred. instant: place it without gliding, because it was hidden.
  const [peek, setPeek] = useState({ i: null as number | null, last: 0, x: 0, y: 0, instant: true });
  const hide = () => setPeek((p) => ({ ...p, i: null }));
  const show = (i: number, row: HTMLElement) => {
    const b = box.current!.getBoundingClientRect();
    const x = row.querySelector(".d")!.getBoundingClientRect().left - b.left;
    const y = row.getBoundingClientRect().top - b.top;
    setPeek((p) => ({ i, last: i, x, y, instant: p.i === null || !TRACKS[p.i].peek }));
  };
  const shown = peek.i !== null && !!TRACKS[peek.i].peek;

  let k = 0; // running row index across sides
  return (
    <div
      ref={box}
      className="tracks"
      data-active={peek.i !== null ? "" : undefined}
      onPointerLeave={hide}
      onBlur={(e) => !box.current?.contains(e.relatedTarget) && hide()}
    >
      {SIDES.map((side, s) => (
        <section key={side.title} className="enter" style={{ animationDelay: `${delay + s * 60}ms` }}>
          <h2 className="side">
            <span>{side.title}</span>
            <span>{side.note}</span>
          </h2>
          <ol>
            {side.tracks.map((t) => {
              const i = k++;
              return (
                <li key={t.n}>
                  <a
                    className="row"
                    href={t.href}
                    data-on={peek.i === i ? "" : undefined}
                    onPointerEnter={(e) => e.pointerType === "mouse" && show(i, e.currentTarget)}
                    onFocus={(e) => show(i, e.currentTarget)}
                  >
                    <span className="n" data-star={t.n === "★" || undefined}>
                      {t.n}
                    </span>
                    <span className="t">{t.name}</span>
                    <span className="d">{t.line}</span>
                    <span className="p">{t.terms}</span>
                    <span className="a" aria-hidden>
                      ↗
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </section>
      ))}

      {/* One shared preview that glides between rows; every preview is mounted up front so a
          swap never waits on an image. */}
      <div
        className="peek"
        aria-hidden
        data-shown={shown ? "" : undefined}
        data-instant={peek.instant ? "" : undefined}
        style={{ translate: `${peek.x}px ${peek.y}px` }}
      >
        {TRACKS.map((t, i) =>
          t.peek ? (
            <div key={t.n} className="peek-item" data-on={peek.last === i ? "" : undefined}>
              {t.peek(shown && peek.last === i)}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
