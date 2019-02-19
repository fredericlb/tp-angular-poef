import { Injectable } from '@angular/core';
import {Verbe} from '../Verbe';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public score = 0;

  constructor() { }

  check(v: Verbe, preterit: string, participePasse: string) {
    return (v.preterit === preterit &&
      v.participePasse === participePasse);
  }

  updateScore(v: Verbe, preterit: string, participePasse: string) {
    if (this.check(v, preterit, participePasse)) {
      this.score ++;
    }
  }
}
