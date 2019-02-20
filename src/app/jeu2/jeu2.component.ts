import { Component, OnInit } from '@angular/core';
import {Verbe} from '../../Verbe';
import {timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {VerbesService} from '../verbes.service';
import {GameService} from '../game.service';


@Component({
  selector: 'app-jeu2',
  templateUrl: './jeu2.component.html',
  styleUrls: ['./jeu2.component.css']
})
export class Jeu2Component implements OnInit {

  currentVerb: Verbe = null;
  isDone = false;
  http: HttpClient;
  router: Router;

  constructor(http: HttpClient, router: Router,
              public verbesService: VerbesService,
              public gameService: GameService) {
    this.http = http;
    this.router = router;
  }

  createQuestion() {
    this.currentVerb = null;
    this.verbesService.getRemoteRandom(verb => {
      this.currentVerb = verb;
    });
  }

  ngOnInit() {
    this.createQuestion();
    timer(20000)
      .subscribe(() => {
        this.isDone = true;
        this.router.navigate(['/score']);
      });
    /*this.verbesService.fetch(() => {
      this.createQuestion();

    });*/
  }

  hasAnswered(won: boolean) {
    this.createQuestion();
  }
}
