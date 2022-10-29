import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{



  constructor(
private basicAuthenticationService: BasicAuthenticationService

  ) { }

//we intercept the request
//pass in the parameter the httpRequest
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    // let username = 'user';
    // let password = 'password';
    //btoa permet davoir le bon encoding
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
   let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
   let username = this.basicAuthenticationService.getAuthenticatedUser();


   if(basicAuthHeaderString && username) { 

    request = request.clone(
        {
          setHeaders : { Authorization: basicAuthHeaderString }
      })

    }
      //we send the request toi the next httpHandler
      return next.handle(request);
  }
}
