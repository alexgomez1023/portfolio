import Note from "../components/Note.jsx";

export default function NotFound() {
  return (
    <main className="not-found">
      <title>Not found | Alex Gomez</title>
      {/* Vercel serves every unknown URL with a 200, so tell search engines to skip it */}
      <meta name="robots" content="noindex" />

      {/* the spot where a note used to be: two leftover bits of tape */}
      <div className="empty-spot" aria-hidden="true">
        <span className="tape tape-left" />
        <span className="tape tape-right" />
        <span className="empty-code">404</span>
      </div>

      <h1>Nothing pinned here</h1>

      <nav className="board" aria-label="Where to go instead">
        <Note
          to="/"
          title="Back to the board"
          meta="home"
          index={0}
          paper="straw"
          rotate={-3}
          tapeX="30%"
          tapeR={3}
        />
        <Note
          to="/#projects"
          title="My projects"
          meta="See what I've built"
          index={1}
          paper="sage"
          rotate={2}
          tapeX="55%"
          tapeR={-4}
        />
        <Note
          to="/resume"
          title="Read my résumé"
          meta="please :)"
          index={2}
          paper="peach"
          rotate={-1.5}
          tapeX="70%"
          tapeR={2}
        />
      </nav>
    </main>
  );
}
