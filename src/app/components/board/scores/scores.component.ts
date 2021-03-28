import { Component, Input } from '@angular/core';
import { Scores } from 'src/shared/models/scores.model';

@Component({
  selector: 'theta-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent {

  @Input()
  scores: Scores;

}
