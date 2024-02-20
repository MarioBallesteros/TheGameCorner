import { Component, OnInit } from '@angular/core';
import { RentalserviceService } from "../../service/rentalservice.service";

export interface Property {
  id: string;
  title: string;
  ownerEmail?:string;
}

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {
  properties: Property[] = [];
  selectedProperty: Property = {
    title: "Juego de Mesa Genérico",
    id: "generic-id",
    ownerEmail: "email@example.com"
  };// O usar 'any' si prefieres no especificar el tipo
  mode: 'list' | 'single' = 'list'; // Usar union type para 'mode'

  constructor(public rentalService: RentalserviceService) { }

  ngOnInit() {
    this.getAllProperties();
  }

  getAllProperties() {
    this.rentalService.getAllRentals().subscribe(res => {
      this.properties = res;
      console.log(this.properties);
    });
  }

  viewDetails(property: Property) {
    this.mode = 'single';
    this.selectedProperty = property;
  }

  getOrdered(by: string) {
   // this.rentalService.getOrderedRentals(by).subscribe(data => {
   //   this.properties = data;
   // });
  }

  search(searchKey: string) {
    console.log(searchKey);
    this.rentalService.getByLocality(searchKey).subscribe(data => {
      this.properties = data;
    });
  }
}
