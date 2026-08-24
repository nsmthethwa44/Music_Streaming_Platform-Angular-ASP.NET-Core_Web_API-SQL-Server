import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Auth } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSvc: Auth, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
  const user = this.authSvc.getUserFromStorage();

    // No logged-in user
    if (!user || !user.token) {
      this.router.navigate(['/login']);
      return false;
    }

    const expectedRole = route.data['role'] as string;
    const userRole = user.role;

    // Case-insensitive role comparison
    if (!userRole || userRole.toLowerCase() !== expectedRole.toLowerCase()) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }

}