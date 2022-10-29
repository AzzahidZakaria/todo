import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  

  constructor( private router: Router,
    public hardcodedAuthenticationService : HardcodedAuthenticationService) {

   }


   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    //so, only when the user has logged in, we return true
if(this.hardcodedAuthenticationService.isUserLoggedIn())
  return true;

  //route towards the login page
  this.router.navigate(['login']);

return false;
  
}
}
