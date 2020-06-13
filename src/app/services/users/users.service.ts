import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  createUser(body: { name: string; job: string }) {
    return this.http.post('https://reqres.in/api/users', body);
  }

  getAllUsers(page: number) {
    return this.http.get('https://reqres.in/api/users', {
      params: { page: JSON.stringify(page) },
    });
  }

  getUser(userId: number) {
    return this.http.get('https://reqres.in/api/users', {
      params: { id: JSON.stringify(userId) },
    });
  }

  updateUser(body: { name: string; job: string }) {
    return this.http.patch('https://reqres.in/api/users/2', body);
  }

  deleteUser(userId: number) {
    return this.http.delete('https://reqres.in/api/users', {
      params: { id: JSON.stringify(userId) },
    });
  }
}
