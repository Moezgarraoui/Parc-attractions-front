import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
import { PlanDuParcPageComponent } from './plan-du-parc-page/plan-du-parc-page.component';
import { PlanDuParcComponent } from './plan-du-parc/plan-du-parc.component';
import { ReservationBilletsComponent } from './reservation-billets/reservation-billets.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { JordanComponent } from './jordan/jordan.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HotelComponent,
    ReservationComponent,
    RestaurantsComponent,
    AccueilComponent,
    BilletterieComponent,
    ConnectionComponent,
    ActualitesComponent,
    PlanDuParcComponent,
    ReservationBilletsComponent,
    HotelPageComponent,
    RestaurantsPageComponent,
    PlanDuParcPageComponent,
    InscriptionComponent,
    ConnectionComponent,
    JordanComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
