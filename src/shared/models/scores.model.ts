export class Scores {
    resources: number;
    technology: number;
    population: number;
    finances: number;

    constructor(scores: Scores) {
      this.resources = scores.resources;
      this.technology = scores.technology;
      this.population = scores.population;
      this.finances = scores.finances;
    }
}