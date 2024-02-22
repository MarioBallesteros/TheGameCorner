import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userDetails: any; // Se utiliza una propiedad privada para almacenar los detalles del usuario

  constructor(public router: Router) { }

  // Método para registrar al usuario
  register(username: string, email: string, password: string): Promise<any> {
    // Simulación de un registro exitoso con una promesa
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.userDetails = { email, username };
        console.log(`Registro simulado para el usuario: ${username}, Email: ${email}`);
        resolve(this.userDetails);
      }, 1000);
    });
  }

  // Método para obtener el nombre del usuario registrado
  getUserName(): string {
    return this.userDetails ? this.userDetails.username : '';
  }

  // Agregar otros métodos según sea necesario, como login, logout, etc.
  logout() {
    this.userDetails = null;
    this.router.navigate(['/']);
    window.location.reload();
  }
}
