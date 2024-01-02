import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-du-parc-page',
  templateUrl: './plan-du-parc-page.component.html',
  styleUrls: ['./plan-du-parc-page.component.css']
})
export class PlanDuParcPageComponent {

Attraction1 : boolean = false;
Attraction2 : boolean = false;
Attraction3 : boolean = false;
Attraction4 : boolean = false;
Attraction5 : boolean = false;

showAttraction1(){
  this.Attraction1=true;
  this.Attraction2=false;
  this.Attraction3=false;
  this.Attraction4=false;
  this.Attraction5=false;
}

showAttraction2(){
  this.Attraction1=false;
  this.Attraction2=true;
  this.Attraction3=false;
  this.Attraction4=false;
  this.Attraction5=false;
}

showAttraction3(){
  this.Attraction1=false;
  this.Attraction2=false;
  this.Attraction3=true;
  this.Attraction4=false;
  this.Attraction5=false;
}

showAttraction4(){
  this.Attraction1=false;
  this.Attraction2=false;
  this.Attraction3=false;
  this.Attraction4=true;
  this.Attraction5=false;
}

showAttraction5(){
  this.Attraction1=false;
  this.Attraction2=false;
  this.Attraction3=false;
  this.Attraction4=false;
  this.Attraction5=true;
}


}
