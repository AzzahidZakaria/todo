import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constant';


export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http:HttpClient
  ) { }


// //HARDCODED
// authenticate (username : string, password : string) {

//   // onva utiliser la méthode isUserLoggedIn pr vérifier s'il est logger ou pas
//   //console.log('before' + this.isUserLoggedIn());
//   if (username === "Zakaria" && password === "anissa") {
//     sessionStorage.setItem(AUTHENTICATED_USER, username);
//    // console.log( 'after' + this.isUserLoggedIn());
//     return true;
//   }
//   return false;

// }

executeJWTAuthenticationService(username : string, password : string){

  
  //j'envoi une poste request car la première étape de JWT est d'envoyer un post request a /authenticate pr recevoir le token !
  return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password

  }).pipe(

    map(
      //on récupère dans les donnée,s le user name et le token
      (data: any) => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKEN,  `Bearer ${data.token}`);
        return data;
      }
    )

  );

  }

  //méthode permettant de faire l'authentification avec le basic auth
executeAuthenticationService(username : string, password : string){

  let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  
  //je créé le headers, grace a une classe Httpheaders qui existe au sein d'angular
  let headers = new HttpHeaders({
  // je passe dans l'objet authorization, la variable contenant le résutlat de la méhode créé plus bas
    Authorization: basicAuthHeaderString
      })

  return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
  //if it successful, we are passing a pipe,n allow us to declare what shoule be done it is success or not
  {headers:headers}).pipe(

    map(
      (data: any) => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKEN, basicAuthHeaderString);
        return data;
      }
    )

  );
  //console.log(" Execute Hello WORLD BEAN SERVICE ");
  }

getAuthenticatedToken() {
  if(this.getAuthenticatedUser()) {

    return sessionStorage.getItem(TOKEN);

  }
      return sessionStorage.getItem(TOKEN);
    }

getAuthenticatedUser() {

    return sessionStorage.getItem(AUTHENTICATED_USER);
    
    }

// on récupere le authenticaterUser pr check s'il existe ou pas !
isUserLoggedIn() {

let user = sessionStorage.getItem(AUTHENTICATED_USER)
return !(user === null)

}


logout() {

sessionStorage.removeItem(AUTHENTICATED_USER)
sessionStorage.removeItem(TOKEN)

}

}



export class AuthenticationBean {

constructor(
  public message:string
) {}

}