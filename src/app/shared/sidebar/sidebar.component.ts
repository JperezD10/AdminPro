import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[] = [];

  constructor( private sidebarService: SidebarService, private authService: AuthService) { 
    this.menuItems = sidebarService.menu;
  }

  ngOnInit(): void {
  }

  logout():void {
    this.authService.logout();
  }

}
