import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeService } from 'src/app/service/data/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name;
r;
px='';
  constructor(private route:ActivatedRoute  ,r:Router ,private w:WelcomeService) {
    this.route=route;

console.log(this.route.snapshot.params['name'])  
      this.name=this.route.snapshot.params['name'];
  this.r=r;  
  }

  ngOnInit() {
  }
  clickme(){
    this.r.navigate(['todos']);
  }
  getWelcomeMessaage(){
    // this.w.executeHelloWorldeanService().subscribe(res=>{
    //   console.log(res.message);
    //   this.px=res.message;
    // },error=>{
    //   this.px=error.error.message;
    //   console.log(error.error.message);
    // });
        
    // 
  
    this.w.executeHelloWorldeanServiceWithParam(this.name).subscribe(res=>{
      console.log(res.message);
      this.px=res.message;
    },error=>{
      this.px=error.error.message;
      console.log(error.error.message);
    });
        
     
  
  }


}
