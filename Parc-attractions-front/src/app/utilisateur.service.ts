// utilisateur.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8080/inscription'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  inscription(Client: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, Client);
  }
}