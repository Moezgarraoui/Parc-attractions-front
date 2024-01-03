import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repas } from '../model';
@Injectable({
  providedIn: 'root'
})
export class RepasService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Repas[]> {
    return this.http.get<Repas[]>("http://localhost:8080/api/repas");
  }

  findById(id?: number): Observable<Repas> {
    return this.http.get<Repas>("http://localhost:8080/api/repas/"+id);
  }

  save(Repas: Repas): Observable<Repas> {
    if(Repas.id) {
      return this.http.put<Repas>("http://localhost:8080/api/repas/"+Repas.id, Repas);
    }
    
    return this.http.post<Repas>("http://localhost:8080/api/repas", Repas);
  }

  delete(id?: number): Observable<void> {
    return this.http.delete<void>("http://localhost:8080/api/repas/"+id);
  }
}
