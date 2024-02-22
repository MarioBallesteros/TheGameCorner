import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Define las interfaces fuera de la clase del servicio para una mejor organización y reutilización
interface Juego {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  // Añade cualquier otra propiedad necesaria para tus juegos
}

interface Reserva {
  juegoId: number;
  fecha: Date;
  horario: string; // 'mañana', 'tarde', 'noche'
}

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  private reservas: Reserva[] = [];
  private puntosUsuario = new BehaviorSubject<number>(0);

  // Simula una base de datos de juegos para el ejemplo
  private juegos: Juego[] = [
    { id: 1, name: 'Juego 1', imageUrl: 'url-a-imagen-1', description: 'Descripción del Juego 1' },
    { id: 2, name: 'Juego 2', imageUrl: 'url-a-imagen-2', description: 'Descripción del Juego 2' },
    // Añade más juegos según sea necesario
  ];

  constructor() { }

  // Añade una reserva y actualiza los puntos del usuario
  agregarReserva(reserva: Reserva) {
    this.reservas.push(reserva);
    this.actualizarPuntos(10); // Cada reserva añade 10 puntos
  }

  // Actualiza los puntos del usuario
  actualizarPuntos(puntos: number) {
    let puntosActuales = this.puntosUsuario.value;
    this.puntosUsuario.next(puntosActuales + puntos);
  }

  // Obtiene los puntos actuales del usuario
  obtenerPuntosUsuario(): Observable<number> {
    return this.puntosUsuario.asObservable();
  }

  // Obtiene los detalles de un juego por ID
  obtenerJuegoPorId(id: number): Juego | undefined {
    return this.juegos.find(juego => juego.id === id);
  }

  // Método para obtener todas las reservas (opcional, dependiendo de tus requisitos)
  obtenerReservas(): Observable<Reserva[]> {
    return new BehaviorSubject(this.reservas).asObservable();
  }
}
