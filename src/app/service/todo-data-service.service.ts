import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Todo } from '../classes/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataServiceService {

  constructor(private http:HttpClient) { }
headerx;
  executeHelloWorldeanServiceWithParam(name){

//     let basicAuthHeader=this.createBasicAuth();
//     this.headerx=new HttpHeaders({
// Authorization: basicAuthHeader
//     });
    return this.http.get<Todo[]>(
      'http://localhost:8080/user/'+name+'/todos')   ;
  }

  createBasicAuth(){
    let username='user';
    let password='user';
    let basicAuthHeader ='Basic '+window.btoa(username+':'+password);
  console.log(basicAuthHeader)
  return basicAuthHeader;
}
}
