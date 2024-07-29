"use client";

import React from "react";
import container from "../di/container";
import { Recipe } from "../domains/entities/recipe.entity";
import Carousel from "../components/Carousel";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const { recipes, popularRecipes, recipeStatus, recipeError, query, setQuery } = container.resolve("useRecipesViewModel");

  return (
    <>
      <Carousel recipes={popularRecipes} />
      <div className="min-h-screen bg-gray-100 p-8">
        <SearchBar query={query} setQuery={setQuery} />
        {recipeStatus === "loading" && <div className="text-center text-gray-500">Loading recipes...</div>}
        {recipeStatus === "succeeded" && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe: Recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </ul>
        )}
        {recipeStatus === "failed" && <div className="text-center text-red-500">{recipeError}</div>}
      </div>
    </>
  );
}
