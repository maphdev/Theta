import { Choice } from "./choice.model";

export class Problem {
    text: string;
    firstChoice: Choice;
    secondChoice: Choice;

    constructor(problem: Problem) {
        this.text = problem.text;
        this.firstChoice = problem.firstChoice;
        this.secondChoice = problem.secondChoice;
    }
}