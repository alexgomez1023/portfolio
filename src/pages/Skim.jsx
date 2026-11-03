import Arrow from "../components/SquigglyArrow.jsx";
import ProjectPage, {
  Facts,
  Fact,
  Question,
  Todo,
} from "../components/ProjectPage.jsx";
import Sketch, { GraphPaper } from "../components/Sketch.jsx";
import Phone from "../components/Phone.jsx";
import ScribLink from "../components/ScribLink.jsx";
import RecipeSketch from "../components/sketches/RecipeSketch.jsx";
import { RecipeDiagram } from "../components/sketches/Diagrams.jsx";
import { links } from "../data/links.js";
import { screenshots } from "../data/screenshots.js";

export default function Skim() {
  return (
    <ProjectPage
      title="Skim"
      subtitle="Personal project"
      description="A recipe and meal planning app I'm building for iOS and Android."
      next={{
        to: "/projects/cert-tracker",
        title: "Software Certification Tracker",
        paper: "straw",
        rotate: -2,
      }}
    >
      {/* hero sketch: no caption */}
      <Sketch paper="peach" rotate={1} tapeR={3}>
        <RecipeSketch />
      </Sketch>

      <Facts>
        <Fact label="platforms">iOS + Android</Fact>
        <Fact label="stack">React Native, FastAPI, MySQL</Fact>
        <Fact label="links">
          {/* TODO: swap for the Skim repo link */}
          <ScribLink href={links.github}>
            GitHub <Arrow />
          </ScribLink>
        </Fact>
      </Facts>

      <Question title="What problem does it solve?">
        <p>
          My mom cooks a lot and kept losing track of recipes saved across
          Instagram, YouTube, and recipe websites. Apps that solve this already
          exist, but most cost money, are slow to import recipes, and feel
          clunky to use. Skim saves recipes from anywhere in one place and
          turns them into a plan for the week.
        </p>
      </Question>

      <Question title="What did I build?">
        <p>
          A recipe and meal planning app for iOS and Android, launching on the
          App Store soon. It grew out of RecipePal, a recipe website I
          prototyped earlier with React and C#. I moved it to mobile because
          people cook with their phone in the kitchen, not a laptop.
        </p>

        <div className="phone-row">
          {/* <img src="../assets/recipe_import.png"></img> */}
          <Phone
            caption="Recipe import"
            {...screenshots.recipeImport}
            rotate={-3}
            tapeR={3}
          />
          <Phone
            caption="Home Screen"
            {...screenshots.homeScreen}
            rotate={2}
            tapeX="40%"
            tapeR={-4}
          />
          <Phone
            caption="Meal Planning"
            {...screenshots.mealPlan}
            rotate={-1}
            tapeX="55%"
            tapeR={2}
          />
        </div>
      </Question>

      <Question title="How does it work?">
        <p>
          Paste a link and the FastAPI backend runs the page through an AI
          parser, then saves the recipe to your library as structured
          ingredients, quantities, and steps. You can assign saved recipes to
          breakfast, lunch, dinner and snack slots across the week, or have the
          app generate a plan that fills only the slots you left empty. The
          shopping list comes from the ingredients in that week's plan.
        </p>
        <Sketch
          paper="peach"
          caption="from a link to a shopping list"
          rotate={-0.8}
          tapeX="70%"
          tapeR={-3}
        >
          <GraphPaper>
            <RecipeDiagram />
          </GraphPaper>
        </Sketch>
      </Question>

      <Question title="What was hard?">
        <p>
          Parsing. A recipe website, an Instagram caption, and a YouTube video
          all store recipes differently, so one approach didn't work for all of
          them. I tested the parser against many real Instagram and YouTube
          posts, found where it broke, and fixed each edge case until the output
          was reliable.
        </p>
        <p>
          Combining ingredients for the shopping list was also tricky, since the
          same ingredient can show up in different units and wording across
          recipes.
        </p>
      </Question>

      <Question title="What's next?">
        <p>
          I'm planning to launch the app on the app store in the next coming
          weeks.
        </p>
      </Question>
    </ProjectPage>
  );
}
