import { Component, OnInit } from '@angular/core';
import {Ville} from '../../Ville';
import Villes from '../../Villes';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  instance: Ville = {
    nom: 'Lyon',
    nombreHabitants: 500000
  }

  list = Villes;

  selectedNombreHabitants = '';

  constructor() { }

  ngOnInit() {
  }

}
