import { Router, ActivatedRoute } from '@angular/router';
import { JuegosService } from '../juegos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-juego',
  templateUrl: './reserva-juego.component.html',
  styleUrls: ['./reserva-juego.component.css']
})
export class ReservaJuegoComponent implements OnInit {
  juego: any; // Deberías definir una interfaz más precisa para esto
  horarios = ['mañana', 'tarde', 'noche'];
  fechaReserva: Date | null = null;
  horarioSeleccionado: string = '';

  constructor(
    private route: ActivatedRoute,
    private juegosService: JuegosService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.obtenerDatosJuego();
  }

  obtenerDatosJuego(): void {
    const juegoId = +this.route.snapshot.paramMap.get('id')!;
    this.juego = this.juegosService.obtenerJuegoPorId(juegoId); // Asume un método en tu servicio
    // Recuerda manejar casos en los que el juego no se encuentra
  }

  hacerReserva(): void {
    if (!this.fechaReserva || !this.horarioSeleccionado) {
      alert('Por favor, completa todos los campos para la reserva.');
      return;
    }

    const reserva = {
      juegoId: this.juego.id,
      fecha: this.fechaReserva,
      horario: this.horarioSeleccionado,
      // Aquí podrías agregar más datos según sean necesarios
    };

    this.juegosService.agregarReserva(reserva);
    alert('Reserva realizada con éxito.');
    this.router.navigate(['/juegos']);
  }

}
