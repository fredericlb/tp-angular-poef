import { Component, OnInit } from '@angular/core';
import {Verbe} from '../../Verbe';
import {timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

const URL = 'https://raw.githubusercontent.com/fredericlb/tp-angular-poef/master/examples/Verbes.json';

@Component({
  selector: 'app-jeu2',
  templateUrl: './jeu2.component.html',
  styleUrls: ['./jeu2.component.css']
})
export class Jeu2Component implements OnInit {

  currentVerb: Verbe = null;
  isDone = false;
  score = 0;
  verbes: Verbe[] = null;
  http: HttpClient;
  router: Router;

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }

  createQuestion() {
    const idx = Math.floor(this.verbes.length * Math.random());
    this.currentVerb = this.verbes[idx];
  }

  ngOnInit() {
    this.http.get(URL).subscribe((resp: Verbe[]) => {
      this.verbes = resp;
      this.createQuestion();
      timer(20000)
        .subscribe(() => {
          this.isDone = true;
          this.router.navigate(['/score', this.score]);
        });
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
