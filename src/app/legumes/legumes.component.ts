import { Component, OnInit } from '@angular/core';
import {Legume} from '../../Legume';
import {HttpClient} from '@angular/common/http';

const URL = 'https://raw.githubusercontent.com/fredericlb/tp-angular-poef/master/examples/Legumes.json';
@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.component.html',
  styleUrls: ['./legumes.component.css']
})
export class LegumesComponent implements OnInit {

  list: Legume[] = null;

  afficheListe = true;
  http: HttpClient;

  constructor(
    http: HttpClient
  ) {
    this.http = http;
  }

  ngOnInit() {
    setTimeout(() => {
      this.http.get(URL)
        .subscribe((resp: Legume[]) => {
          this.list = resp;
        });
    }, 5000);
  }

}
