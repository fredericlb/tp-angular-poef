import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {

  isDone = false;
  hasWon: boolean;

  constructor() { }

  ngOnInit() {
    timer(6000)
      .subscribe(() => {
        console.log('terminé');
      });
  }

  onResult(hasWon) {
    this.isDone = true;
    this.hasWon = hasWon;
  }
}
