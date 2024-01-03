import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  constructor(private router: Router) {}
  
  redirect(){
    this.router.navigate(['/hotel']);
  }
}
