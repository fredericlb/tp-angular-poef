import { Injectable } from '@angular/core';
import {Legume} from '../Legume';
import {HttpClient} from '@angular/common/http';

const URL = 'https://raw.githubusercontent.com/fredericlb/tp-angular-poef/master/examples/Legumes.json';

@Injectable({
  providedIn: 'root'
})
export class LegumesService {

  list: Legume[] = null;

  constructor(
      private http: HttpClient
  ) { }

  fetch() {
      this.http.get(URL)
          .subscribe((resp: Legume[]) => {
            this.list = resp;
          });
  }
}
