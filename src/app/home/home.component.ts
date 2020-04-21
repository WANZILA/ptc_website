import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import{ SharedModule } from '../shared/shared.module';

@Component({
 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    // private route: Router
    ) { }

  ngOnInit() {

  } 

  // pro():void{
  //   this.route.navigate(['/programme']);
  // }
  

}
