import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userName: string | null = null;
  boolMostrarInfoUsuario: boolean = false; // Controla la visibilidad de la ventana emergente


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(userName => {
      this.userName = userName;
    });
  }

  logout(): void {
    this.authService.logout();
  }

  mostrarInfoUsuario() {
      this.boolMostrarInfoUsuario = !this.boolMostrarInfoUsuario;
  }
}
