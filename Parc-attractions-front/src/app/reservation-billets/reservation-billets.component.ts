
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Reservation, Visiteur } from '../model';
import { Observable } from 'rxjs';
import { VisiteurService } from './visiteur.service';
import { ReservationService } from './reservation.service';
import { HttpResponse } from '@angular/common/http';
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
  
  get visiteurs2() {
    return this.visiteursForm2.controls["visiteurs2"] as FormArray;
  }
  addReservation(){
    this.currentReservation=new Reservation();
    this.reservationService.save(this.currentReservation).subscribe(resp=>{
      this.currentReservation=resp;
    });
    console.log(this.currentReservation);
    this.showForm=true;
  }
  saveArray(){
    
    this.visiteurs2.value.forEach((v: Visiteur) => { 
      v.reservation=new Reservation();
      v.reservation.id=this.currentReservation.id;
      this.visiteurService.save(v).subscribe(resp=> {
        this.load2();
        
      });
    });
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
  constructor(private visiteurService: VisiteurService, private reservationService: ReservationService,private formBuilder: FormBuilder) {
   
  }
  ngOnInit(): void {
 
    this.visiteursForm2=this.formBuilder.group({
      dateDebut : new FormControl,
      visiteurs2 : this.formBuilder.array([])
    })
  
   
  }
  load() {
    this.visiteurs$ = this.visiteurService.findAll();
  }
  load2() {
    this.visiteurs2$ = this.visiteurService.findAll();
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
