import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'theta-factor',
  templateUrl: './factor.component.html',
  styleUrls: ['./factor.component.scss']
})
export class FactorComponent implements OnInit {
  @Input()
  imagePath: string;
  @Input()
  imageSize: number = 40;
  @Input()
  score: number;

  constructor() { }

  ngOnInit(): void {
  }

}
