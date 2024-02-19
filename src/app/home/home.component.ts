import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string;

  constructor() {
    this.user = "Usuario"; // Cambia "Usuario Predeterminado" por el valor que necesites
  }

  ngOnInit() {
  }
}
