import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Juego {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  // Añade cualquier otra propiedad necesaria para tus juegos
}

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  // Simula una base de datos de juegos para el ejemplo
  private juegos: Juego[] = [
    {id: 1, name: 'Juego 1', imageUrl: 'url-a-imagen-1', description: 'Descripción del Juego 1'},
    {id: 2, name: 'Juego 2', imageUrl: 'url-a-imagen-2', description: 'Descripción del Juego 2'},
    // Añade más juegos según sea necesario
  ];

  constructor() {
  }

  // Obtiene los detalles de un juego por ID
  obtenerJuegoPorId(id: number): Juego | undefined {
    return this.juegos.find(juego => juego.id === id);
  }
}
