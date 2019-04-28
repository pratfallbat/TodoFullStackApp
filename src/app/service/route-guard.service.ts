import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthenticationServiceService } from './auth/basic-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  
    if( this.h2.isUserLoggedIn()){
      return true;
    }
    else{

this.router.navigate(['login']);
      return false;
    }
  }

  constructor(private h: HardcodedAuthenticationService,private h2: BasicAuthenticationServiceService,private router:Router) { }
}
