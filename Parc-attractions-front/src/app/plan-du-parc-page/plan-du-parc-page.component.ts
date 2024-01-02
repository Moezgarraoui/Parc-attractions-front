
import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-plan-du-parc-page',
  templateUrl: './plan-du-parc-page.component.html',
  styleUrls: ['./plan-du-parc-page.component.css']
})
export class PlanDuParcPageComponent{

Attraction1 : boolean = false;
Attraction2 : boolean = false;
Attraction3 : boolean = false;
Attraction4 : boolean = false;
Attraction5 : boolean = false;

@ViewChild("scrollElement1")
 scrollEl1!: ElementRef;
@ViewChild("scrollElement2")
 scrollEl2!: ElementRef;
@ViewChild("scrollElement3")
 scrollEl3!: ElementRef;
@ViewChild("scrollElement4")
 scrollEl4!: ElementRef;
@ViewChild("scrollElement5")
 scrollEl5!: ElementRef;   

showAttraction1(){
  this.Attraction1=true;
  this.Attraction2=false;
  this.Attraction3=false;
  this.Attraction4=false;
  this.Attraction5=false;

  setTimeout(() => {
    if (this.scrollEl1?.nativeElement) {
      this.scrollEl1.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

showAttraction2(){
  this.Attraction1=false;
  this.Attraction2=true;
  this.Attraction3=false;
  this.Attraction4=false;
  this.Attraction5=false;

  setTimeout(() => {
    if (this.scrollEl2?.nativeElement) {
      this.scrollEl2.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

showAttraction3(){
  this.Attraction1=false;
  this.Attraction2=false;
  this.Attraction3=true;
  this.Attraction4=false;
  this.Attraction5=false;

  setTimeout(() => {
    if (this.scrollEl3?.nativeElement) {
      this.scrollEl3.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

showAttraction4(){
  this.Attraction1=false;
  this.Attraction2=false;
  this.Attraction3=false;
  this.Attraction4=true;
  this.Attraction5=false;

  setTimeout(() => {
    if (this.scrollEl4?.nativeElement) {
      this.scrollEl4.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

showAttraction5(){
  this.Attraction1=false;
  this.Attraction2=false;
  this.Attraction3=false;
  this.Attraction4=false;
  this.Attraction5=true;

  setTimeout(() => {
    if (this.scrollEl5?.nativeElement) {
      this.scrollEl5.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}


}
