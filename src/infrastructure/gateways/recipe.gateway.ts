import { IRecipeGateway } from "@/domains/models/recipe.interface";
import { generateFakeRecipes } from "../../utils/fakeData/recipes";

export class RecipeGateway implements IRecipeGateway {
  async fetchRecipes(): Promise<any[]> {
    return generateFakeRecipes(10);
  }
}
