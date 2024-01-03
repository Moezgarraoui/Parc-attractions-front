import { Component, OnInit } from '@angular/core';

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
}
