import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // ? for the deployment and viewing to users
    // if (!localStorage.getItem('email')) {
    //   this.router.navigate(['login']);
    //   return true;
    // }
    return true;
  }
}
