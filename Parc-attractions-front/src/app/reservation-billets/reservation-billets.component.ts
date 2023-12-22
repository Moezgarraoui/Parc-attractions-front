import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Visiteur } from '../model';
import { Observable } from 'rxjs';
import { VisiteurService } from './visiteur.service';
@Component({
  selector: 'app-reservation-billets',
  templateUrl: './reservation-billets.component.html',
  styleUrls: ['./reservation-billets.component.css']
})

export class ReservationBilletsComponent {
  resForm!: FormGroup;
  nbVisForm!:FormGroup;

  id_resCtrl!: FormControl;
  nbVisiteursCtrl!:FormControl;
  idCtrl!: FormControl;
  nomCtrl!: FormControl;
  prenomCtrl!: FormControl;
  ageCtrl!: FormControl;
  tailleCtrl!: FormControl;
  numbers:number[]=[];

  showForm: boolean = false;
  visiteurs$!: Observable<Visiteur[]>;
  constructor(private visiteurService: VisiteurService, private formBuilder: FormBuilder) {
    this.load();
  }
  ngOnInit(): void {
    this.nbVisiteursCtrl=this.formBuilder.control('');
    this.idCtrl = this.formBuilder.control('');
    this.nomCtrl = this.formBuilder.control('');
    this.prenomCtrl = this.formBuilder.control('');
    this.ageCtrl = this.formBuilder.control('');
    this.tailleCtrl = this.formBuilder.control('');

    this.resForm = this.formBuilder.group( {
      id:this.idCtrl,
      nom: this.nomCtrl,
      prenom: this.prenomCtrl,
      age: this.ageCtrl,
      taille: this.tailleCtrl
    });

    this.nbVisForm=this.formBuilder.group({
      nbVisiteurs:this.nbVisiteursCtrl,
      id_res:this.id_resCtrl
    })
  }
  load() {
    this.visiteurs$ = this.visiteurService.findAll();
  }

  list() {
    return this.visiteurs$;
  }

  add() {
    this.resForm.reset();
    this.showForm = true;
  }

  edit(id?: number) {
    this.visiteurService.findById(id).subscribe(resp => {
      this.resForm.patchValue(resp);
      this.showForm = true;
    });
  }
  saveNbVisiteurs() {
    this.numbers = Array.from({length: this.nbVisiteursCtrl.value}, (_, i) => i + 1);
    console.log(this.numbers);
  }
  save() {
    this.visiteurService.save(this.resForm.value).subscribe(resp => this.load());
    this.cancel();
  }

  remove(id?: number) {
    this.visiteurService.delete(id).subscribe(resp => this.load());
  }

  cancel() {
    this.showForm = false;
    this.resForm.reset();
  }
}
