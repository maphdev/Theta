import { Problem } from "./problem.model";
import { CardTypeEnum } from "../enums/card-type.enum"

export class Card {
    cardType: CardTypeEnum;
    imagePath: string;
    characterName: string;
    problem: Problem;

    constructor(card: Card) {
        this.imagePath = card.imagePath;
        this.characterName = card.characterName;
        this.problem = card.problem;
    }
}