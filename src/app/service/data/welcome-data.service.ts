import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constant';


export class HelloWorldBean {

constructor(public message:string) {}


}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
private http:HttpClient

 

  ) { }


executeHelloWorldBeanService(){
return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
//console.log(" Execute Hello WORLD BEAN SERVICE ");

}
  //http://localhost:8080/hello-world/path-variable/Zakaria
executeHelloWorldBeanServiceWithPathVariable(name: any){

//   //je met dans une variable, le résultat de la méthode crée plus bas qui stock les username+password =)
//   let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
// //je créé le headers, grace a une classe Httpheaders qui existe au sein d'angular
// let headers = new HttpHeaders({
//   // je passe dans l'objet authorization, la variable contenant le résutlat de la méhode créé plus bas
// Authorization: basicAuthHeaderString
// })

  return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`)
 // {headers:headers});
  //console.log(" Execute Hello WORLD BEAN SERVICE ");
  }

  // createBasicAuthenticationHttpHeader () {
  //   let username = 'user';
  //   let password = 'password';
  //   //btoa permet davoir le bon encoding
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;

  // }


}
