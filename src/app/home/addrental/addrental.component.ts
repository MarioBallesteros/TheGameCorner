import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../service/auth.service";
import { RentalserviceService } from "../../service/rentalservice.service";

@Component({
  selector: 'app-addrental',
  templateUrl: './addrental.component.html',
  styleUrls: ['./addrental.component.css']
})
export class AddrentalComponent implements OnInit {
  isPropertyAdded: boolean = false;

  constructor(
    private rentalService: RentalserviceService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  addProperty(addrentalform: NgForm) {
    console.log(addrentalform.value);
    let ownerEmail = this.authService.getEmail(); // Asumiendo que getEmail() devuelve el email del usuario actual.
    // Intentamos añadir la propiedad de manera sincrónica.
    try {
      this.rentalService.addRental({...addrentalform.value, ownerEmail});
      addrentalform.reset();
      this.isPropertyAdded = true;
      // Opcional: Redirige al usuario a otra página tras añadir la propiedad
      // this.router.navigate(['/ruta-de-confirmacion']);
    } catch (err) {
      console.log(err);
    }
  }

}
