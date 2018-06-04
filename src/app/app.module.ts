import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { DestinationsComponent } from './destinations/destinations.component';

import { HideService } from './hide.service';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    DestinationsComponent,
    PackagesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
