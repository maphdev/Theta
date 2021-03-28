import { Scores } from "./scores.model";

export class Choice {
    text: string;
    consequences: Scores;

    constructor(choice: Choice) {
        this.text = choice.text;
        this.consequences = choice.consequences;
    }
}