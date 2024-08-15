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
  const [categoryId, setCategoryId] = useState<number | null>(null);

  useEffect(() => {
    if (categoryId !== null) {
      dispatch(fetchRecipes(categoryId));
    }
  }, [dispatch, categoryId]);

  const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()));

  const popularRecipes = recipes
    .filter((recipe) => recipe.rating >= 4.5 && recipe.rating <= 5)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  return {
    recipes: filteredRecipes,
    popularRecipes,
    recipeStatus,
    recipeError,
    query,
    setQuery,
    setCategoryId,
  };
};
