"use client";

import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import RecipeCardSkeleton from "@/components/RecipeCard/RecipeCardSkeleton";
import SearchBar from "@/components/SearchBar/SearchBar";
import Carousel from "../components/Carousel/Carousel";
import container from "../di/container";
import { Recipe } from "../domains/entities/recipe.entity";

export default function Home() {
  const { recipes, popularRecipes, recipeStatus, recipeError, query, setQuery, setCategoryId } = container.resolve("useRecipesViewModel");

  return (
    <>
      <Carousel recipes={popularRecipes} />
      <div className="min-h-screen bg-gray-100 p-8">
        <SearchBar query={query} setQuery={setQuery} />
        <CategoryFilter categoryGateway={container.resolve("categoryGateway")} onSelectCategory={setCategoryId} />
        {recipeStatus === "loading" && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <RecipeCardSkeleton key={index} />
            ))}
          </ul>
        )}
        {recipeStatus === "succeeded" && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe: Recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </ul>
        )}
        {recipeStatus === "failed" && <div className="text-center text-red-500">{recipeError}</div>}
        {/* TODO : pagination */}
      </div>
    </>
  );
}
