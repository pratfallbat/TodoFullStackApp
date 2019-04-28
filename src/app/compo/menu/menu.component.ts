import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
isloggedIn;
private h;
  constructor( h:HardcodedAuthenticationService) { 
this.h=h;
    //   this.isloggedIn=h  .isUserLoggedIn();
  
  }

  ngOnInit() {

  
  }

}
