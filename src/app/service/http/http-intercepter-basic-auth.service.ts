import { Injectable } from '@angular/core';

import { HttpInterceptor ,HttpRequest,HttpHandler} from '@angular/common/http';
import { BasicAuthenticationServiceService } from '../auth/basic-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private bu:BasicAuthenticationServiceService) { }
  intercept(request : HttpRequest<any>, next: HttpHandler){
    //  let username='user';
    // let password='user';
    // let basicAuthHeader ='Basic '+window.btoa(username+':'+password);
    let basicAuthHeader=this.bu.getAuthToken();
    let username=this.bu.getAuthUser();
    
    if(basicAuthHeader&&username){
      
    request = request.clone({
      setHeaders:     { Authorization: basicAuthHeader}
                });
    }


          return next.handle(request);
  }
}
