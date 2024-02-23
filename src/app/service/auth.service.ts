import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<string | null>(null);

  constructor() {}

  login(userName: string) {
    this.currentUserSubject.next(userName);
  }

  logout() {
    this.currentUserSubject.next(null);
  }

  register(userName: string) {
    this.currentUserSubject.next(userName);
  }

  get currentUser() {
    return this.currentUserSubject.asObservable();
  }
}
