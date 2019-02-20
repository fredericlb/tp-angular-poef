import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Utilisateur} from '../../Utilisateur';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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
    niveau: 'débutant',
    idville: 2
  };

  constructor(router: Router, private http: HttpClient) {
    this.router = router;
  }

  ngOnInit() {
  }

  send() {
    const body = this.instance;
    this.http.post('http://localhost:8000/joueur', body)
      .subscribe(() => {
        this.router.navigate(['/jeu']);
      });
  }

}
