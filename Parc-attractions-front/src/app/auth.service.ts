// Auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, Compte } from './model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/connexion';
  private client?:Compte=undefined
  constructor(private http: HttpClient, private router: Router) {}

  // login(compte: Compte): Observable<any> {
  //   return this.http.post<Compte>(this.apiUrl, compte);
    
  // }
  login(login: string, password: string){
    return this.http.post<Compte>(this.apiUrl, { "login": login, "password": password }).subscribe(resp=>{
      this.client=resp;
      localStorage.setItem("user", JSON.stringify(this.client));

      this.router.navigate(["/accueil"]);
    });
   
  }

  logout() {
    
    this.client = undefined;
    localStorage.removeItem("user");
  }

  isLogged(): boolean {
    const client = this.getClient();
    
    return client != undefined;
  }
  getClient(): Compte | undefined{
    if(this.client) {
      return this.client;
    } else {
      const user = localStorage.getItem("user")
      if(user) {
        this.client = JSON.parse(user);
        return this.client;
      }
    }

    return undefined;
  }
}
