import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[] = [];
  img:SafeResourceUrl;
  user?: User;
  constructor( private sidebarService: SidebarService, private authService: AuthService, private sanitizer: DomSanitizer){ 
    this.menuItems = sidebarService.menu;
    this.img = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.authService.loginUser?.image);
    this.user = this.authService.loginUser || undefined;
  }

  ngOnInit(): void {
  }

  logout():void {
    this.authService.logout();
  }

}
