// src/utils/fakeData/recipes.ts
import { faker } from "@faker-js/faker";
import { Recipe } from "../../domains/entities/recipe.entity";

export const generateFakeRecipe = (): Recipe => {
  const id = faker.string.uuid();
  const name = faker.commerce.productName();
  const ingredients = Array.from({ length: 5 }, () => faker.commerce.productName());
  const instructions = faker.lorem.paragraphs(3);
  const nutriscore = faker.helpers.arrayElement(["A", "B", "C", "D", "E"]);

  return new Recipe(id, name, ingredients, instructions, nutriscore);
};

export const generateFakeRecipes = (count: number): Recipe[] => {
  return Array.from({ length: count }, generateFakeRecipe);
};
