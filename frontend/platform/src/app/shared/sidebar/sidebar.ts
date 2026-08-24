import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarLinks } from '../../constant/sidebar-links';
import { Auth } from '../../auth/services/auth';
import { UserResponse } from '../../models/User-model';
import { Observable } from 'rxjs';
import { SidebarService } from '../../services/sidebar-service/sidebar-service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
@Input() role: 'admin' | 'artist' | 'listener' = 'listener';
    constructor(private authSvc: Auth, private sidebarSvc: SidebarService){};
    loggedInUser!: Observable<UserResponse | null>
      

    get links() {
      return SidebarLinks[this.role] || [];
    }

    logout(): void{
      this.authSvc.logout();
    }

      ngOnInit(): void {
        this.loggedInUser = this.authSvc.currentUser$;
    }

    closeSidebar(){
      this.sidebarSvc.closeSidebar();
    }
}
