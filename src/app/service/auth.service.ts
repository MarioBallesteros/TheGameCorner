import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userDetails: any; // Ajustado para que no inicialice directamente

    constructor(public router: Router) { }

    register(username: string, email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.userDetails = { email, username };
                console.log(`Registro simulado para el usuario: ${username}, Email: ${email}`);
                resolve(this.userDetails);
            }, 1000);

            // Para simular un error, podrías usar reject(new Error('Mensaje de error'));
        });
    }
}
