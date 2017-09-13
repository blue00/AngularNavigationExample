import { Component } from '@angular/core';
import { AuthorizationData } from '../models/authorization-data';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  currentAuthorizationData: AuthorizationData;
  
      constructor() {
          this.currentAuthorizationData = JSON.parse(localStorage.getItem('authorizationData'));
      }
}