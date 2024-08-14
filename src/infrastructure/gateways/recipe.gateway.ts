import { IRecipeGateway } from "@/domains/models/recipe.interface";
import { Recipe } from "@/domains/entities/recipe.entity";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export class RecipeGateway implements IRecipeGateway {
  async fetchRecipes(): Promise<Recipe[]> {
    try {
      const response = await axios.get(`${baseURL}/recipes/category/2?page=1&size=50`); // Remplacez par une catégorie dynamique
      const recipesData = response.data.items;

      return recipesData.map(
        (recipe: any) =>
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
    } catch (error) {
      console.error("Error fetching recipes from API", error);
      throw new Error("Unable to fetch recipes");
    }
  }
}
