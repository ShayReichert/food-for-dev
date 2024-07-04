export class User {
  id: string;
  name: string;
  email: string;
  preferences: string[];
  goals: string[];

  constructor(id: string, name: string, email: string, preferences: string[], goals: string[]) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.preferences = preferences;
    this.goals = goals;
  }
}
