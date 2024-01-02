// connection.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Compte } from '../model';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {
  loginForm: FormGroup;
  loading: boolean = false;
  showWelcomeAlert: boolean = false;

  // Ajout des contrôles de formulaire
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Définition des contrôles de formulaire
    this.usernameCtrl = this.fb.control("", Validators.required);
    this.passwordCtrl = this.fb.control("", [Validators.required, Validators.minLength(5)]);

    // Création du formulaire avec les contrôles
    this.loginForm = this.fb.group({
      login: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      const compte: Compte = {
        login: this.loginForm.value.login,
        password: this.loginForm.value.password
      };

      this.authService.login(compte).subscribe(
        data => {
          console.log('Bienvenue !', data);
          this.loading = false;
          this.showWelcomeAlert = true;
          // Redirigez vers la page d'accueil après une connexion réussie
          this.router.navigate(['/accueil']); 
        },
        error => {
          console.error('Erreur de connexion', error);
          this.loading = false;
          alert("Vérifiez votre mot de passe et identifiant.");
        }
      );
    }
  }
}
