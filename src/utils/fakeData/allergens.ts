import { faker } from "@faker-js/faker";

export interface Allergen {
  id: string;
  name: string;
}

export const generateFakeAllergen = (): Allergen => ({
  id: faker.string.uuid(),
  name: faker.helpers.arrayElement(["Peanuts", "Gluten", "Dairy", "Shellfish", "Soy"]),
});

export const generateFakeAllergens = (count: number): Allergen[] => {
  return Array.from({ length: count }, generateFakeAllergen);
};
