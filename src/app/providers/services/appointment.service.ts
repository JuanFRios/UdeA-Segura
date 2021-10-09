import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewAppointment, ThrouhgGate } from 'src/app/models/appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAppointmentsByUser(): Observable<any> {
    const url = `${this.baseUrl}/appointments`;
    return this.http.get<any>(url);
  }

  newAppointment(appointment: NewAppointment): Observable<any> {
    const url = `${this.baseUrl}/appointments`;
    return this.http.post<any>(url, appointment);
  }

  removeAppointment(appointmentId: string): Observable<any> {
    const url = `${this.baseUrl}/appointments/${appointmentId}`;
    return this.http.delete<any>(url);
  }

  checkIn(checkIn: ThrouhgGate): Observable<any> {
    const url = `${this.baseUrl}/appointments/checkin`;
    return this.http.post<any>(url, checkIn);
  }

  checkOut(checkOut: ThrouhgGate): Observable<any> {
    const url = `${this.baseUrl}/appointments/checkout`;
    return this.http.post<any>(url, checkOut);
  }



}
