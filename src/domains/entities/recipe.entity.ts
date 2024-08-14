export class Recipe {
  id: number;
  name: string;
  rating: number;
  total_time: number;
  cook_time: number;
  preparation_time: number;
  pause_time: number;
  difficulty: string;
  cost: string;
  nb_personne: number;
  nb_commentary: number;
  category_id: number;

  constructor(
    id: number,
    name: string,
    rating: number,
    total_time: number,
    cook_time: number,
    preparation_time: number,
    pause_time: number,
    difficulty: string,
    cost: string,
    nb_personne: number,
    nb_commentary: number,
    category_id: number
  ) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.total_time = total_time;
    this.cook_time = cook_time;
    this.preparation_time = preparation_time;
    this.pause_time = pause_time;
    this.difficulty = difficulty;
    this.cost = cost;
    this.nb_personne = nb_personne;
    this.nb_commentary = nb_commentary;
    this.category_id = category_id;
  }
}
