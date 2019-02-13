import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LegumeComponent } from './legume/legume.component';
import { LegumesComponent } from './legumes/legumes.component';
import { VilleComponent } from './ville/ville.component';
import {FormsModule} from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import {VillesComponent} from './villes/villes.component';

@NgModule({
  declarations: [
    AppComponent,
    LegumeComponent,
    VilleComponent,
    InscriptionComponent,
    LegumesComponent,
    VillesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
