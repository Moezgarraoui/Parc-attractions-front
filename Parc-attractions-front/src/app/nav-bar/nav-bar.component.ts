import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router,private authService: AuthService) {
    
  }
  isLogged(): boolean {
    return this.authService.isLogged();
    
 }
  logout() {
     this.authService.logout();
}

}
