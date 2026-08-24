import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/User-model';

HttpClient

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = `${environment.apiUrl}/api/user`;
  constructor(private http: HttpClient){}

  // get all users
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`)
  }
}
