import { faker } from "@faker-js/faker";

export interface Goal {
  id: string;
  name: string;
}

export const generateFakeGoal = (): Goal => ({
  id: faker.string.uuid(),
  name: faker.helpers.arrayElement(["Weight Loss", "Muscle Gain", "Healthy Eating", "More Energy"]),
});

export const generateFakeGoals = (count: number): Goal[] => {
  return Array.from({ length: count }, generateFakeGoal);
};
