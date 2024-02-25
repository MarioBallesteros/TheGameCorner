import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../service/juegos.service';
import { ReservasService } from '../service/reservas.service';

@Component({
  selector: 'app-reserva-juego',
  templateUrl: './reserva-juego.component.html',
  styleUrls: ['./reserva-juego.component.css']
})
export class ReservaJuegoComponent implements OnInit {
  juego: any;
  horarios = ['mañana', 'tarde', 'noche'];
  fechaReserva: Date | null = null;
  horarioSeleccionado: string = '';
  fechaMinima: string = '';

  constructor(
    private route: ActivatedRoute,
    private juegosService: JuegosService,
    private reservasService: ReservasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerDatosJuego();
    this.calcularFechaMinima();
  }

  obtenerDatosJuego(): void {
    const juegoId = +this.route.snapshot.paramMap.get('id')!;
    this.juego = this.juegosService.obtenerJuegoPorId(juegoId);
  }

  hacerReserva(): void {
    if (!this.fechaReserva || !this.horarioSeleccionado) {
      alert('Por favor, completa todos los campos para la reserva.');
      return;
    }

    const reserva = {
      id: Math.floor(Math.random() * 10000),
      juegoId: this.juego.id,
      usuario: '',
      fecha: this.fechaReserva,
      horario: this.horarioSeleccionado,
    };

    this.reservasService.agregarReserva(reserva);
    alert('Reserva realizada con éxito.');
    this.router.navigate(['/juegos']);
  }

  calcularFechaMinima() {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() + (1 + 7 - hoy.getDay()) % 7);
    this.fechaMinima = hoy.toISOString().split('T')[0];
  }
}
