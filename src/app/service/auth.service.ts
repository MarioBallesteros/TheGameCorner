import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDetails: any = { email: 'user@example.com' }; // Simula datos de usuario
  display: any; // Mantén o ajusta según necesites

  constructor(public router: Router) {
    // Simula que el usuario está siempre autenticado
    this.display = 'Usuario Simulado'; // Ajusta esto según necesites
  }

  logIn(email: string, password: string) {
    // Simula un inicio de sesión exitoso
    console.log(`Login simulado para el usuario: ${email}`);
    this.router.navigateByUrl('/home');
  }

  addUser(email: string, password: string) {
    // Simula la creación exitosa de un usuario
    console.log(`Usuario creado: ${email}`);
    this.router.navigateByUrl('/home');
  }

  isAuthenticated() {
    // Siempre retorna true para simular que el usuario está autenticado
    return true;
  }

  getEmail() {
    // Retorna el email del usuario simulado
    return this.userDetails.email;
  }
}
