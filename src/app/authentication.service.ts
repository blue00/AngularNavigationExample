import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthorizationData } from './models/authorization-data';

@Injectable()
export class AuthenticationService {

    isLoggedIn() : boolean {
        return localStorage.getItem("authorizationData") !== null;
    }

    login(username: string, password: string): void {
      let authorizationData: AuthorizationData = { token: "fake token", username: username };
      localStorage.setItem("authorizationData", JSON.stringify(authorizationData));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem("authorizationData");
    }
}