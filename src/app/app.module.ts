import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LegumeComponent } from './legume/legume.component';
import { LegumesComponent } from './legumes/legumes.component';
import { VilleComponent } from './ville/ville.component';
import {FormsModule} from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import {VillesComponent} from './villes/villes.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { JeuComponent } from './jeu/jeu.component';
import { PartieComponent } from './partie/partie.component';
import { Jeu2Component } from './jeu2/jeu2.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LegumeComponent,
    VilleComponent,
    InscriptionComponent,
    LegumesComponent,
    VillesComponent,
    CarouselComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    JeuComponent,
    PartieComponent,
    Jeu2Component,
    QuestionComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
