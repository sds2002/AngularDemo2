import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Fake API

  constructor(private http: HttpClient) {}

  // GET request
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
