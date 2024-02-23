import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CabeceraComponent } from "./cabecera/cabecera.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {FormsModule} from "@angular/forms";
import { VistaJuegosComponent } from './vista-juegos/vista-juegos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetallesJuegoComponent } from './detalles-juego/detalles-juego.component';
import {ReservaJuegoComponent} from "./reserva-juego/reserva-juego.component";
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    VistaJuegosComponent,
    NavbarComponent,
    DetallesJuegoComponent,
    ReservaJuegoComponent,
    MisReservasComponent,
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
