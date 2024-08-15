import { Recipe } from "../../domains/entities/recipe.entity";

export interface IRecipeRepository {
  getAllRecipes(categoryId: number): Promise<Recipe[]>;
}

export interface IRecipeGateway {
  fetchRecipes(categoryId: number): Promise<any[]>;
}
