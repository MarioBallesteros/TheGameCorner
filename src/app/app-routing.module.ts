import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RentalsComponent} from "./home/rentals/rentals.component";
import {SinglepropertyComponent} from "./home/rentals/singleproperty/singleproperty.component";
import {AddrentalComponent} from "./home/addrental/addrental.component";
import {IndexComponent} from "./home/index/index.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
 // { path: 'allproperties', component: AllPropertiesComponent }
  { path: 'home/rentals', component: RentalsComponent },
  { path: 'home/addproperty', component: AddrentalComponent },
  // { path: 'home/enquiries', component: EnquiriesComponent },
 // { path: 'home/myproperties', component: MyPropertiesComponent },
  { path: 'home/rentals/singleproperty', component: SinglepropertyComponent },
  { path: 'index', component: IndexComponent },
  { path: 'index/login', component: SigninComponent },
  { path: 'index/register', component: SignupComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
