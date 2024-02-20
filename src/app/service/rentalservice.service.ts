import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Rental {
  id: string;
  title: string;
  description: string;
  price: number;
  locality: string;
  image: string;
  createdOn?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class RentalserviceService {
  private rentals: Rental[] = [
    {
      id: '1',
      title: 'Juego de Mesa Clásico',
      description: 'Un emocionante juego de mesa para disfrutar con amigos.',
      price: 20,
      locality: 'Ciudad Central',
      image: 'url-a-la-imagen',
      createdOn: new Date()
    },
    // Más objetos de tipo Rental...
  ];

  constructor() { }

  addRental(rental: Omit<Rental, 'id' | 'createdOn'>): Observable<Rental> {
    const newRental: Rental = {
      ...rental,
      id: Math.random().toString(36).substring(2),
      createdOn: new Date()
    };
    this.rentals.push(newRental);
    return of(newRental);
  }

  updateRental(rental: Partial<Rental>, id: string): Observable<void> {
    const index = this.rentals.findIndex(r => r.id === id);
    if (index !== -1) {
     // this.rentals[index] = { ...this.rentals[index], ...rental, updatedOn: new Date() };
    }
    return of(void 0);
  }

  getAllRentals(): Observable<Rental[]> {
    return of(this.rentals);
  }

  getOrderedRentals(by: 'asc' | 'desc'): Observable<Rental[]> {
    return of(this.rentals.sort((a, b) => by === 'asc' ? a.price - b.price : b.price - a.price));
  }

  getByLocality(searchkey: string): Observable<Rental[]> {
    return of(this.rentals.filter(r => r.locality === searchkey));
  }
}
