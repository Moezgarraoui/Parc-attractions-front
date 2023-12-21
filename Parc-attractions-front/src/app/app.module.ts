import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HotelComponent } from './hotel/hotel.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { BilletterieComponent } from './billetterie/billetterie.component';
import { ConnectionComponent } from './connection/connection.component';
import { ActualitesComponent } from './actualites/actualites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HotelComponent,
    ReservationComponent,
    RestaurantsComponent,
    AccueilComponent,
    BilleterieComponent,
    BilletterieComponent,
    ConnectionComponent,
    ActualitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
