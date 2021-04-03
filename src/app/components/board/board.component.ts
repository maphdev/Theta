import { Component, OnInit } from '@angular/core';
import { Scores } from 'src/shared/models/scores.model';
import { cardDeck, upperOutcomes, lowerOutcomes, winningCard } from 'src/assets/mock/data';
import { Card } from 'src/shared/models/card.model';
import { CardTypeEnum } from 'src/shared/enums/card-type.enum';

@Component({
  selector: 'theta-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  scores: Scores;
  currentCard: Card;
  currentIndexCard: number;
  counter: number;

  // burger menu
  toggled = false;

  constructor() { }

  ngOnInit(): void {
    this.initGame();
  }

  onChoice(scores: Scores) {
    if (this.currentCard.cardType === CardTypeEnum.LOSS) {
      this.initGame();
    } else {
      this.updateScore(scores);
      this.setNewCard();
    }
  }

  initGame() {
    this.scores = new Scores({
      resources: 5,
      technology: 5,
      population: 5,
      finances: 5
    });
    this.currentIndexCard = 0;
    this.currentCard = cardDeck[this.currentIndexCard];
    this.counter = 0;
  }

  updateScore(scores: Scores) {
    this.scores.resources = Math.min(10, Math.max(0, this.scores.resources + scores.resources));
    this.scores.technology = Math.min(10, Math.max(0, this.scores.technology + scores.technology));
    this.scores.population = Math.min(10, Math.max(0, this.scores.population + scores.population));
    this.scores.finances = Math.min(10, Math.max(0, this.scores.finances + scores.finances));
    this.counter += 1;
  }

  setNewCard() {
    if (this.scores.resources === 0) {
      this.currentIndexCard = null;
      this.currentCard = lowerOutcomes.resources;
    } else if (this.scores.resources === 10) {
      this.currentIndexCard = null;
      this.currentCard = upperOutcomes.resources;
    } else if (this.scores.technology === 0) {
      this.currentIndexCard = null;
      this.currentCard = lowerOutcomes.technology;
    } else if (this.scores.technology === 10) {
      this.currentIndexCard = null;
      this.currentCard = upperOutcomes.technology;
    } else if (this.scores.population === 0) {
      this.currentIndexCard = null;
      this.currentCard = lowerOutcomes.population;
    } else if (this.scores.population === 10) {
      this.currentIndexCard = null;
      this.currentCard = upperOutcomes.population;
    } else if (this.scores.finances === 0) {
      this.currentIndexCard = null;
      this.currentCard = lowerOutcomes.finances;
    } else if (this.scores.finances === 10) {
      this.currentIndexCard = null;
      this.currentCard = upperOutcomes.finances;
    } else {
      if (this.counter % 10 === 0) {
        this.currentCard = winningCard;
      } else {
        let newIndex = this.currentIndexCard + 1;
        if (newIndex >= cardDeck.length) {
          newIndex = 0;
        }
        this.currentIndexCard = newIndex;
        this.currentCard = cardDeck[this.currentIndexCard];
      }
    }
  }

  public showMenuTabs(): void {
    this.toggled = !this.toggled;
  }
}
