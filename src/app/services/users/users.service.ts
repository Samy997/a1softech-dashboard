import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  token;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = this.authService.Token.token;
  }

  createUser(body: { name: string; job: string }) {
    return this.http.post('https://reqres.in/api/users', body, {
      headers: { token: this.token },
    });
  }

  getAllUsers(page: number) {
    return this.http.get('https://reqres.in/api/users', {
      params: { page: JSON.stringify(page) },
      headers: { token: this.token },
    });
  }

  getUser(userId: number) {
    return this.http.get('https://reqres.in/api/users', {
      params: { id: JSON.stringify(userId) },
      headers: { token: this.token },
    });
  }

  updateUser(body: { name: string; job: string }) {
    return this.http.patch('https://reqres.in/api/users/2', body, {
      headers: { token: this.token },
    });
  }

  deleteUser(userId: number) {
    return this.http.delete('https://reqres.in/api/users', {
      params: { id: JSON.stringify(userId) },
      headers: { token: this.token },
    });
  }
}
