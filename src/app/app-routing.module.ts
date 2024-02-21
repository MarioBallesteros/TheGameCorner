import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {IndexComponent} from "./home/index/index.component";
import {RegisterComponent} from "./auth/register/register.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
 // { path: 'allproperties', component: AllPropertiesComponent }
  // { path: 'home/enquiries', component: EnquiriesComponent },
 // { path: 'home/myproperties', component: MyPropertiesComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
