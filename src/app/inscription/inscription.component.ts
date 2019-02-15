import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Utilisateur} from '../../Utilisateur';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  @Output()
  done = new EventEmitter<Utilisateur>();

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

  send() {
    this.done.emit(this.instance);
  }

}
