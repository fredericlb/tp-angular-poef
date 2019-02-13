import { Component, OnInit } from '@angular/core';
import {Legume} from '../../Legume';
import Legumes from '../../Legumes';

@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.component.html',
  styleUrls: ['./legumes.component.css']
})
export class LegumesComponent implements OnInit {

  instance: Legume = {
    nom: 'Courgette',
    couleur: 'Vert'
  };

  list = Legumes;

  afficheListe = true;

  constructor() { }

  ngOnInit() {
  }

  afficher() {
    console.log(this.instance.couleur);
  }
}
