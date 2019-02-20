import { Injectable } from '@angular/core';
import {Verbe} from '../Verbe';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public score = 0;
  public playerId: number;

  constructor(
    private http: HttpClient
  ) { }

  /*check(v: Verbe, preterit: string, participePasse: string) {
    return (v.preterit === preterit &&
      v.participePasse === participePasse);
  }*/

  updateScore(v: Verbe, preterit: string, participePasse: string) {
    this.http.get('http://localhost:8000/verbes/check?id=' + v.id + '&preterit=' + preterit + '&participePasse=' + participePasse).subscribe(hasWon => {
      if (hasWon) {
        this.score ++;
      }
    });
  }
}
