import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BilletterieComponent } from './billetterie/billetterie.component';
import { ConnectionComponent } from './connection/connection.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { HotelComponent } from './hotel/hotel.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlanDuParcComponent } from './plan-du-parc/plan-du-parc.component';
import { ReservationBilletsComponent } from './reservation-billets/reservation-billets.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

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
    HotelPageComponent,
    RestaurantsPageComponent,
    InscriptionComponent,
    ConnectionComponent
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
