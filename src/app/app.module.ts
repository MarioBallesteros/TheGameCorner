import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CabeceraComponent } from "./cabecera/cabecera.component";
import {HomeComponent} from "./home/home.component";
import {IndexComponent} from "./home/index/index.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {FormsModule} from "@angular/forms";
import {SinglepropertyComponent} from "./home/rentals/singleproperty/singleproperty.component";
import {RentalsComponent} from "./home/rentals/rentals.component";
import {AddrentalComponent} from "./home/addrental/addrental.component";
import {SignupComponent} from "./auth/signup/signup.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    RentalsComponent,
    SigninComponent,
    SignupComponent,
    SinglepropertyComponent,
    AddrentalComponent,
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
