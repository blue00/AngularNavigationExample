import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('authorizationData')) {
            // logged in so return true
            return true;
        }

        if (route.routeConfig.path == "") {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        }
        else {
            this.router.navigate(['/forbidden'], { queryParams: { returnUrl: state.url }});
        }
        return false;
    }
}