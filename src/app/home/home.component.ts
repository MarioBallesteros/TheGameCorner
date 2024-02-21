import { Component, OnInit } from '@angular/core';
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
}
