import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username,password){
console.log('before',this.isUserLoggedIn());

    if(username=='root' && password=='root'){
      console.log(username,password)
    // this.invalid=false;
    // this.r.navigate(['welcome',this.usr]);
console.log('hurray')
sessionStorage.setItem('authenticaterUser',username);    
console.log('after',this.isUserLoggedIn());
return true;

}
    else{
      return false;
      // console.log(this.usr)
      // this.invalid=true;
    }

  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser');
    return !(user===null);

  }
  logOut(){
  //  this.router.navigate(['login']);
    sessionStorage.clear();
  }
}
