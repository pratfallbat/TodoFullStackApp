import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private h: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.h.logOut();
    sessionStorage.clear();
  }

}
