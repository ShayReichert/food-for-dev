import { faker } from "@faker-js/faker";
import { Recipe } from "../../domains/entities/recipe.entity";

export const generateFakeRecipe = (): Recipe => {
  const id = faker.string.uuid();
  const name = faker.commerce.productName();
  const ingredients = Array.from({ length: 5 }, () => faker.commerce.productName());
  const instructions = faker.lorem.paragraphs(3);
  const nutriscore = faker.helpers.arrayElement(["A", "B", "C", "D", "E"]);
  const imageUrl = faker.image.urlLoremFlickr({ width: 800, height: 600, category: "recipe" });
  const rating = faker.number.float({ min: 1, max: 5, multipleOf: 0.1 });
  const time = faker.number.int({ min: 10, max: 120 }).toString();
  const isFavorited = faker.datatype.boolean();
  const isPopular = faker.datatype.boolean();

  return new Recipe(id, name, ingredients, instructions, nutriscore, imageUrl, rating, time, isFavorited, isPopular);
};

export const generateFakeRecipes = (count: number): Recipe[] => {
  return Array.from({ length: count }, generateFakeRecipe);
};
