import { Restaurant } from '../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css']
})
export class RestaurantsPageComponent implements OnInit {

  restaurants: Restaurant[] = new Array<Restaurant>();
  recherche: string = "";

  constructor() {
    this.restaurants.push(new Restaurant(1, "Ciné-gastronomie", "Cuisine du monde","Amélie's Delight"));
    this.restaurants.push(new Restaurant(2, "Symphonie gourmande", "Français","Escargots en Serenade"));
    this.restaurants.push(new Restaurant(3, "Hard Rock hideaway", "Américaine","AC/DC Angus Burger"));
  }

rechercher(): Restaurant[] {
  return this.restaurants.filter((restaurant) =>
  restaurant.specialite?.toLowerCase().includes(this.recherche.toLowerCase()) ||
  restaurant.titre?.toLowerCase().includes(this.recherche.toLowerCase())
  );
  }

  ngOnInit() {
    // Au moment de l'initialisation, défile vers le haut de la page
    window.scrollTo(0, 0);
  }
}
