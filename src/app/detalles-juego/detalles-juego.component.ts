import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {JuegosService} from "../service/juegos.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-detalles-juego',
  templateUrl: './detalles-juego.component.html',
  styleUrls: ['./detalles-juego.component.css']
})
export class DetallesJuegoComponent implements OnInit {
  juego: any;
  estaLogeado: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private juegosService: JuegosService,
    private router: Router,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.authService.currentUser.subscribe(user => {
      this.estaLogeado = !!user;
    });
    if (idParam) {
      const juegoId = +idParam;
      this.juego = this.juegosService.obtenerJuegoPorId(juegoId);
    } else {
      console.error('ID de juego no proporcionado o inválido');
    }
  }


  reserveGame(gameId: number): void {
      this.router.navigate(['/reserva', gameId]);
  }

  goBack(): void {
    this.router.navigate(['/juegos']);
  }

  mostrarMensajeLogin() {
    alert('Debes estar logueado para realizar una reserva.');
  }
}
