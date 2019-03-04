import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  route: ActivatedRoute;
  score: number = null;

  constructor(route: ActivatedRoute, public gameService: GameService) {
    this.route = route;
  }

  ngOnInit() {
    this.gameService.getScore(score => {
        this.score = score;
    });
  }
}
