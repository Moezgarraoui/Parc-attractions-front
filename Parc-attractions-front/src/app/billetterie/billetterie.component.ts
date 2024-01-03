import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billetterie',
  templateUrl: './billetterie.component.html',
  styleUrls: ['./billetterie.component.css']
})
export class BilletterieComponent {
  
  constructor(private router: Router) {}

  redirect(){
    this.router.navigate(['/reservation']);
  }
}
