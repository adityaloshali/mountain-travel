import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
