import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { BasicAuthenticationServiceService } from 'src/app/service/auth/basic-authentication-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
invalid=false;
errormsg='"InvalidCredential entered"'
  usr:string = '';
  pwd:string  = '';
r:Router;
h;
  constructor(r:Router,h:HardcodedAuthenticationService,private basicAuthService: BasicAuthenticationServiceService) { 
    this.r=r;this.h=h;}

handleLogin(){
if(this.h.authenticate(this.usr,this.pwd)){
  console.log(this.usr)
this.invalid=false;
this.r.navigate(['welcome',this.usr]);
}
else{
  console.log(this.usr)
  this.invalid=true;
}
}

handleLoginBasicAuthLogin(){
  this.basicAuthService.executeBasicAUthentication(this.usr,this.pwd)
  .subscribe(res=>{
    console.log('here '+res)
    this.invalid=false;
    this.r.navigate(['welcome',this.usr]);
  },err=>{
console.log(err)
    this.invalid=true;

    console.log(err)
  });

  }

  ngOnInit() {
  }

}
