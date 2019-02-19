import { Component, OnInit } from '@angular/core';
import {Legume} from '../../Legume';
import {HttpClient} from '@angular/common/http';
import {LegumesService} from '../legumes.service';


@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.component.html',
  styleUrls: ['./legumes.component.css']
})
export class LegumesComponent implements OnInit {

  afficheListe = true;

  constructor(
      public legumesService: LegumesService
  ) {}

  ngOnInit() {
    this.legumesService.fetch();
  }

}
