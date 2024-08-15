import { createContainer, asClass, asFunction, asValue } from "awilix";
import { RecipeGateway } from "../infrastructure/gateways/recipe.gateway";
import { RecipeRepository } from "../infrastructure/repositories/recipe.repository";
import { fetchRecipes } from "../redux/slices/recipes.slice";
import { useRecipesViewModel } from "../app/page.viewmodel";
import { CategoryGateway } from "../infrastructure/gateways/category.gateway";

const container = createContainer();

container.register({
  recipeGateway: asClass(RecipeGateway).singleton(),
  recipeRepository: asClass(RecipeRepository).singleton(),
  fetchRecipes: asFunction(fetchRecipes),
  useRecipesViewModel: asFunction(useRecipesViewModel),
  categoryGateway: asClass(CategoryGateway).singleton(),
});

export default container;
