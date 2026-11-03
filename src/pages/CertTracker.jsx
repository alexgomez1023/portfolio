import Arrow from "../components/SquigglyArrow.jsx";
import ProjectPage, {
  Facts,
  Fact,
  Question,
  FeatureRow,
  Todo,
} from "../components/ProjectPage.jsx";
import Sketch, { GraphPaper } from "../components/Sketch.jsx";
import CertSketch from "../components/sketches/CertSketch.jsx";
import {
  DependencyGraphSketch,
  DocumentSyncSketch,
  AiParsingSketch,
} from "../components/sketches/CertFeatureSketches.jsx";
import { CertDiagram } from "../components/sketches/Diagrams.jsx";

export default function CertTracker() {
  return (
    <ProjectPage
      title="Software Certification Tracker"
      subtitle="Collins Aerospace - Software Engineering Intern - Summer 2026"
      description="A full-stack web app I built to track my team's software through the certification lifecycle, along with the documents tied to it."
      next={{
        to: "/projects/reprogramming-tool",
        title: "Embedded Reprogramming Tool",
        paper: "sage",
        rotate: 2,
      }}
    >
      {/* hero sketch: no caption */}
      <Sketch paper="straw" rotate={-1} tapeR={-3}>
        <CertSketch />
      </Sketch>

      <Facts>
        <Fact label="role">SWE intern</Fact>
        <Fact label="stack">React, FastAPI, MySQL</Fact>
        <Fact label="result">
          lookups 20 min <Arrow /> 2
        </Fact>
      </Facts>

      <Question title="What problem did it solve?">
        <p>
          My team's software is certified under DO-178C, mostly at levels D and
          E, and some of it was about to move up to level C, which requires
          stricter tracking. Finding a document meant looking up a part name,
          matching it to a program in a spreadsheet, and then digging through
          Teamcenter. Some programs were missing from the spreadsheets, and
          Teamcenter took 5&ndash;10 minutes just to launch. A single lookup
          took about 20 minutes.
        </p>
      </Question>

      <Question title="What did I build?">
        <p>
          My manager wanted a better way to track certifications and gave me
          freedom in how to build it. The result is a full-stack web app used by
          more than 15 engineers across the software and systems teams. Looking
          up a document went from about 20 minutes to 2.
        </p>
        <div className="feature-rows">
          <FeatureRow
            name="Dependency graph"
            sketch={
              <Sketch
                small
                paper="straw"
                caption="what a change touches"
                rotate={-2}
                tapeR={3}
              >
                <DependencyGraphSketch />
              </Sketch>
            }
          >
            Search any assembly number or document and the app draws what it
            depends on, so I can see what a change will touch before I make it.
          </FeatureRow>
          <FeatureRow
            name="Document sync"
            sketch={
              <Sketch
                small
                paper="straw"
                caption="always up to date"
                rotate={1.5}
                tapeX="40%"
                tapeR={-2}
              >
                <DocumentSyncSketch />
              </Sketch>
            }
          >
            I worked with engineering services to get Teamcenter API access,
            then built a pipeline that keeps the app's depency system up to date
            automatically.
          </FeatureRow>
          <FeatureRow
            name="AI document parsing"
            sketch={
              <Sketch
                small
                paper="straw"
                caption="results stream in"
                rotate={-1}
                tapeX="60%"
                tapeR={2}
              >
                <AiParsingSketch />
              </Sketch>
            }
          >
            I added a feature where you could upload a document and the backend
            parses it with LangChain + Proprietary LLM, streaming the results
            back to the page as they come in.
          </FeatureRow>
        </div>
      </Question>

      <Question title="How does it work?">
        <p>
          The frontend is React and the backend is FastAPI with a MySQL
          database. Parts, documents, and programs are linked in the schema, so
          the backend builds a dependency graph by walking only the records
          connected to the selected item. Graphs with hundreds of nodes load in
          under a second.
        </p>
        <p>
          A C# script pulls documents from Teamcenter through its SOA API and
          syncs them with FastAPI. Uploaded documents go through a LangChain
          parser, and results stream back to the page with Server-Sent Events.
        </p>
        <Sketch
          paper="straw"
          caption="how the pieces fit together"
          rotate={0.8}
          tapeX="30%"
          tapeR={4}
        >
          <GraphPaper>
            <CertDiagram />
          </GraphPaper>
        </Sketch>
      </Question>

      <Question title="What was hard?">
        <p>
          The Teamcenter sync. First I had to get API access, which meant
          working with engineering services. Then the SOA API was confusing and
          poorly documented, and it only supports C#, C++, and Java. Since my
          backend is Python, I wrote the sync as a separate C# script that feeds
          data into FastAPI. I then had to come up with a design that could
          incorporate this script into the existing backend.
        </p>
      </Question>

      <Question title="What would I do differently?">
        <p>
          I would have asked for Teamcenter API access as soon as possible.
          Approval took a while, and the document sync feature ended up being
          the hardest part of the project, so that extra time would have helped
          a lot. I'd also meet with the engineers before starting the design. I
          only met with them twice, once early on and once at the very end, so
          most of their feedback came after the features were already built.
        </p>
      </Question>
    </ProjectPage>
  );
}
