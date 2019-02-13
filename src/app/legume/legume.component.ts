import { Component, OnInit } from '@angular/core';
import {Legume} from '../../Legume';
import Legumes from '../../Legumes';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {

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
