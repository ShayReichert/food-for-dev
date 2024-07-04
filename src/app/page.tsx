"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchRecipes } from "../redux/slices/recipes.slice";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const recipeStatus = useSelector((state: RootState) => state.recipes.status);
  const recipeError = useSelector((state: RootState) => state.recipes.error);

  useEffect(() => {
    if (recipeStatus === "idle") {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipeStatus]);

  // console.log(recipes, recipeStatus, recipeError);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe List</h1>
      {recipeStatus === "loading" && <div className="text-center text-gray-500">Loading recipes...</div>}
      {recipeStatus === "succeeded" && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
              <p className="text-gray-700 mb-4">Nutriscore: {recipe.nutriscore}</p>
              <p className="text-gray-500">{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      )}
      {recipeStatus === "failed" && <div className="text-center text-red-500">{recipeError}</div>}
    </div>
  );
}
