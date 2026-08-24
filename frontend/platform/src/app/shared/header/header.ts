import { Component } from '@angular/core';
import { Login } from '../../auth/login/login';
import { Register } from '../../auth/register/register';
import { Observable } from 'rxjs';
import { UserResponse } from '../../models/User-model';
import { Auth } from '../../auth/services/auth';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar-service/sidebar-service';

@Component({
  selector: 'app-header',
  imports: [Login, Register, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 isLoginVisible = false;
 isRegisterVisible = false;
 loggedInUser!: Observable<UserResponse | null>
  constructor(private authSvc: Auth, private sidebarSvc: SidebarService){};

  ngOnInit(): void {
    this.loggedInUser = this.authSvc.currentUser$;
}

getImageUrl(imageUrl: string | null | undefined): string {
  if (!imageUrl) {
    return 'assets/img/user.jpg';
  }
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  return `${environment.apiUrl}/${imageUrl}`;
}

toggleSidebar(){
  this.sidebarSvc.toggleSidebar();
}

 showLogin():void{
  this.isLoginVisible = !this.isLoginVisible;
  this.isRegisterVisible = false;
 }

 showRegister(){
  this.isRegisterVisible = true;
  this.isLoginVisible = false
 }
}
