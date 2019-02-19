import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {LegumesComponent} from './legumes/legumes.component';
import {VillesComponent} from './villes/villes.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {Jeu2Component} from './jeu2/jeu2.component';
import {ScoreComponent} from './score/score.component';

const routes: Routes = [
  { path : 'inscription', component: InscriptionComponent},
  { path : 'jeu', component: Jeu2Component},
  { path : 'score/:score', component: ScoreComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
