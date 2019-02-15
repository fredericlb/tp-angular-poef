import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {

  isDone = false;
  hasWon = false;

  constructor() { }

  ngOnInit() {
    timer(6000)
      .subscribe(this.isFinished.bind(this));
  }

  isFinished() {
    console.log(this.hasWon);
  }

  onResult(hasWon) {
    this.isDone = true;
    this.hasWon = hasWon;
  }
}
