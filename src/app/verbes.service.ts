import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Verbe} from '../Verbe';

const URL = 'https://raw.githubusercontent.com/fredericlb/tp-angular-poef/master/examples/Verbes.json';

@Injectable({
  providedIn: 'root'
})
export class VerbesService {

  list: Verbe[] = null;

  constructor(
      private http: HttpClient
  ) { }

  fetch(cb) {
    this.http.get(URL).subscribe((resp: Verbe[]) => {
      this.list = resp;
      cb();
    });
  }

  getRandom() {
    const idx = Math.floor(this.list.length * Math.random());
    return this.list[idx];
  }

  getRemoteRandom(cb) {
    this.http.get('http://localhost:8000/verbes/random').subscribe((verb) => {
      cb(verb);
    });
  }
}
