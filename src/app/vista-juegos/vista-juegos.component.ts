import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../service/auth.service";
import {Juego, JuegosService} from "../service/juegos.service";

@Component({
  selector: 'app-vista-juegos',
  templateUrl: './vista-juegos.component.html',
  styleUrls: ['./vista-juegos.component.css'],
})
export class VistaJuegosComponent implements OnInit {
  featuredGames: Juego[] = [];

  userName: string | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private juegosService: JuegosService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(userName => {
      this.userName = userName;
    });

    this.juegosService.obtenerJuegos().subscribe(juegos => {
      this.featuredGames = juegos;
    });
  }

  reserveGame(gameId: number): void {
    if (this.userName) {
      this.router.navigate(['/reserva', gameId]);
    } else {
      alert('Debes estar logueado para hacer una reserva.');
    }
  }

  verDetalles(gameId: number): void {
    this.router.navigate(['/juegos/', gameId]);
  }
}
