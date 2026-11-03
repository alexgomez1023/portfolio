import Arrow from "../components/SquigglyArrow.jsx";
import ScribLink from "../components/ScribLink.jsx";
import { links } from "../data/links.js";
import "../styles/resume.css";

export default function Resume() {
  return (
    <main className="resume-page">
      <title>Résumé | Alex Gomez</title>
      <meta
        name="description"
        content="Résumé of Alex Gomez: computer science at NC State (AI concentration), two software engineering internships at Collins Aerospace."
      />

      <div className="resume-actions">
        <ScribLink to="/">
          <Arrow left /> Back
        </ScribLink>
        <a className="download" href="/resume.pdf" download>
          Download PDF
        </a>
      </div>

      <article className="resume-sheet">
        <header className="resume-head">
          <h1>Alexander Gomez</h1>
          <ul className="contact">
            <li>Raleigh, NC</li>
            <li>
              <ScribLink href={links.email}>alex.m.gomez10@gmail.com</ScribLink>
            </li>
            <li>
              <ScribLink href={links.linkedin}>LinkedIn</ScribLink>
            </li>
            <li>
              <ScribLink href={links.github}>github</ScribLink>
            </li>
            <li>US Citizen</li>
          </ul>
        </header>

        <section>
          <h2>Education</h2>

          <div className="entry">
            <div className="entry-head">
              <h3>North Carolina State University, Raleigh, NC</h3>
              <p className="entry-date">Expected Graduation: May 2027</p>
            </div>
            <div className="entry-head">
              <p className="entry-sub">
                Bachelor of Science: Computer Science, AI concentration
              </p>
              <p className="entry-date">Major GPA: 3.63/4.0</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Experience</h2>

          <div className="entry">
            <div className="entry-head">
              <h3>Collins Aerospace, Winston-Salem, NC</h3>
              <p className="entry-date">Jun&ndash;Aug 2026</p>
            </div>
            <p className="entry-sub">Software Engineer Intern</p>
            <ul>
              <li>
                Built a full-stack certification management platform adopted by
                15+ engineers across project, software, and systems teams,
                incorporating differing stakeholder priorities and reducing
                document lookup time from 20 minutes to 2 minutes (90%
                reduction)
              </li>
              <li>
                Spearheaded cross-team collaboration with engineering services
                to unlock previously ungranted Teamcenter SOA API access,
                building an automated data pipeline for real-time document sync
              </li>
              <li>
                Integrated an AI document parsing feature using LangChain and
                SSE (Server-Sent Events) to deliver instant feedback directly to
                the UI
              </li>
              <li>
                Participated in code quality and DevOps initiatives by
                conducting code reviews and optimizing GitLab CI/CD pipelines
                for team members to ensure deployment standards
              </li>
            </ul>
          </div>

          <div className="entry">
            <div className="entry-head">
              <h3>Collins Aerospace, Winston-Salem, NC</h3>
              <p className="entry-date">Jun&ndash;Aug 2025</p>
            </div>
            <p className="entry-sub">Software Engineer Intern</p>
            <ul>
              <li>
                Developed a scalable C# tool to reprogram and validate multiple
                embedded modules over CAN Bus messaging protocol
              </li>
              <li>
                Collaborated with Electrical Systems Engineers to gather
                software requirements and map tool functionality
              </li>
              <li>
                Followed a full Software Development Life Cycle, including
                requirements analysis, design, implementation, testing, and
                deployment, ensuring a robust and maintainable tool
              </li>
              <li>
                Reduced software update maintenance time for the tool from 2
                weeks to 1&ndash;2 days (85% reduction) by redesigning the tool
                to support multiple software file types
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Projects</h2>

          <div className="entry">
            <div className="entry-head">
              <h3>Skim: Receip Saver and Meal Planning Mobile App</h3>
              <p className="entry-date">Aug 2026&ndash;Present</p>
            </div>
            <p className="entry-sub">React Native / FastAPI / SQL</p>
            <ul>
              <li>
                Developed a recipe saver website to store and retrieve user
                recipes from over 100 external websites
              </li>
              <li>
                Integrated an AI-powered assistant allowing users to communicate
                directly to create, modify, and format saved recipes using
                Gemini's Flash API
              </li>
              <li>
                Built a RESTful backend API for authentication, web scraping,
                and recipe management, integrated with a PostgreSQL database for
                persistent storage
              </li>
            </ul>
          </div>

          <div className="entry">
            <div className="entry-head">
              <h3>Data Analysis Club Project Lead</h3>
              <p className="entry-date">Sept 2026&ndash;Present</p>
            </div>
            <p className="entry-sub">Python / Pandas / sklearn</p>
            <ul>
              <li>
                Led a 5-person team for a semester long project as part of the
                Data Analytics Club at NC State
              </li>
              <li></li>
            </ul>
          </div>

          <div className="entry">
            <div className="entry-head">
              <h3>CoffeeMaker: Project Lead</h3>
              <p className="entry-date">Jan&ndash;May 2026</p>
            </div>
            <p className="entry-sub">React / Java Spring Boot / SQL</p>
            <ul>
              <li>
                Led a 5-person team for a university engineering project,
                assigning tasks, coordinating responsibilities, and adapting
                user support based on team members' skill levels
              </li>
              <li>
                Facilitated weekly stand-ups and planning sessions to keep the
                team aligned on requirements, timelines, and deliverables
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Skills</h2>

          <dl className="skills">
            <div>
              <dt>Languages</dt>
              <dd>Python, Java, JavaScript, C#, SQL, C, CUDA, HTML/CSS</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>
                Git, GitLab CI/CD, Linux, AWS, Docker, Azure, Claude Code, Excel
              </dd>
            </div>
            <div>
              <dt>Frameworks</dt>
              <dd>React, Spring Boot, LangChain, ASP.NET, WPF, .NET MAUI</dd>
            </div>
          </dl>
        </section>
      </article>
    </main>
  );
}
