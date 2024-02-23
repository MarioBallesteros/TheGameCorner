import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {VistaJuegosComponent} from "./vista-juegos/vista-juegos.component";
import {ReservaJuegoComponent} from "./reserva-juego/reserva-juego.component";
import {DetallesJuegoComponent} from "./detalles-juego/detalles-juego.component";
import {MisReservasComponent} from "./mis-reservas/mis-reservas.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
 // { path: 'allproperties', component: AllPropertiesComponent }
  // { path: 'home/enquiries', component: EnquiriesComponent },
 // { path: 'home/myproperties', component: MyPropertiesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'juegos', component: VistaJuegosComponent },
  { path: 'reservas', component: MisReservasComponent },
  { path: 'reserva/:id', component: ReservaJuegoComponent },
  { path: 'juegos/:id', component: DetallesJuegoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
