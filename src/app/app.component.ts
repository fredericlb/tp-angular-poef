import { Component } from '@angular/core';
import {Utilisateur} from '../Utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Utilisateur = null;

  onInscriptionDone(user) {
    this.user = user;
  }
}
