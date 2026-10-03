// Adlib's dancing mascot, 16×12 px (same sprite as Adlib.swift `enum Mascot`).
// Two poses swap at 120 bpm in CSS. E (eyes) and M (mouth) stay unlit.
const HEAD = [
  ".....HHHHHH.....",
  "...HH......HH...",
  "..H..BBBBBB..H..",
  "..H.BBBBBBBB.H..",
  ".HHBBBBBBBBBBHH.",
  ".HHBBEWBBEWBBHH.",
  ".HHBBEEBBEEBBHH.",
];
const POSES = [
  ["BHHBCBBBBBBCBHH.", ".BBBBBMBBMBBB...", "...BBBBMMBBBBB..", "....BBBBBBBB..B.", ".....B....B....."],
  [".HHBCBBBBBBCBHHB", "...BBBMBBMBBBBB.", "..BBBBBMMBBBB...", ".B..BBBBBBBB....", "....B......B...."],
];
const COLOR: Record<string, string> = { B: "#f5f5f5", H: "#666", C: "#c7c7c7", W: "#fff" };

const pixels = (rows: string[]) =>
  rows.flatMap((row, y) =>
    [...row].map((ch, x) =>
      COLOR[ch] ? <rect key={`${x}.${y}`} x={x} y={y} width={1} height={1} fill={COLOR[ch]} /> : null,
    ),
  );

export function Mascot() {
  return (
    <svg className="mascot" viewBox="0 0 16 12" shapeRendering="crispEdges" aria-hidden>
      {POSES.map((pose, i) => (
        <g key={i} className={`pose pose-${i}`}>
          {pixels([...HEAD, ...pose])}
        </g>
      ))}
    </svg>
  );
}
