// Auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from './model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/connexion';

  constructor(private http: HttpClient) {}

  login(compte: Compte): Observable<any> {
    return this.http.post<any>(this.apiUrl, compte);
  }
}
