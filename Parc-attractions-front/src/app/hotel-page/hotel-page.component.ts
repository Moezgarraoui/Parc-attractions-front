import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent implements OnInit{

  ngOnInit() {
    // Au moment de l'initialisation, défile vers le haut de la page
    window.scrollTo(0, 0);
  }

  constructor(private router: Router) {}

  redirect(){
    this.router.navigate(['/reservation_billets']);
  }
}
