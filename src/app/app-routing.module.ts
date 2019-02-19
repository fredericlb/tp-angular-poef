import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {LegumesComponent} from './legumes/legumes.component';
import {VillesComponent} from './villes/villes.component';

const routes: Routes = [
  { path : 'villes', component: VillesComponent},
  { path : 'legumes', component: LegumesComponent},
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
