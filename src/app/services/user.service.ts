import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 28 }
  ];

  getUsers(): Observable<any[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<any> {
    const user = this.users.find(u => u.id === id);
    return of(user);
  }
}
