import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchRecipes } from "../redux/slices/recipes.slice";
import { IRecipeRepository } from "../domains/models/recipe.interface";

export const useRecipesViewModel = ({ recipeRepository }: { recipeRepository: IRecipeRepository }) => {
  const dispatch: AppDispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const recipeStatus = useSelector((state: RootState) => state.recipes.status);
  const recipeError = useSelector((state: RootState) => state.recipes.error);

  useEffect(() => {
    if (recipeStatus === "idle") {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipeStatus]);

  return {
    recipes,
    recipeStatus,
    recipeError,
  };
};
