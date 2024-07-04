import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../domains/entities/recipe.entity";
import { getRecipes } from "../../domains/usecases/getRecipes.usecase";
import { IRecipeGateway } from "../../domains/models/recipe.interface";
import { RecipeGateway } from "@/infrastructure/gateways/recipe.gateway";
import { RecipeRepository } from "../../infrastructure/repositories/recipe.repository";

const recipeGateway: IRecipeGateway = new RecipeGateway();
const recipeRepository = new RecipeRepository(recipeGateway);

interface RecipesState {
  recipes: Recipe[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: RecipesState = {
  recipes: [],
  status: "idle",
  error: null,
};

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  return await getRecipes(recipeRepository);
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default recipesSlice.reducer;
