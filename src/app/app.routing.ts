import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { InnerRoutingComponent } from './inner-routing/inner-routing.component';
import { PageForbiddenComponent } from './page-forbidden/page-forbidden.component'
import { IdViewComponent } from './inner-routing/id-view/id-view.component';
import { PictureOfTheDayComponent } from './inner-routing/picture-of-the-day/picture-of-the-day.component'

//The appRoutes array of routes describes how to navigate. Pass it to the RouterModule.forRoot method in the module imports to configure the router.
const appRoutes: Routes = [
  //The order of the routes in the configuration matters and this is by design. The router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes.
  //There are no leading slashes in the path. The router parses and builds the final URL for you, allowing you to use both relative and absolute paths when navigating between application views.
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  {
    path: 'innerrouting',
    component: InnerRoutingComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'idview/0', pathMatch: 'full' },
      { path: 'idview', component: IdViewComponent },
      { path: 'idview/:id', component: IdViewComponent },
      { path: 'pictureoftheday', component: PictureOfTheDayComponent },
    ]
  },
  { path: 'forbidden', component: PageForbiddenComponent },
  { path: '**', component: PageNotFoundComponent } //The ** path is a wildcard. The router will select this route if the requested URL doesn't match any paths for routes defined earlier in the configuration. This is useful for displaying a "404 - Not Found" page or redirecting to another route.
];

export const routing = RouterModule.forRoot(appRoutes);