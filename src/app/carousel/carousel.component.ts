import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  nombreSaisi = 1;
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

  onChange(e) {
    this.nombreSaisi = e;
  }
}
