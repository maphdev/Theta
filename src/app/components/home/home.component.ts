import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'theta-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  public goToBoard(): void {
    this.router.navigate(['board'])
  }

}
