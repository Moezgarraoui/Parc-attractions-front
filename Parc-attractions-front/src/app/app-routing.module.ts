import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { HotelComponent } from './hotel/hotel.component';
import { PlanDuParcComponent } from './plan-du-parc/plan-du-parc.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { ReservationBilletsComponent } from './reservation-billets/reservation-billets.component';
import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';
import { PlanDuParcPageComponent } from './plan-du-parc-page/plan-du-parc-page.component';

const routes: Routes = [
  { path: "plan-du-parc", component: PlanDuParcPageComponent },
  { path: "hotel", component: HotelPageComponent },
  { path: "reservation", component: ReservationComponent },
  { path: "accueil", component: AccueilComponent },  // Correction ici
  { path: "restaurant", component: RestaurantsPageComponent },
  { path: "reservation_billets", component: ReservationBilletsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
