import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  nombreSaisi: number;
  composantAffiche = 1;

  constructor() { }

  ngOnInit() {
  }

  precedent() {
    this.composantAffiche -= 1;
  }

  suivant() {
    this.composantAffiche += 1;
  }
}
