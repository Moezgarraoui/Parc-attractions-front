import { Router } from '@angular/router';
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

  constructor(private router?: Router) {
    this.restaurants.push(new Restaurant(1, "Ciné-gastronomie", "Cuisine du monde","Amélie's Delight"));
    this.restaurants.push(new Restaurant(2, "Symphonie gourmande", "Français","Escargots en Serenade"));
    this.restaurants.push(new Restaurant(3, "Hard Rock hideaway", "Américaine","AC/DC Angus Burger"));
  }
  
  result = this.restaurants;

rechercher(): Restaurant[] {
  return this.restaurants.filter((restaurant) =>
  restaurant.specialite?.toLowerCase().includes(this.recherche.toLowerCase()) ||
  restaurant.nom?.toLowerCase().includes(this.recherche.toLowerCase())
  );
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  redirect(){
    if(this.router){
    this.router.navigate(['/reservation_billets']);
  }
  }
  
}
