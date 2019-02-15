import { Component, OnInit } from '@angular/core';
import {Verbe} from '../../Verbe';
import Verbes from '../../Verbes';
import {timer} from 'rxjs';

@Component({
  selector: 'app-jeu2',
  templateUrl: './jeu2.component.html',
  styleUrls: ['./jeu2.component.css']
})
export class Jeu2Component implements OnInit {

  currentVerb: Verbe = null;
  isDone = false;
  score = 0;

  constructor() { }

  createQuestion() {
    const idx = Math.floor(Verbes.length * Math.random());
    this.currentVerb = Verbes[idx];
  }

  ngOnInit() {
    this.createQuestion();

    timer(20000)
      .subscribe(() => {
        this.isDone = true;
      });
  }

  hasAnswered(won: boolean) {
    if (won) {
      this.score ++;
    }
    console.log(this.score);
    this.createQuestion();
  }
}
