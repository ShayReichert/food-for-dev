"use client";

import React from "react";
import container from "../di/container";
import { Recipe } from "../domains/entities/recipe.entity";
import Carousel from "../components/Carousel";

export default function Home() {
  const { recipes, recipeStatus, recipeError } = container.resolve("useRecipesViewModel");

  // Placeholder for popular recipes (replace with actual data)
  const popularRecipes = recipes.slice(0, 5).map((recipe: Recipe) => ({
    id: recipe.id,
    name: recipe.name,
    imageUrl: "https://via.placeholder.com/800x600", // Replace with actual image URL
  }));
  return (
    <>
      <Carousel recipes={popularRecipes} />

      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Recipe List</h1>
        {recipeStatus === "loading" && <div className="text-center text-gray-500">Loading recipes...</div>}
        {recipeStatus === "succeeded" && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe: Recipe) => (
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
    </>
  );
}
