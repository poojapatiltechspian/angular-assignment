import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('user') === null) {
      this.router.navigate(['/user/login']);
      return false;
    }
    return true;
  }
}
