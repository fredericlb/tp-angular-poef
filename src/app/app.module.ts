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
    Component3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
