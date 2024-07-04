import { Recipe } from "../../domains/entities/recipe.entity";

export interface IRecipeRepository {
  getAllRecipes(): Promise<Recipe[]>;
}

export interface IRecipeGateway {
  fetchRecipes(): Promise<any[]>;
}
