import { Component, OnInit } from '@angular/core';
import {Reserva, ReservasService} from "../service/reservas.service";
import { Location } from '@angular/common';
import {Observable} from "rxjs";

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {
  reservas: Reserva[] = [];
  puntosUsuario!: Observable<number>;

  constructor(private reservasService: ReservasService,
              private location: Location) {}

  ngOnInit(): void {
    this.reservasService.obtenerReservas().subscribe(reservas => {
      this.reservas = reservas;
      this.puntosUsuario = this.reservasService.obtenerPuntosUsuario();
    });
  }

  editandoId: number | null = null;

  iniciarEdicion(id: number): void {
    this.editandoId = id;
  }

  guardarEdicion(reserva: Reserva): void {
    this.reservasService.actualizarReserva(reserva);
    this.editandoId = null;
  }

  cancelarEdicion(): void {
    this.editandoId = null;
  }

  eliminarReserva(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
      this.reservasService.cancelarReserva(id);
    }
  }
  volver(): void {
    this.location.back();
  }
}
