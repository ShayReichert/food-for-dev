import { faker } from "@faker-js/faker";
import { generateFakeGoals } from "./goals";

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: string[];
  goals: string[];
}

export const generateFakeUser = (): User => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  preferences: faker.helpers.arrayElements(["Low Carb", "High Protein", "Dairy Free", "Gluten Free"], 3),
  goals: generateFakeGoals(2).map((goal) => goal.name),
});

export const generateFakeUsers = (count: number): User[] => {
  return Array.from({ length: count }, generateFakeUser);
};
