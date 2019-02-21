import { Injectable } from '@angular/core';
import {Verbe} from '../Verbe';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public playerId: number;
  public partieId: number;

  constructor(
    private http: HttpClient
  ) { }

  /*check(v: Verbe, preterit: string, participePasse: string) {
    return (v.preterit === preterit &&
      v.participePasse === participePasse);
  }*/

  updateScore(v: Verbe, preterit: string, participePasse: string) {
    this.http.get(`http://localhost:8000/partie/${this.partieId}/update?id=${v.id}&preterit=${preterit}&participePasse=${participePasse}`);
  }

  createPartie(cb) {
    this.http.post(`http://localhost:8000/partie/${this.playerId}`, {}).subscribe((r: number) => {
      this.partieId = r;
      cb();
    });
  }

  getScore(cb) {
    this.http.get(`http://localhost:8000/partie/${this.partieId}/score`).subscribe((r: number) => {
      cb(r);
    });
  }
}
