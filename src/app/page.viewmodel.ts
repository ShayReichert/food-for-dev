import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchRecipes } from "../redux/slices/recipes.slice";

export const useRecipesViewModel = () => {
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
