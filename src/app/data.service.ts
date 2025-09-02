import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // fake API
    private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  // Example GET request
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError) // catch errors
    );
  }

  getPost(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Example POST request
  createPost(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Central error handling method
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client error:', error.error.message);
    } else {
      // Server-side error
      console.error(`Server returned code ${error.status}, body was:`, error.error);
    }
    // Return a user-friendly message
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}
