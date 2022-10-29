import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = 'Zakaria'
  password = ''
  errorMessage ='Invalid Credentials'
  okMessage = 'credentials are OK'
  invalidLogin = false
  validLogin = false



  //Router instance
  // Router est une dépendance de Login
  //Angular.giveMeRouter
  //Dependency Injection = if i need something i have to decalrat it as an dependecy & Angular give it to me !


  // i have injected the hardcodedAuth Service by constructor !
  //So the Login comp, that need the hardcodedAuth service to be able to work, have it now, by dependency injection  !!
  constructor( private router : Router ,
    public hardcodedAuthenticationService : HardcodedAuthenticationService,
    private BasicAuthenticationService : BasicAuthenticationService) { }

    //pour faire le Login avec JWT framework
    handleJWTAuthLogin() {

      //console.log(this.username);
        console.log(this.username)
        console.log(this.password)
    
        this.BasicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
        .subscribe(
    
          data => {
    
            console.log(data);
            this.router.navigate(['welcome',this.username]);
            this.invalidLogin = false
            this.validLogin = true
          } , 
    
          error => {
    
              //console.log(error);
              this.invalidLogin = true
              this.validLogin = false
    
            }
        ) 
    
    
      }

      //pour faire le login avec basic auth
  handleBasicAuthLogin() {

  //console.log(this.username);
    console.log(this.username)
    console.log(this.password)

    this.BasicAuthenticationService.executeAuthenticationService(this.username,this.password)
    .subscribe(

      data => {

        console.log(data);
        this.router.navigate(['welcome',this.username]);
        this.invalidLogin = false
        this.validLogin = true
      } , 

      error => {

          //console.log(error);
          this.invalidLogin = true
          this.validLogin = false

        }
    ) 


  }

  handleLogin() {

    //console.log(this.username);
      console.log(this.username)
      console.log(this.password)
  
      if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
        this.router.navigate(['welcome', this.username])
  
        this.invalidLogin = false
        this.validLogin = true
      } else {
  
        this.invalidLogin = true
        this.validLogin = false
      }
  
  
    }
  ngOnInit(): void {
  }

}
