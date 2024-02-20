import { Component, OnInit } from '@angular/core';

interface Property {
  title: string;
  id: string;
  ownerEmail: string;
  // Añade más propiedades según sea necesario
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedProperty: Property = {
    title: 'Juego de Mesa Ejemplo',
    id: '1',
    ownerEmail: 'ejemplo@correo.com'
    // Añade valores iniciales para las propiedades adicionales según sea necesario
  };
  user: string;
  mode: string = 'list'; // Mantén tu lógica para cambiar entre 'list' y 'single'

  constructor() {
    this.user = "Usuario"; // Cambia "Usuario Predeterminado" por el valor que necesites
  }

  ngOnInit() {
  }
}
