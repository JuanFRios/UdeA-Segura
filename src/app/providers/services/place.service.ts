import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from 'src/app/models/place';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<any> {
    const url = `${this.baseUrl}/places`;
    return this.http.get<any>(url);
  }

  getPlaceById(placeId: string): Observable<any> {
    const url = `${this.baseUrl}/places/${placeId}`;
    return this.http.get<any>(url);
  }

  newPlace(place: Place): Observable<any> {
    const url = `${this.baseUrl}/places`;
    return this.http.post<any>(url, place);
  }

  checkIn(place: Place): Observable<any> {
    const url = `${this.baseUrl}/places`;
    return this.http.post<any>(url, place);
  }



}
