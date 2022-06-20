import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  img:SafeResourceUrl;
  user?: User;
  constructor(private authService: AuthService, private sanitizer: DomSanitizer) {
    this.img = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.authService.loginUser?.image);
    this.user = this.authService.loginUser || undefined;
  }

  logout():void {
    this.authService.logout();
  }
}
