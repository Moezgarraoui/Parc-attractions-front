import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css']
})
export class RestaurantsPageComponent implements OnInit {

  ngOnInit() {
    // Au moment de l'initialisation, défile vers le haut de la page
    window.scrollTo(0, 0);
  }
}
