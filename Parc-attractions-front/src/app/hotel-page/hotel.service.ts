import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../model';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>("http://localhost:8080/api/hotel");
  }

  findById(id?: number): Observable<Hotel> {
    return this.http.get<Hotel>("http://localhost:8080/api/hotel/"+id);
  }

  save(Hotel: Hotel): Observable<Hotel> {
    if(Hotel.id) {
      return this.http.put<Hotel>("http://localhost:8080/api/hotel/"+Hotel.id, Hotel);
    }
    
    return this.http.post<Hotel>("http://localhost:8080/api/hotel", Hotel);
  }

  delete(id?: number): Observable<void> {
    return this.http.delete<void>("http://localhost:8080/api/hotel/"+id);
  }
}
