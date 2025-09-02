import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let msg = 'Unknown error occurred';
        if (error.status === 0) {
          msg = 'Network error - please check your internet connection';
        } else if (error.status === 404) {
          msg = 'Resource not found';
        } else if (error.status === 500) {
          msg = 'Server error - please try again later';
        }
        return throwError(() => new Error(msg));
      })
    );
  }
}
