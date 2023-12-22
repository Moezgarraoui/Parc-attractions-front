import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>("http://localhost:8080/api/reservation/");
  }

  findById(id?: number): Observable<Reservation> {
    return this.http.get<Reservation>("http://localhost:8080/api/reservation/"+id);
  }

  save(Reservation: Reservation): Observable<Reservation> {
    if(Reservation.id) {
      return this.http.put<Reservation>("http://localhost:8080/api/reservation/"+Reservation.id, Reservation);
    }

    return this.http.post<Reservation>("http://localhost:8080/api/reservation", Reservation);
  }

  delete(id?: number): Observable<void> {
    return this.http.delete<void>("http://localhost:8080/api/reservation/"+id);
  }
}
