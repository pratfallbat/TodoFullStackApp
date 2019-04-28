import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationServiceService {

  constructor(private  http:HttpClient) { }


  headerx;
  executeBasicAUthentication(username:string,password:string){
  //  let username='user';
//    let password='user';

console.log(username+':'+password)
    let basicAuthHeader = 'Basic '+ window.btoa(username+':'+password);

    // this.headerx= new HttpHeaders({
    // Authorization : basicAuthHeader
    // });
    return this.http.get<AuthenticationBean>(
      'http://localhost:8080/basicauth',{  headers: new HttpHeaders({
        Authorization : basicAuthHeader
        }) }
      )//if this thing is successfully responding then do this  
      .pipe(
         map(
          data=>{
           sessionStorage.setItem('authenticaterUser',username);
           sessionStorage.setItem('token',basicAuthHeader);

           return data;
          }
    )

      )
      ;
   
    }

    getAuthUser(){
      
      return sessionStorage.getItem('authenticaterUser');
  
    }
    getAuthToken(){
      if(this.getAuthUser())
      return sessionStorage.getItem('token');
  
    }
 
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser');
    return !(user===null);

  }
  logOut(){
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('token');
  }

}


export class AuthenticationBean{
  constructor(public message:string){

  }
}