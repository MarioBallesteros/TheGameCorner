import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Reserva {
  id: number;
  juegoId: number;
  usuario: string;
  fecha: Date;
  horario: string; // 'mañana', 'tarde', 'noche'
}

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private reservasSubject = new BehaviorSubject<Reserva[]>([]);
  private puntosUsuario = new BehaviorSubject<number>(0); // Añadido para manejar puntos de usuario

  public reservas: Reserva[] = [
    // Inicializa con las reservas existentes si las hay
  ];

  constructor() {
    this.reservasSubject.next(this.reservas); // Inicializar con reservas existentes
  }

  obtenerReservas(): Observable<Reserva[]> {
    return this.reservasSubject.asObservable();
  }

  // Añadido: Método para agregar una reserva y actualizar los puntos de usuario
  agregarReserva(reserva: Reserva) {
    this.reservas.push(reserva);
    this.actualizarPuntos(10); // Supongamos que cada reserva añade 10 puntos
    this.reservasSubject.next(this.reservas);
  }

  actualizarReserva(id: number, reservaActualizada: Reserva): void {
    const index = this.reservas.findIndex(reserva => reserva.id === id);
    if (index !== -1) {
      this.reservas[index] = reservaActualizada;
      this.reservasSubject.next(this.reservas);
    }
  }

  // Añadido: Método para actualizar los puntos de usuario
  private actualizarPuntos(puntos: number) {
    let puntosActuales = this.puntosUsuario.value;
    this.puntosUsuario.next(puntosActuales + puntos);
  }

  // Añadido: Método para obtener los puntos actuales del usuario
  obtenerPuntosUsuario(): Observable<number> {
    return this.puntosUsuario.asObservable();
  }

  // Considera añadir métodos para eliminar reservas si es necesario
  eliminarReserva(id: number) {
    const index = this.reservas.findIndex(reserva => reserva.id === id);
    if (index !== -1) {
      this.reservas.splice(index, 1); // Elimina la reserva del array
      this.reservasSubject.next(this.reservas); // Actualiza el BehaviorSubject con el nuevo array de reservas
    }
  }
}
