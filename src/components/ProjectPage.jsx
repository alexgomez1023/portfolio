import { Link } from "react-router";
import Arrow from "./SquigglyArrow.jsx";
import ScribLink from "./ScribLink.jsx";

// The template every project page uses: back link, title, then whatever
// you put inside, then a sticky note pointing to the next project.
//
// <ProjectPage
//   title="Skim"
//   subtitle="Personal project"
//   description="..."                                     -> search results / link previews
//   next={{ to: "/projects/cert-tracker", title: "...", paper: "straw", rotate: -2 }}
// >
//   <Sketch .../>  <Facts>...</Facts>  <Question>...</Question> ...
// </ProjectPage>
export default function ProjectPage({ title, subtitle, description, next, children }) {
  return (
    <main className="project-page">
      <title>{`${title} | Alex Gomez`}</title>
      {description && <meta name="description" content={description} />}

      <ScribLink to="/#projects" className="hand-link">
        <Arrow left /> all projects
      </ScribLink>

      <header className="project-title">
        <h1>{title}</h1>
        {subtitle && <p className="meta-line">{subtitle}</p>}
      </header>

      {children}

      {next && (
        <div className="next-row">
          <Link
            className="note"
            to={next.to}
            style={{
              "--r": `${next.rotate ?? 2}deg`,
              "--paper": `var(--paper-${next.paper})`,
              "--tape-x": "40%",
              "--tape-r": "3deg",
            }}
          >
            <span className="note-meta">next project <Arrow /></span>
            <span className="note-title">{next.title}</span>
          </Link>
        </div>
      )}
    </main>
  );
}

// The row of quick facts under the hero sketch, with squiggles above and below.
// <Facts>
//   <Fact label="role">SWE intern</Fact>
// </Facts>
export function Facts({ children }) {
  return <dl className="facts">{children}</dl>;
}

export function Fact({ label, children }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

// One recruiter question and your answer.
// <Question title="What was hard?"><p>...</p></Question>
export function Question({ title, children }) {
  return (
    <section className="question">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// A small sketch on the left, the feature name and text on the right.
// <FeatureRow name="Dependency graph" sketch={<Sketch small ...>...</Sketch>}>text</FeatureRow>
export function FeatureRow({ name, sketch, children }) {
  return (
    <div className="feature-row">
      {sketch}
      <div>
        <strong>{name}</strong>
        <p>{children}</p>
      </div>
    </div>
  );
}

// Marks a spot you still need to write. Shows up dashed so it's easy to spot.
export function Todo({ children }) {
  return <p className="todo">TODO: {children}</p>;
}
