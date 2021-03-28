import { Card } from "./card.model";

export class Outcomes {
    resources: Card;
    technology: Card;
    population: Card;
    finances: Card;

    constructor(outcomes: Outcomes) {
        this.resources = outcomes.resources;
        this.technology = outcomes.technology;
        this.population = outcomes.population;
        this.finances = outcomes.finances;
    }
}