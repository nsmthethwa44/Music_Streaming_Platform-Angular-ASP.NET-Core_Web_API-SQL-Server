import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
      toggleSidebar(){
        const sidebar = document.querySelector(".sidebar");
        sidebar?.classList.toggle("active");
    }

  closeSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar?.classList.remove("active");
  }
}
