import { Component } from '@angular/core';
import {Utilisateur} from '../Utilisateur';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Utilisateur = null;
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  onInscriptionDone(user) {
    this.user = user;
  }

  goToLegumes() {
    /**
     *  LA
     */
    this.router.navigate(['/legumes']);
  }
}
