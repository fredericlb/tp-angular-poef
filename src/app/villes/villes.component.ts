import { Component, OnInit } from '@angular/core';
import {Ville} from '../../Ville';
import Villes from '../../Villes';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
})
export class VillesComponent implements OnInit {

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
