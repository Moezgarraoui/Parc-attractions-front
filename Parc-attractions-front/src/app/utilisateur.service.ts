// utilisateur.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Compte } from './model';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8080/inscription'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  inscription(Client: any): Observable<Client> {
    const client2 :any ={}
    const compte = new Compte(Client.login, Client.password, true);
    client2.compte = compte;
    client2.nom = Client.nom;
    client2.prenom = Client.prenom;
    client2.numero = Client.numero;
    client2.ville = Client.ville;
    client2.voie = Client.voie;
    client2.cp = Client.cp;

    return this.http.post<Client>(this.apiUrl, client2);
  }
}
