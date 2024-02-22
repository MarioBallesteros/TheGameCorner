import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  register(registerForm: NgForm) {
    const formValue = registerForm.value;
    this.authService.register(formValue.username);
    console.log('Registro exitoso');
    this.router.navigate(['/']); // Ajusta esta ruta a donde quieras llevar al usuario después del registro
    registerForm.reset();
  }
}
