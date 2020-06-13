import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl: string;
  userData;
  constructor(private http: HttpClient) {}

  login(body: { email: string; password: string }) {
    return this.http.post('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    });
  }

  register(body: { email: string; password: string }) {
    return this.http.post('https://reqres.in/api/register', {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    });
  }

  setToken(userData: object, keepData: boolean) {
    if (keepData) {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
    this.userData = userData;
  }

  get Token() {
    return this.userData || JSON.parse(localStorage.getItem('userData'));
  }
}
