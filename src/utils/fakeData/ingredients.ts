import { faker } from "@faker-js/faker";

export interface Ingredient {
  id: string;
  name: string;
  type: string;
}

export const generateFakeIngredient = (): Ingredient => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  type: faker.helpers.arrayElement(["vegetable", "fruit", "meat", "grain", "dairy"]),
});

export const generateFakeIngredients = (count: number): Ingredient[] => {
  return Array.from({ length: count }, generateFakeIngredient);
};
