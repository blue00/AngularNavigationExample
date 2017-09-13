import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.sass']
})
export class NavbarTopComponent {

  constructor(
    private authenticationService: AuthenticationService)
    { }

  logout(): void {
    this.authenticationService.logout();
  }

  showNavigation(): boolean {
    return this.authenticationService.isLoggedIn();
  }

}
