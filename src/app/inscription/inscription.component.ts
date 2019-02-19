import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Utilisateur} from '../../Utilisateur';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  router: Router;

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

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  send() {
    this.done.emit(this.instance);
    this.router.navigate(['/jeu']);
  }

}
