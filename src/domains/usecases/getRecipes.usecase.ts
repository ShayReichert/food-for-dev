import { Recipe } from "../entities/recipe.entity";
import { IRecipeRepository } from "../models/recipe.interface";

export const getRecipes = async (recipeRepository: IRecipeRepository, categoryId: number): Promise<Recipe[]> => {
  return await recipeRepository.getAllRecipes(categoryId);
};
