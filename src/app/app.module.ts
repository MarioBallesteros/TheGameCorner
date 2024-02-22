import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CabeceraComponent } from "./cabecera/cabecera.component";
import {HomeComponent} from "./home/home.component";
import {IndexComponent} from "./home/index/index.component";
import {RegisterComponent} from "./auth/register/register.component";
import {FormsModule} from "@angular/forms";
import { VistaJuegosComponent } from './vista-juegos/vista-juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    RegisterComponent,
    VistaJuegosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
