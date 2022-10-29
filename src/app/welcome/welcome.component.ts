import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


welcomeMessageFromService:string | undefined
  



executeHelloWorldBeanServiceWithPathVariable(name: any) { }

getWelcomeMessageWithParameter() {
  console.log(this.service.executeHelloWorldBeanService());

  //call the service, and when a response comes back, do what inside th subscribe method
  // but it takes longer, it means that, we continue after, even if the response does not comes back, that why
  //the console log appear before the response :)
  this.service.executeHelloWorldBeanServiceWithPathVariable (this.name).subscribe(
    (    response: any) => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
  );

  ;

  console.log('last line');
}


  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());

    //call the service, and when a response comes back, do what inside th subscribe method
    // but it takes longer, it means that, we continue after, even if the response does not comes back, that why
    //the console log appear before the response :)
    this.service.executeHelloWorldBeanService().subscribe(
      (    response: any) => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    ;

    console.log('last line');
  }
  handleErrorResponse(error: any){
    
    this.welcomeMessageFromService = error.error.message
    
  }

  handleSuccessfulResponse(response: any) {

    this.welcomeMessageFromService = response.message;
    console.log(response);
    console.log(response.message);
    
  }

 name = ''

//ActivatedRoute, permet d'accepter le paramètre passé dans le path et de pouvoir l'utiliser
// activated route cad la route qui est actuellement active
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService)  { }

  ngOnInit(): void {


console.log(this.route.snapshot.params['name'])

// j'assigne a name, qui est une variable de welcome component, le résultat du paramètre envoyé apr la login page et envoyé 
// par router.navigate !
this.name = this.route.snapshot.params['name']
  }

}
