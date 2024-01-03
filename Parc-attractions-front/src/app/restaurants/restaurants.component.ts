import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {

  isZoomed: boolean = false;

  constructor(private router: Router) {}

  redirect(){
    this.router.navigate(['/restaurant']);
  }
}
