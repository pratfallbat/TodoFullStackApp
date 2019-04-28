import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/Todo';
import { TodoDataServiceService } from 'src/app/service/todo-data-service.service';
import { Router} from '@angular/router';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

// todos =[  

// new Todo(1,'mediatte',true,new Date()),
// new Todo(2,'Play',true,new Date()),

// new Todo(3,'go to gym',true,new Date())

// ];
todos;

  constructor(private todoser: TodoDataServiceService,private router:Router) { }

  ngOnInit() {

    this.todoser.executeHelloWorldeanServiceWithParam('pratyush').subscribe(
    res=>{    
    this.todos=res;
    },
    err=>console.log(err));
  }

  updateTodo(id){
   // alert(id)
    this.router.navigate(['todos',id]);
  }


}
