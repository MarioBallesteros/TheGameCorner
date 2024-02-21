import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    constructor(public authService: AuthService, public router: Router) { }

    ngOnInit() { }

    register(registerForm: NgForm) {
        const formValue = registerForm.value;
        this.authService.register(formValue.username, formValue.email, formValue.password)
            .then((userDetails) => {
                console.log('Registro exitoso', userDetails);
                this.router.navigate(['/home']); // Asegúrate de que esta ruta exista en tu configuración de rutas
            })
            .catch(error => {
                console.error('Error during registration:', error);
            });

        registerForm.reset(); // Opcional, dependiendo de tu flujo de usuario
    }
}
