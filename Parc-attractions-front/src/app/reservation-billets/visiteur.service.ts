import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visiteur } from '../model';
@Injectable({
  providedIn: 'root'
})
export class VisiteurService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Visiteur[]> {
    return this.http.get<Visiteur[]>("http://localhost:8080/api/visiteur/");
  }

  findById(id?: number): Observable<Visiteur> {
    return this.http.get<Visiteur>("http://localhost:8080/api/visiteur/"+id);
  }

  save(Visiteur: Visiteur): Observable<Visiteur> {
    if(Visiteur.id) {
      return this.http.put<Visiteur>("http://localhost:8080/api/visiteur/"+Visiteur.id, Visiteur);
    }
    
    return this.http.post<Visiteur>("http://localhost:8080/api/visiteur", Visiteur);
  }

  delete(id?: number): Observable<void> {
    return this.http.delete<void>("http://localhost:8080/api/visiteur/"+id);
  }
}
