import { IRecipeGateway, IRecipeRepository } from "@/domains/models/recipe.interface";
import { Recipe } from "@/domains/entities/recipe.entity";

export class RecipeRepository implements IRecipeRepository {
  private recipeGateway: IRecipeGateway;

  constructor(recipeGateway: IRecipeGateway) {
    this.recipeGateway = recipeGateway;
  }

  async getAllRecipes(): Promise<Recipe[]> {
    const recipesData = await this.recipeGateway.fetchRecipes();
    return recipesData.map((recipe) => new Recipe(recipe.id, recipe.name, recipe.ingredients, recipe.instructions, recipe.nutriscore));
  }
}
