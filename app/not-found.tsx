export const metadata = { title: "No such track — Asatulla" };

export default function NotFound() {
  return (
    <main className="wrap">
      <header className="top">
        <a href="/">Asatulla</a>
      </header>
      <h1>
        No such track.
        <span className="mute">
          Skip back to <a href="/">the tracklist</a>.
        </span>
      </h1>
    </main>
  );
}
