import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {GameService} from '../game.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private gameService: GameService
  ) { }

  ngOnInit() {

  }

  send() {
    const body = {
      email: this.email,
      motdepasse: this.password
    };

    this.http.post('http://localhost:8000/connexion', body)
      .subscribe((r: any) => {
        if (r == null) {
          alert('Identifiant ou mot de passe incorrect');
        } else {
          this.gameService.playerId = r;
          this.router.navigate(['/']);
        }
      });
  }
}
