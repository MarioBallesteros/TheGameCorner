import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { Juego, JuegosService } from '../service/juegos.service';
import {map} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = '';
  juegosDestacados: Juego[] = [];

  constructor(private authService: AuthService, private juegosService: JuegosService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe((userName: string | null) => {
      this.userName = userName || '';
    });
    this.juegosService.obtenerJuegos().pipe(
      map(juegos => juegos.slice(0, 3))
    ).subscribe(juegos => {
      this.juegosDestacados = juegos;
    });
  }

  logout() {
    this.authService.logout();
  }
}
