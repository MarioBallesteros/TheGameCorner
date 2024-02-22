import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {IndexComponent} from "./home/index/index.component";
import {RegisterComponent} from "./auth/register/register.component";
import {VistaJuegosComponent} from "./vista-juegos/vista-juegos.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
 // { path: 'allproperties', component: AllPropertiesComponent }
  // { path: 'home/enquiries', component: EnquiriesComponent },
 // { path: 'home/myproperties', component: MyPropertiesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'juegos', component: VistaJuegosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
