import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeService {

  constructor(private http:HttpClient) {

    
   }
  executeHelloWorldeanService(){

    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  headerx;
  executeHelloWorldeanServiceWithParam(name){
    let username='user';
    let password='user';
    let basicAuthHeader ='Basic '+window.btoa(username + ':' + password);
  
    this.headerx=new HttpHeaders({
Authorization: basicAuthHeader
    });
    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean/path-variable/'+name,{headers: this.headerx }
      )   ;
  }
}
