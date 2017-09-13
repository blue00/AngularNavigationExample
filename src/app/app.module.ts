import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InnerRoutingComponent } from './inner-routing/inner-routing.component';
import { routing } from './app.routing';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth-guard';
import { PageForbiddenComponent } from './page-forbidden/page-forbidden.component';
import { IdViewComponent } from './inner-routing/id-view/id-view.component';
import { PictureOfTheDayComponent } from './inner-routing/picture-of-the-day/picture-of-the-day.component'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    InnerRoutingComponent,
    NavbarTopComponent,
    PageForbiddenComponent,
    IdViewComponent,
    PictureOfTheDayComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
