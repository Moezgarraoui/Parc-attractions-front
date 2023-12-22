import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BilletterieComponent } from './billetterie/billetterie.component';
import { ConnectionComponent } from './connection/connection.component';
import { HotelComponent } from './hotel/hotel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlanDuParcComponent } from './plan-du-parc/plan-du-parc.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReservationBilletsComponent } from './reservation-billets/reservation-billets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotelPageComponent } from './hotel-page/hotel-page.component';

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
    PlanDuParcComponent,
    ReservationBilletsComponent,
    HotelPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
