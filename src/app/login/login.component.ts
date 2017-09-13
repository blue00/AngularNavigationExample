import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    public model: any = {};
    public loading = false;
    public isCapslockPressed = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService)
        { }

    passwordFormKeyPressEvent(event: any) {
        this.isCapslockPressed = event.getModifierState && event.getModifierState( 'CapsLock' );
    } 

    login(): void {
        this.loading = true;

        try {
            this.authenticationService.login(this.model.username, this.model.password);
            this.router.navigate(['/']);
        }
        catch(error) {
            //this.alertService.error(error);
            this.loading = false;
        }
    }
}
