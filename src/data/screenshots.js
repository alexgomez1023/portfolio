// Every phone screenshot on the site, ready to spread onto <Phone>:
//
//   import { screenshots } from "../data/screenshots.js";
//   <Phone {...screenshots.recipeImport} caption="Recipe import" />
//
// Each screenshot has three copies: 190, 380 and 570px wide (1x/2x/3x of the
// 190px phone). To add one, import its three files and add an entry below.
import recipeImport190 from "../assets/recipe_import-190.webp";
import recipeImport380 from "../assets/recipe_import-380.webp";
import recipeImport570 from "../assets/recipe_import-570.webp";
import homeScreen190 from "../assets/home_screen-190.webp";
import homeScreen380 from "../assets/home_screen-380.webp";
import homeScreen570 from "../assets/home_screen-570.webp";
import mealPlan190 from "../assets/meal_plan-190.webp";
import mealPlan380 from "../assets/meal_plan-380.webp";
import mealPlan570 from "../assets/meal_plan-570.webp";

// Turns the three sizes into the { src, srcSet } props <Phone> expects.
function shot(s190, s380, s570) {
  return {
    src: s380, // fallback for browsers that ignore srcSet
    srcSet: `${s190} 190w, ${s380} 380w, ${s570} 570w`,
  };
}

export const screenshots = {
  recipeImport: shot(recipeImport190, recipeImport380, recipeImport570),
  homeScreen: shot(homeScreen190, homeScreen380, homeScreen570),
  mealPlan: shot(mealPlan190, mealPlan380, mealPlan570),
};
