import { Router } from '@angular/router';
import { Restaurant } from '../model';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants/restaurant.service';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css']
})
export class RestaurantsPageComponent implements OnInit {
  restaurantsArray: Restaurant[]=[];
  result: Restaurant[] = [];
  recherche: string = "";

  constructor(private router: Router, private restaurantService: RestaurantService) {
  }

rechercher(): Restaurant[] {
  return this.restaurantsArray.filter((restaurant) =>
  restaurant.specialite?.toLowerCase().includes(this.recherche.toLowerCase()) ||
  restaurant.nom?.toLowerCase().includes(this.recherche.toLowerCase())
  );
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.loadHotel();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  redirect(){
    if(this.router){
      this.router.navigate(['/reservation_billets']);
    }
  }
    
  loadHotel() {
    this.restaurantService.findAll().subscribe(resp=>{this.restaurantsArray=resp});
    this.restaurantService.findAll().subscribe(resp=>{this.result=resp});
  }
  
}
