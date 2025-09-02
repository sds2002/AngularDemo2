import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    return this.checkLogin();
  }

  canActivateChild(): boolean {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      alert('Admin Access Denied! Please log in.');
      this.router.navigate(['/']);
      return false;
    }
  }
}
