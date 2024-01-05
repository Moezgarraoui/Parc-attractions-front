
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Client, Compte, Hotel, Repas, Reservation, Restaurant, Visiteur } from '../model';
import { Observable } from 'rxjs';
import { VisiteurService } from './visiteur.service';
import { ReservationService } from './reservation.service';
import { HotelService } from '../hotel-page/hotel.service';
import { RestaurantService } from '../restaurants/restaurant.service';
import { RepasService } from '../restaurants/repas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservation-billets',
  templateUrl: './reservation-billets.component.html',
  styleUrls: ['./reservation-billets.component.css']
})

export class ReservationBilletsComponent {
  visiteurs!: FormArray;
visiteursForm!:FormGroup;
  showForm: boolean = false;
  visiteurs$!: Observable<Visiteur[]>;
  reservations$!: Observable<Reservation[]>;
  currentReservation!:Reservation;
visiteurs2$!: Observable<Visiteur[]>;
visiteursForm2!:FormGroup;
  showResHotel:boolean=false;
  showBeginning:boolean=true;
  hotels$!: Observable<Hotel[]>;
  hotelsArray:Hotel[]=[];
  restauArray:Restaurant[]=[];
  showResRepas:boolean=false;
  repasList$!:Observable<Repas[]>;
  repasLoad$!:Observable<Repas[]>;
  client!:Client;

  constructor(private visiteurService: VisiteurService, private router: Router, private hotelService: HotelService, private reservationService: ReservationService,private restauService:RestaurantService, private formBuilder: FormBuilder, private repasService:RepasService) {
  }
  ngOnInit(): void {
 
    this.visiteursForm2=this.formBuilder.group({
      dateReservation : this.formBuilder.control(''),
      dateFinReservation : this.formBuilder.control(''),
      visiteurs2 : this.formBuilder.array([]),
      hotel : this.formBuilder.control(''),
      repasList : this.formBuilder.array([])
    })
  
   this.loadHotel();
   this.loadRestau();
  }
  get visiteurs2() {
    return this.visiteursForm2.controls["visiteurs2"] as FormArray;
  }
  get repasList() {
    return this.visiteursForm2.controls["repasList"] as FormArray;
  }
  addReservation(){
    this.currentReservation=new Reservation();
    let compte:Compte=new Compte();
    compte.id=parseInt(localStorage.getItem('user_id')!,10);
    this.currentReservation.compte=compte;
    this.reservationService.save(this.currentReservation).subscribe(resp=>{
      this.currentReservation=resp;
    });
    this.showForm=true;
   
   this.showBeginning=false;
  }
  saveArray(){

    this.visiteurs2.value.forEach((v: Visiteur) => { 
      v.reservation=new Reservation();
      v.reservation.id=this.currentReservation.id;
      this.visiteurService.save(v).subscribe(resp=> {
        this.load2();
      });
    });
    this.repasList.value.forEach((r: any) => { 
      let repas:Repas=new Repas();
      repas.reservation=new Reservation();
      repas.reservation.id=this.currentReservation.id;
      repas.restaurant=new Restaurant();
      repas.restaurant.id=+r.restaurant;
      repas.dateRepas=r.dateRepas;
      repas.heureRepas=r.heureRepas;
      
      this.repasService.save(repas).subscribe(resp=> {
        this.loadRepas();
        
      });
    });
    this.currentReservation.dateFinReservation=this.visiteursForm2.value.dateFinReservation;
    this.currentReservation.dateReservation=this.visiteursForm2.value.dateReservation;
    
   if(this.visiteursForm2.getRawValue().hotel){
    this.currentReservation.hotel=new Hotel(this.visiteursForm2.getRawValue().hotel);
   }
    this.reservationService.save(this.currentReservation).subscribe(resp=>{
      this.loadReservations();
    })
    this.router.navigate(["./accueil"]);
  }
  ouvrirResHotel(){
    this.showResHotel=true;
  }
  loadHotel() {
    this.hotelService.findAll().subscribe(resp=>{this.hotelsArray=resp});
  }
  listHotel(){
    this.loadHotel();
    return this.hotelsArray;
  }
  loadRestau(){
    this.restauService.findAll().subscribe(resp=>{this.restauArray=resp});
  }
  listRestau(){
    this.loadRestau();
    return this.restauArray;
  }
  addVisiteur2(){
    const visForm2 = this.formBuilder.group({
      id:new FormControl,
      nom: new FormControl,
      prenom: new FormControl,
      age: new FormControl,
      taille: new FormControl,
    })
    this.visiteurs2.push(visForm2);
  }
  addRepas(){
    const repasForm = this.formBuilder.group({
      id:new FormControl,
      restaurant: new FormControl,
      heureRepas: new FormControl,
      dateRepas: new FormControl,
    });
    this.repasList.push(repasForm);
  }
  
  load2() {
    this.visiteurs2$ = this.visiteurService.findAll();
  }
  loadRepas(){
    this.repasLoad$=this.repasService.findAll();
  }
  loadReservations(){
    this.reservations$ = this.reservationService.findAll();
  }
  
  
}
