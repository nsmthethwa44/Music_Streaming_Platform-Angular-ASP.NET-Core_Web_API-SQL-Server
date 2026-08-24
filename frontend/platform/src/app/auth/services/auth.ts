import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; 
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { UserResponse } from '../../models/User-model'; 

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private baseUrl =  `${environment.apiUrl}/api/auth`; 
  constructor(private http: HttpClient, private router: Router){}
  private currentUserSource = new BehaviorSubject<UserResponse | null>(this.getUserFromStorage());
  currentUser$ = this.currentUserSource.asObservable();

  // register  
  register(formData: FormData): Observable<void> { 
    return this.http.post<void>( `${this.baseUrl}/register`, formData ); 
  }

  // login 
   login(data: any) {
    return this.http.post<UserResponse>(`${this.baseUrl}/login`, data).pipe(
      map(user => {
        if (user && user.token) {

          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
          this.redirectByRole(user.role.toString())
        }
        return user;
      })
    );
  }

  // redirect user based on role
  redirectByRole(role: string) {
  const lowerRole = role.toLowerCase();

  if (lowerRole === 'admin') {
    this.router.navigate(['/admin']);
  } else if (lowerRole === 'artist') {
    this.router.navigate(['/artist']);
  } else if (lowerRole === 'listener') {
    this.router.navigate(['/']);
  } else {
    this.router.navigate(['/']);
  }
}

// get user from local storage  
 getUserFromStorage(): UserResponse | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }


  // logout
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
