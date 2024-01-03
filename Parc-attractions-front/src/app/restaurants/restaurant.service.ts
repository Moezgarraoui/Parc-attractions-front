import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../model';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:8080/api/restaurant");
  }

  findById(id?: number): Observable<Restaurant> {
    return this.http.get<Restaurant>("http://localhost:8080/api/restaurant/"+id);
  }

  save(Restaurant: Restaurant): Observable<Restaurant> {
    if(Restaurant.id) {
      return this.http.put<Restaurant>("http://localhost:8080/api/restaurant/"+Restaurant.id, Restaurant);
    }
    
    return this.http.post<Restaurant>("http://localhost:8080/api/restaurant", Restaurant);
  }

  delete(id?: number): Observable<void> {
    return this.http.delete<void>("http://localhost:8080/api/restaurant/"+id);
  }
}
