import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	isPassword : Boolean = false;
	isProfile : Boolean = true;
  constructor(private router : Router) { 

  }

  ngOnInit() {
  }
  selectOption(){
	  console.log('select');
	  
  }

nav(){
	console.warn('OKUJLKAJDSLKJASLKDJALSJDLK')
	this.router.navigate(['home/password'])
}

  navigateTo(event){
	console.log(event);
	switch(event){
		case 'password':
		console.log('asdasdsa');
		console.log(this.router.url);
		this.router.navigate(['home/password'])
		// this.isPassword = true;
		// this.isProfile = false;

		default:
		return null;	
	}
  }
}
