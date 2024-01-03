
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Client, Hotel, Repas, Reservation, Restaurant, Visiteur } from '../model';
import { Observable } from 'rxjs';
import { VisiteurService } from './visiteur.service';
import { ReservationService } from './reservation.service';
import { HotelService } from '../hotel-page/hotel.service';
import { HttpResponse } from '@angular/common/http';
import { RestaurantService } from '../restaurants/restaurant.service';
import { RepasService } from '../restaurants/repas.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-reservation-billets',
  templateUrl: './reservation-billets.component.html',
  styleUrls: ['./reservation-billets.component.css']
})

export class ReservationBilletsComponent {
  resForm!: FormGroup;
  nbVisForm!:FormGroup;
  visiteurs!: FormArray;
  id_resCtrl!: FormControl;
  nbVisiteursCtrl!:FormControl;
  idCtrl!: FormControl;
  nomCtrl!: FormControl;
  prenomCtrl!: FormControl;
  ageCtrl!: FormControl;
  tailleCtrl!: FormControl;
  reservationCtrl!:FormControl;
  numbers:number[]=[];
visiteursForm!:FormGroup;
  showForm: boolean = false;
  visiteurs$!: Observable<Visiteur[]>;
  reservations$!: Observable<Reservation[]>;
  currentReservation!:Reservation;
  visiteur!:Visiteur;
visiteurs2$!: Observable<Visiteur[]>;
visiteursForm2!:FormGroup;
  dateReservation!:FormControl;
  showResHotel:boolean=false;
  hotels$!: Observable<Hotel[]>;
  hotelsArray:Hotel[]=[];

  restauArray:Restaurant[]=[];
  showResRepas:boolean=false;
  firstRepas:boolean=false;
  repasList$!:Observable<Repas[]>;
  repasLoad$!:Observable<Repas[]>;
  client!:Client;
  get visiteurs2() {
    return this.visiteursForm2.controls["visiteurs2"] as FormArray;
  }
  get repasList() {
    return this.visiteursForm2.controls["repasList"] as FormArray;
  }
  addReservation(){
    this.currentReservation=new Reservation();
    let client:Client=new Client();
    client.id=parseInt(localStorage.getItem('user_id')!,10);
    //if(localStorage.getItem('user_id')){
    //this.currentReservation.client.id=n;
    //}
    this.currentReservation.client=client;
    console.log(this.currentReservation);
    this.reservationService.save(this.currentReservation).subscribe(resp=>{
      this.currentReservation=resp;
    });
    this.showForm=true;
    //console.log(this.authService.getCurrentClientId());
    //console.log(localStorage.getItem('user_id'));
   //console.log(this.hotelsArray);
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
  }
  ouvrirResHotel(){
    this.showResHotel=true;
  }
  ouvrirResRepas(){
    this.showResRepas=true;
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
    console.log(this.restauArray);
    const repasForm = this.formBuilder.group({
      id:new FormControl,
      restaurant: new FormControl,
      heureRepas: new FormControl,
      dateRepas: new FormControl,
      //reservation: new FormControl,
    });
    //console.log(repasForm.value);
    this.repasList.push(repasForm);
    if(this.firstRepas==false){
        this.firstRepas;
    }
  }
  constructor(private visiteurService: VisiteurService, private authService:AuthService, private hotelService: HotelService, private reservationService: ReservationService,private restauService:RestaurantService, private formBuilder: FormBuilder, private repasService:RepasService) {
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
  load() {
    this.visiteurs$ = this.visiteurService.findAll();
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
  list() {
    return this.visiteurs$;
  }
  get visiteursArray(){
    return this.visiteursForm.get('visiteurs') as FormArray;
  }
  get visiteursControlsArray(){
    return this.visiteursArray.controls as FormGroup[];
  }
  
}
