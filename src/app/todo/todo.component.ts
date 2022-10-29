import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  id:number | any
  todo: Todo | any


  constructor(

      private todoService: TodoDataService,
      private route:ActivatedRoute,
      private router:Router,
     

  ) { }


  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'To Do ',false, new Date());

      //j'appele le retrieveTodo seulement si ce n'est pas égal a -1
      //Donc, seulement lorsque ce n'est pas un new Todo
    if(this.id > 0) {

      this.todoService.retrieveTodo('Zakaria', this.id)
      .subscribe(
        data => this.todo = data
      )
    }
    
  }

  saveTodo() {


    this.id = this.route.snapshot.params['id'];
      //si l'id vaut -1, on créé un nouveau todo
   if(this.id === -1) {

        //Create Todo
       this.todoService.createTodo('Zakaria',this.todo).subscribe(
         data => { 
                 console.log(data),
                  this.router.navigate(['todos'])}
          
               ) 

        //si l'id est différent de -1, alors on l'update
 } else {

      this.todoService.updateTodo('Zakaria', this.id,this.todo).subscribe(
        data => { 
                console.log(data)
                this.router.navigate(['todos'])
              }
          ) 

    }

    
              
      //permet de rediriger vers la page todos après avoir sauver         
    
              }
    



    
  

 

            }
