import { Recipe } from "@/domains/entities/recipe.entity";
import { IRecipeGateway, IRecipeRepository } from "@/domains/models/recipe.interface";

export class RecipeRepository implements IRecipeRepository {
  private recipeGateway: IRecipeGateway;

  constructor(recipeGateway: IRecipeGateway) {
    this.recipeGateway = recipeGateway;
  }

  async getAllRecipes(categoryId: number): Promise<Recipe[]> {
    const recipesData = await this.recipeGateway.fetchRecipes(categoryId);
    return recipesData.map(
      (recipe) =>
        new Recipe(
          recipe.id,
          recipe.name,
          recipe.rating,
          recipe.total_time,
          recipe.cook_time,
          recipe.preparation_time,
          recipe.pause_time,
          recipe.difficulty,
          recipe.cost,
          recipe.nb_personne,
          recipe.nb_commentary,
          recipe.category_id
        )
    );
  }
}
