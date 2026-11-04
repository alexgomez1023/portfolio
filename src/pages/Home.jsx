import Note from "../components/Note.jsx";
import Snapshot from "../components/Snapshot.jsx";
import Sketch from "../components/Sketch.jsx";
import Phone from "../components/Phone.jsx";
import ScribLink from "../components/ScribLink.jsx";
import CertSketch from "../components/sketches/CertSketch.jsx";
import FlashSketch from "../components/sketches/FlashSketch.jsx";
import me from "../assets/me.jpg";
import Arrow from "../components/SquigglyArrow.jsx";
import { screenshots } from "../data/screenshots.js";

export default function Home() {
  return (
    <main>
      <title>Alex Gomez</title>
      <meta
        name="description"
        content="Alex Gomez, computer science senior at NC State. Software engineering intern at Collins Aerospace and builder of Skim."
      />
      <link rel="canonical" href="https://alexmgomez.com/" />

      <section className="hero">
        <div className="me">
          <Snapshot
            src={me}
            alt="Photo of Alex Gomez"
            shape="square"
            rotate={-4}
            tapeX="50%"
            tapeR={3}
          />

          <h1>Alex Gomez</h1>

          <p className="intro">
            I'm a computer science student at NC State, graduating in May 2027.
            I'm in the AI concentration and spent the past two summers as a
            software engineering intern at Collins Aerospace.
          </p>
        </div>

        <nav className="board" aria-label="Projects">
          <Note
            to="/projects/cert-tracker"
            title="Software Certification Tracker"
            meta="Collins Aerospace, Summer 2026"
            index={0}
            paper="straw"
            rotate={-3}
            tapeX="24%"
            tapeR={3}
          />
          <Note
            to="/projects/reprogramming-tool"
            title="Embedded Reprogramming Tool"
            meta="Collins Aerospace, Summer 2025"
            index={1}
            paper="sage"
            rotate={2}
            tapeX="52%"
            tapeR={-4}
          />
          <Note
            to="/projects/skim"
            title="Skim: Recipe Saver and Meal Prep Assistant"
            meta="My own app"
            index={2}
            paper="peach"
            rotate={-1.5}
            tapeX="74%"
            tapeR={2}
          />
        </nav>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>

        <div className="project-group">
          <p className="group-label">what I'm building now</p>

          {/* add src="/images/..." to each Phone once the screenshots are in public/images */}
          <div className="phone-row">
            <Phone
              caption="recipe import"
              {...screenshots.recipeImport}
              rotate={-3}
              tapeR={3}
            />
            <Phone
              caption="Home Page"
              {...screenshots.homeScreen}
              rotate={1.5}
              tapeX="40%"
              tapeR={-1.5}
            />
            <Phone
              caption="Meal Plan"
              {...screenshots.mealPlan}
              rotate={-1}
              tapeX="55%"
              tapeR={2}
            />
          </div>

          <div className="featured">
            <div>
              <h3>Skim</h3>
              <p className="meta-line">My own app</p>
              <p>
                A recipe and meal planning app I'm building for iOS and Android.
                You save recipes from sources like instagram, youtube, and
                recipe websites.
              </p>
            </div>
            <ScribLink to="/projects/skim" className="hand-link">
              read the full story <Arrow />
            </ScribLink>
          </div>
        </div>

        <div className="project-group">
          <p className="group-label">before that</p>

          <div className="before-grid">
            <article className="past-project">
              <Sketch
                paper="straw"
                caption="DAG Dependency Graph Visual"
                rotate={-1.5}
                tapeX="50%"
                tapeR={3}
              >
                <CertSketch />
              </Sketch>
              <h3>Software Certification Tracker</h3>
              <p className="meta-line">Collins Aerospace, Summer 2026</p>
              <ScribLink to="/projects/cert-tracker" className="hand-link">
                read more <Arrow />
              </ScribLink>
            </article>

            <article className="past-project">
              <Sketch
                paper="sage"
                caption="Repogramming Tool Visual"
                rotate={1}
                tapeX="40%"
                tapeR={-3}
              >
                <FlashSketch />
              </Sketch>
              <h3>Reprogramming Tool</h3>
              <p className="meta-line">Collins Aerospace, Summer 2025</p>
              <ScribLink
                to="/projects/reprogramming-tool"
                className="hand-link"
              >
                read more <Arrow />
              </ScribLink>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
