import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-du-parc',
  templateUrl: './plan-du-parc.component.html',
  styleUrls: ['./plan-du-parc.component.css']
})
export class PlanDuParcComponent {

  constructor(private router: Router) {}

  redirect(){
    this.router.navigate(['/plan-du-parc']);
  }
}
