import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { PlanDuParcComponent } from './plan-du-parc/plan-du-parc.component';
import { ReservationComponent } from './reservation/reservation.component';

import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { JordanComponent } from './jordan/jordan.component';
import { PlanDuParcPageComponent } from './plan-du-parc-page/plan-du-parc-page.component';
import { ReservationBilletsComponent } from './reservation-billets/reservation-billets.component';
import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';

const routes: Routes = [
  { path: "jordan", component: JordanComponent},

    { path: "plan-du-parc", component: PlanDuParcPageComponent },

  { path: "plan-du-parc", component: PlanDuParcPageComponent },
  { path: "plan-du-parc", component: PlanDuParcComponent},
  { path: "inscription", component: InscriptionComponent},

  { path: "hotel", component: HotelPageComponent},
{ path: "reservation", component: ReservationComponent},
  //{ path: 'reservation', component: ReservationComponent, canActivate: [AdminGuard] },

  { path: "accueil", component: AccueilComponent},  // Correction ici
  { path: "restaurant", component: RestaurantsPageComponent},
  { path: "reservation_billets", component: ReservationBilletsComponent},
  { path: 'connection', component: ConnectionComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
