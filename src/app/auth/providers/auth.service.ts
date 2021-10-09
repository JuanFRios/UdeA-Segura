import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin, User, RenewTokenUser } from 'src/app/models/user';
import { environment } from '../../../environments/environment';
import { RouterService } from './../../providers/services/router.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private routerService: RouterService) { }

  login(user: UserLogin): Observable<any> {
    const url = `${this.baseUrl}/auth`;
    return this.http.post<any>(url, user);
  }

  newUser(user: User): Observable<any> {
    const url = `${this.baseUrl}/auth/new`;
    return this.http.post<any>(url, user);
  }

  renewToken(): Observable<RenewTokenUser> {
    const url = `${this.baseUrl}/auth/renew`;
    return this.http.get<RenewTokenUser>(url);
  }
}
