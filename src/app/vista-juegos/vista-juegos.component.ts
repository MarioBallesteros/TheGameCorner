import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-vista-juegos',
  templateUrl: './vista-juegos.component.html',
  styleUrls: ['./vista-juegos.component.css'],
})
export class VistaJuegosComponent implements OnInit {
  featuredGames = [
    { id: 1, name: 'Juego Destacado 1', description: 'Una breve descripción del juego 1.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Juego Destacado 2', description: 'Una breve descripción del juego 2.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Juego Destacado 3', description: 'Una breve descripción del juego 3.', imageUrl: 'https://via.placeholder.com/150' }
];

userName: string | null = null;

constructor(private router: Router, private authService: AuthService) {}

ngOnInit(): void {
  this.authService.currentUser.subscribe(userName => {
    this.userName = userName;
  });
}

reserveGame(gameId: number): void {
  if (this.userName) {
  this.router.navigate(['/reserva', gameId]);
} else {
  alert('Debes estar logueado para hacer una reserva.');
// Opcionalmente, redirige al usuario a la página de login
// this.router.navigate(['/login']);
}
}

  verDetalles(gameId: number): void {
    this.router.navigate(['/juegos/', gameId]);
  }
}
