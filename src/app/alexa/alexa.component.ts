import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-alexa',
  templateUrl: './alexa.component.html',
  styleUrls: ['./alexa.component.css']
})
export class AlexaComponent implements OnInit {
  isBillingInfo : Boolean = false;
  isAlexa : Boolean = true;
  isAlexaEdit : Boolean = false;

  constructor(private router : Router) { }

  ngOnInit() {
  }
  AddCredit(){
    // this.router.navigate(['home/app-billing-info'])
    this.isBillingInfo = true;
    this.isAlexa = false;
  }
  homeLocation(){
    this.isAlexa = false;
    this.isAlexaEdit = true;
}
}
