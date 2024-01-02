import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private utilisateurService: UtilisateurService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numero: [''],
      ville: [''],
      voie: [''],
      codePostal: [''],
      identifiant: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  Registration() {
    this.utilisateurService.inscription(this.myForm.value).subscribe(
      (response) => {
        console.log('Inscription réussie:', response);
        // Ajoutez ici la logique de redirection ou d'affichage de messages de succès
      },
      (error) => {
        console.error('Erreur lors de l\'inscription:', error);
        // Ajoutez ici la logique pour gérer les erreurs (affichage de messages d'erreur, etc.)
      }
    );
  }
}
