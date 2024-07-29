import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchRecipes } from "../redux/slices/recipes.slice";

export const useRecipesViewModel = () => {
  const dispatch: AppDispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const recipeStatus = useSelector((state: RootState) => state.recipes.status);
  const recipeError = useSelector((state: RootState) => state.recipes.error);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (recipeStatus === "idle") {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipeStatus]);

  const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()));

  const popularRecipes = recipes
    .filter((recipe) => recipe.isPopular)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  return {
    recipes: filteredRecipes,
    popularRecipes,
    recipeStatus,
    recipeError,
    query,
    setQuery,
  };
};
