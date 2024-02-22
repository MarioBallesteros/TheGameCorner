import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe((userName: string | null) => {
      this.userName = userName || ''; // Asigna el userName o una cadena vacía si es null
    });
  }

  logout() {
    this.authService.logout();
  }
}
