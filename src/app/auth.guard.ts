import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = false;  // fake login check for demo

    if (isLoggedIn) {
      return true; // allow access
    } else {
      alert('Access Denied! Please log in.');
      this.router.navigate(['/']); // redirect to home
      return false;
    }
  }
}
