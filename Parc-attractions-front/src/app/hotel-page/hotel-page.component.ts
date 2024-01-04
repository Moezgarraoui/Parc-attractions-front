import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../model';
import { HotelService } from './hotel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent implements OnInit{
  hotelsArray:Hotel[]=[];
  result: Hotel[] = [];
  recherche: string = "";

  constructor(private router: Router, private hotelService: HotelService) {
  }
  
  ngOnInit() {
    // Au moment de l'initialisation, défile vers le haut de la page
    window.scrollTo(0, 0);
    this.loadHotel();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  redirect(){
    this.router.navigate(['/reservation_billets']);
  }

  rechercher(): Hotel[] {
    return this.hotelsArray.filter((hotel) =>
    (hotel.prixHotel !== undefined && hotel.prixHotel <= parseFloat(this.recherche)) ||
    (hotel.nomHotel?.toLowerCase().includes(this.recherche.toLowerCase()))
    );
  }
    
  loadHotel() {
    this.hotelService.findAll().subscribe(resp=>{this.hotelsArray=resp});
    this.hotelService.findAll().subscribe(resp=>{this.result=resp});
  }
}
