import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Reserva {
  id: number;
  juegoId: number;
  usuario: string;
  fecha: Date;
  horario: string; // 'mañana', 'tarde', 'noche'
  esCancelada?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private reservasSubject = new BehaviorSubject<Reserva[]>([]);
  private puntosUsuarioSubject = new BehaviorSubject<number>(0);
  private puntosPorReserva = 10;
  private puntosParaReservaGratuita = 100;

  constructor() {
    this.reservasSubject.next([]);
  }

  obtenerReservas(): Observable<Reserva[]> {
    return this.reservasSubject.asObservable();
  }

  agregarReserva(reserva: Reserva) {
    const reservasActuales = this.reservasSubject.value;
    reservasActuales.push(reserva);
    this.reservasSubject.next(reservasActuales);

    this.actualizarPuntos(this.puntosPorReserva);

    if (this.puntosUsuarioSubject.value >= this.puntosParaReservaGratuita) {
      alert('¡Enhorabuena has alcanzado 100 puntos! esta reserva será gratuita');
      this.resetearPuntos();
    }
  }

  actualizarReserva(reservaActualizada: Reserva): void {
    const reservasActuales = this.reservasSubject.value;
    const index = reservasActuales.findIndex(reserva => reserva.id === reservaActualizada.id);
    if (index !== -1) {
      reservasActuales[index] = reservaActualizada;
      this.reservasSubject.next(reservasActuales);
    }
  }

  cancelarReserva(id: number): void {
    const reservasActuales = this.reservasSubject.value;
    const reservasActualizadas = reservasActuales.map(reserva => {
      if (reserva.id === id) {
        return { ...reserva, esCancelada: true };
      } else {
        return reserva;
      }
    });
    this.reservasSubject.next(reservasActualizadas);
  }

  private actualizarPuntos(puntos: number) {
    const puntosActuales = this.puntosUsuarioSubject.value;
    this.puntosUsuarioSubject.next(puntosActuales + puntos);
  }

  private resetearPuntos() {
    this.puntosUsuarioSubject.next(0);
  }

  obtenerPuntosUsuario(): Observable<number> {
    return this.puntosUsuarioSubject.asObservable();
  }
}
