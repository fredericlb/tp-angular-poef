import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../Utilisateur';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  instance: Utilisateur = {
    nom: '',
    prenom: '',
    email: '',
    motdepasse: '',
    niveau: 1,
    ville: ''
  };

  constructor() { }

  ngOnInit() {
  }

  afficher() {
    console.log(this.instance);
  }

}
