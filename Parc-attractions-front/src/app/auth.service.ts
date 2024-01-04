// Auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from './model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/connexion';
  private client?: Compte = undefined;
  private currentClientId?: number; // Nouvelle propriété pour stocker l'ID du client connecté

  constructor(private http: HttpClient, private router: Router) {}

  login(login: string, password: string) {
    this.http.post<Compte>(this.apiUrl, { "login": login, "password": password })
      .subscribe(
        resp => {
          this.client= resp;
          this.currentClientId = resp.id; // Enregistre l'ID du client
          localStorage.setItem("user", JSON.stringify(this.client));
          localStorage.setItem("user_id",JSON.stringify(this.currentClientId));
          this.router.navigate(["/accueil"]);
        },
        error => {
          console.error("Vérifiez votre mot de passe et identifiant.", error);
          alert("Vérifiez votre mot de passe et identifiant.");
        }
      );
  }

  logout() {
    this.client = undefined;
    this.currentClientId = undefined; // Réinitialise l'ID du client lors de la déconnexion
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    this.router.navigate(["/connexion"]);
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
        this.client = JSON.parse(user);
        return this.client;
      }
    }
    return undefined;
  }

  getCurrentClientId(): number | undefined {
    return this.currentClientId;
  }
}
