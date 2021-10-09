import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private zone: NgZone, private router: Router) {
  }

  redirectLogin() {
    this.zone.run(() => {
      this.router.navigate(['inicio-sesion']);
    });
  }

  redirectToDashboard() {
    this.zone.run(() => {
      this.router.navigate(['opciones']);
    });
  }
}
