import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { HotelComponent } from './hotel/hotel.component';
import { PlanDuParcComponent } from './plan-du-parc/plan-du-parc.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  {path: "plan-du-parc", component: PlanDuParcComponent},
  {path: "hotel", component: HotelComponent},
  {path: "reservation", component: ReservationComponent},
  {path: "acceil", component: AccueilComponent},
  {path: "restaurant", component: RestaurantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
