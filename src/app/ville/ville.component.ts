import {Component, Input, OnInit} from '@angular/core';
import {Ville} from '../../Ville';
import Villes from '../../Villes';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  @Input()
  nombreHabitants: number;

  constructor() { }

  ngOnInit() {
  }

}
