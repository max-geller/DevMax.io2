import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot, Route, RouterStateSnapshot } from '@angular/router';
import { map, tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

import { User } from '../models/user.model';
import { Role } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }


  canActivate() {
    if (this.auth.isLoggedIn()) {

      if (this.auth.user$['roles'] === 'Client') {
        this.router.navigate(['/client']);
        console.log(this.auth.user$ + 'whoa man, yous a client!')
      }

      if (this.auth.user$['roles'] === 'Admin') {
        this.router.navigate(['/admin']);
      }


      if (this.auth.user$['roles'] === 'Team') {
        this.router.navigate(['/team']);
      }
      this.router.navigate(['/403']);
      return false;
    }
  }
}
