export class Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  nutriscore: string;

  constructor(id: string, name: string, ingredients: string[], instructions: string, nutriscore: string) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.nutriscore = nutriscore;
  }
}
