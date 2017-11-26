import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alexa-edit',
  templateUrl: './alexa-edit.component.html',
  styleUrls: ['./alexa-edit.component.css']
})
export class AlexaEditComponent implements OnInit {
  isAlexaEdit : Boolean = true;
  isAlexa : Boolean = false;
  constructor() { }

  ngOnInit() {
  }
 
  cancel(){
    this.isAlexaEdit = false;
    this.isAlexa = true;
  }
}
