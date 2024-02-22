import {Component, OnInit, signal} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userName = this.authService.getUserName(); // Obtiene el nombre del usuario para mostrarlo
  }
  logout() {
    this.authService.logout();
    // Opcionalmente, maneja cualquier otra lógica necesaria después del logout, como limpiar variables
  }
}
