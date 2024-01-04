import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  constructor(private router: Router) {}

  goToConnection(){
    this.router.navigate(["./connection"]);
  }
}
