import Arrow from "../components/SquigglyArrow.jsx";
import ProjectPage, {
  Facts,
  Fact,
  Question,
  Todo,
} from "../components/ProjectPage.jsx";
import Sketch, { GraphPaper } from "../components/Sketch.jsx";
import FlashSketch from "../components/sketches/FlashSketch.jsx";
import { FlashDiagram } from "../components/sketches/Diagrams.jsx";

export default function ReprogrammingTool() {
  return (
    <ProjectPage
      title="Embedded Reprogramming Tool"
      subtitle="Collins Aerospace - Software Engineering Intern - Summer 2025"
      description="A Windows desktop application that reprograms embedded modules."
      next={{
        to: "/projects/recipeflow",
        title: "RecipeFlow",
        paper: "peach",
        rotate: -2,
      }}
    >
      {/* hero sketch: no caption */}
      <Sketch paper="sage" rotate={1} tapeR={3}>
        <FlashSketch />
      </Sketch>

      <Facts>
        <Fact label="role">SWE intern</Fact>
        <Fact label="stack">C#, Windows desktop, CAN bus</Fact>
        <Fact label="result">
          updates 2 weeks <Arrow /> 1&ndash;2 days
        </Fact>
      </Facts>

      <Question title="What was the Problem?">
        <p>
          Technicians installing seats on aircraft used an internal tool to
          reprogram the seat's embedded modules, like actuators, lumbar modules,
          and seat controllers. Engineers would use this tool too to test new
          updates on hardware. The tool was built about four years earlier in
          LabVIEW, a graphical programming language that few engineers on the
          team knew well, and it had little documentation. Its original author
          had moved on to other projects.
        </p>
        <p>
          Every program and seat system needed its own hardcoded version of the
          tool, so each new software release meant about two weeks of
          development, testing, and debugging. Reprogramming also failed now and
          then. Instead of continuing to patch the LabVIEW tool, I pitched
          rebuilding it in a language the team could maintain, and my manager
          agreed.
        </p>
      </Question>

      <Question title="What did I build?">
        <p>
          A Windows desktop app that reprograms the embedded modules in aircraft
          seats. I gathered requirements from my manager and the electrical
          engineering team, then owned the tool from first prototype to
          deployment. Technicians and engineers still use it today on programs
          like Lufthansa and Finnair.
        </p>
        <p>
          Using it is simple: plug a cable into the seat system, open the app,
          and click Start. Unlike the old tool, it isn't hardcoded per program.
          It can load any hex file and decides what to update from an external
          config mapping. That cut the time to support new software from 2 weeks
          to 1&ndash;2 days.
        </p>
      </Question>

      <Question title="How does it work?">
        <p>
          The app is written in C# and talks to the seat over CAN bus through a
          Kvaser USB-to-CAN adapter. When you click Start, it:
        </p>
        <ol>
          <li>Sets up CAN communication and finds every module on the bus.</li>
          <li>Reads each module's current software version.</li>
          <li>
            Checks those versions against the config mapping to see what needs
            updating.
          </li>
          <li>
            Flashes the hex files, configuration, application software, or both,
            one module at a time, since CAN can't reliably program several at
            once.
          </li>
        </ol>
        <p>
          Modules sometimes miss messages, so I added retries. That made the
          tool far more reliable than the old one.
        </p>
        <Sketch
          paper="sage"
          caption="CAN Bus Communication Visual"
          rotate={-0.8}
          tapeX="70%"
          tapeR={-3}
        >
          <GraphPaper>
            <FlashDiagram />
          </GraphPaper>
        </Sketch>
      </Question>

      <Question title="What was hard?">
        <p>
          I had never written C# before this project, so I learned it on the job
          along with the CAN protocols the modules use. I built on a CAN
          interface from an existing tool, which meant working in an established
          codebase without breaking it.
        </p>
        <p>
          The biggest problem was speed. The existing interface polled
          concurrent queues to track CAN messages. I replaced that with event
          handlers that process each message as it arrives, which cut flashing
          time for the largest module, the seat control module, from about 10
          minutes to 2.
        </p>
      </Question>

      <Question title="What would I do differently?">
        <p>
          I'd ask the engineer who built the original CAN tool for help sooner.
          He knew the problems I spent time working out on my own. I'd also use
          git more carefully, with branches for trying different approaches
          without risking working code.
        </p>
      </Question>
    </ProjectPage>
  );
}
