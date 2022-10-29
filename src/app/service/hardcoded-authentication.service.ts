import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }



authenticate (username : string, password : string) {

  // onva utiliser la méthode isUserLoggedIn pr vérifier s'il est logger ou pas
  //console.log('before' + this.isUserLoggedIn());
  if (username === "Zakaria" && password === "anissa") {
    sessionStorage.setItem('authenticaterUser', username);
   // console.log( 'after' + this.isUserLoggedIn());
    return true;
  }
  return false;

}

// on récupere le authenticaterUser pr check s'il existe ou pas !
isUserLoggedIn() {

let user = sessionStorage.getItem('authenticaterUser')
return !(user === null)


}


logout() {

sessionStorage.removeItem('authenticaterUser')

}

}
