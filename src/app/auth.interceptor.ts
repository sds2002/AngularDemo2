import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = 'Bearer my-fake-jwt-token';

    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: authToken
      }
    });

    // ✅ Log to confirm interceptor runs
    console.log('🚀 Outgoing request:', clonedRequest);

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Interceptor caught error:', error);
        return throwError(() => error);
      })
    );
  }
}
