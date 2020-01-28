import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../servicio/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthoGuardGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.getAuthStatus()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

}
