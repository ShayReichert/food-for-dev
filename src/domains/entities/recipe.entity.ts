export class Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  nutriscore: string;
  imageUrl: string;
  rating: number;
  time: string;
  isFavorited: boolean;
  isPopular: boolean;

  constructor(
    id: string,
    name: string,
    ingredients: string[],
    instructions: string,
    nutriscore: string,
    imageUrl: string,
    rating: number,
    time: string,
    isFavorited: boolean = false,
    isPopular: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.nutriscore = nutriscore;
    this.imageUrl = imageUrl;
    this.rating = rating;
    this.time = time;
    this.isFavorited = isFavorited;
    this.isPopular = isPopular;
  }
}
