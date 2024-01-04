// Auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Compte } from './model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/connexion';
  private client?: Compte = undefined;
  private currentClientId?: number; // Nouvelle propriété pour stocker l'ID du client connecté

  constructor(private http: HttpClient, private router: Router) {}

  private isAdmin = false;

  setAdmin(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  login(login: string, password: string) {
    this.http
      .post<Compte>(this.apiUrl, { login: login, password: password })
      .subscribe(
        (resp) => {
          if (resp.admin === true) {
            this.loginAsAdmin();
          } else {
            this.client = resp;
            this.currentClientId = resp.id; // Enregistre l'ID du client
            localStorage.setItem('user', JSON.stringify(this.client));
            localStorage.setItem('user_id', JSON.stringify(this.currentClientId));
            this.router.navigate(['/accueil']);
          }
        },
        (error) => {
          console.error('Vérifiez votre mot de passe et identifiant.', error);
          alert('Vérifiez votre mot de passe et identifiant.');
          localStorage.setItem('user', JSON.stringify(this.client));
          localStorage.setItem('user_id', JSON.stringify(this.currentClientId));
          this.router.navigate(['/accueil']);
        }
      );
  }

  logout() {
    this.client = undefined;
    this.currentClientId = undefined; // Réinitialise l'ID du client lors de la déconnexion
    localStorage.removeItem('user');
    localStorage.removeItem('user_id');
    this.router.navigate(['/connection']);
  }

  isLogged(): boolean {
    const client = this.getClient();
    
    return client !== undefined;
  }

  getClient(): Compte | undefined {
    if (this.client) {
    return this.client;
    } else {
    const user = localStorage.getItem("user");
    if (user) {
    try {
    this.client = JSON.parse(user);
    return this.client;
    } catch (error) {
   // console.error("Erreur lors de la conversion JSON :", error);
    }
    }
    }
    return undefined;
    }

  getCurrentClientId(): number | undefined {
    return this.currentClientId;
  }

  loginAsAdmin(): Observable<Compte> {
    const adminLoginData = {
      login: 'canard',
      password: 'canard',
    };

    // Retournez l'Observable directement
    return this.http.post<Compte>(`${this.apiUrl}`, adminLoginData);
  }
}
