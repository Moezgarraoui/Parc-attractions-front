import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccueilComponent } from './accueil/accueil.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BilletterieComponent } from './billeterie/billetterie.component';
import { ConnectionComponent } from './connection/connection.component';
import { HotelComponent } from './hotel/hotel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlanDuParcComponent } from './plan-du-parc/plan-du-parc.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HotelComponent,
    ReservationComponent,
    RestaurantsComponent,
    AccueilComponent,
    BilletterieComponent,
    BilletterieComponent,
    ConnectionComponent,
    ActualitesComponent,
    PlanDuParcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
