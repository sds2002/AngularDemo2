import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // Interceptor will automatically add Authorization header
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
