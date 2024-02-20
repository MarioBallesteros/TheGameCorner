import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

export interface Enquiry {
  id?: string;
  email: string;
  ownerEmail: string;
  title: string;
  // Agrega aquí otros campos necesarios para tu consulta
}

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private enquiries: Enquiry[] = []; // Almacenamiento en memoria de las consultas

  constructor(public authService: AuthService) { }

  addEnquiry(enquiry: Enquiry) {
    enquiry.id = Math.random().toString(36).substring(2, 9); // Genera un ID simple
    this.enquiries.push(enquiry);
    return Promise.resolve(enquiry); // Simula una operación asíncrona exitosa
  }

  getEnquiries() {
    const ownerEmail = this.authService.getEmail();
    const userEnquiries = this.enquiries.filter(enquiry => enquiry.ownerEmail === ownerEmail);
    return Promise.resolve(userEnquiries); // Simula recuperar los datos de forma asíncrona
  }
}
