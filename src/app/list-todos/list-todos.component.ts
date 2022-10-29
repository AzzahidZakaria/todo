import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {

constructor(
  
  public id: number,
  public description :string,
  public done: boolean,
  public targetDate: Date

) {}

}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  username = 'Zakaria'

  message : string | undefined

  todos : Todo[]
  // todos = [
  //   new Todo( 1, ' learn Dependency injection', false, new Date()),
  //   new Todo( 2, ' learn Angular again', false, new Date()),
  //   new Todo( 3, ' learn to be a good BA or FA', false, new Date()),
  //   // { id : 1, description : ' learn angular'},
  //   // { id : 2, description : ' visit USA'},
  //   // { id : 3, description : ' have a child'},
  | undefined
  
  
  // todos = [
  //   new Todo( 1, ' learn Dependency injection', false, new Date()),
  //   new Todo( 2, ' learn Angular again', false, new Date()),
  //   new Todo( 3, ' learn to be a good BA or FA', false, new Date()),
    
  //   // { id : 1, description : ' learn angular'},
  //   // { id : 2, description : ' visit USA'},
  //   // { id : 3, description : ' have a child'},

  //]


  constructor(

    private todoService:TodoDataService,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.refreshTodos();

  }

  refreshTodos() {

    this.todoService.retrieveAllTodos('Zakaria').subscribe(

      response => {
        this.todos = response;
      }

     )

  }

  addTodo(){

      //redirige tout simplement vers la page de création d'un todo
      //on décide que qd l'id est +, c'est un todo E. qd il est -, c'est un todo a crééer
      this.router.navigate(['todos',-1])

    }

  updateTodo( id : any){

      console.log(`update todo nr : ${id}`);
      this.router.navigate(['todos',id])

    }

  deleteTodo(id: any) {

    console.log(`delete todo nr : ${id}`);
    this.todoService.deleteTodo('Zakaria', id).subscribe(


      response =>  {
        console.log(response) 
        this.message = ' Delete Successfully';
        this.refreshTodos();
      
                }
    )
  }

}
