import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { animate, keyframes, transition, trigger } from "@angular/animations";
import * as kf from './keyframes';
import { Card } from 'src/shared/models/card.model';
import { Scores } from 'src/shared/models/scores.model';

@Component({
  selector: 'theta-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(500, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(500, keyframes(kf.swipeleft)))
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input()
  card: Card;

  @Output()
  onChoice: EventEmitter<Scores> = new EventEmitter<Scores>();

  animationState: string;

  constructor() { }

  ngOnInit(): void {}

  startAnimation(state: string) {
    if (!this.animationState) {
      this.animationState = state;
    }
    setTimeout(() => this.updateScores(state), 450);
  }

  updateScores(state: string): void {
    if (state === "swipeleft") {
      this.onChoice.emit(this.card.problem.firstChoice.consequences)
    } else {
      this.onChoice.emit(this.card.problem.secondChoice.consequences)
    }
  }

  resetAnimationState(state: string) {
    this.animationState = '';
  }
}
