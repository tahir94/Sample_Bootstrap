import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	isProfile: Boolean = true;
  isPassword: Boolean = false;
  isNotifications: Boolean = false;
  isBillingInfo: Boolean = false;
  isGiftCards: Boolean = false;
  isCancelTask: Boolean = false;
  isAccountBalance: Boolean = false;
  isTransactions: Boolean = false;
  isAlexa: Boolean = false;
	isDeactivate: Boolean = false;
	
  constructor(private router : Router) { 

  }

  ngOnInit() {
  }




  navigateTo(event){
	console.log(event);
	switch(event){

		case 'profile':
		this.router.navigate(['home/app-profile']);
		
			  this.isProfile = true;
			  
			this.isPassword = false;	  
			this.isNotifications = false;
			this.isBillingInfo = false;
			this.isGiftCards = false;
			this.isCancelTask = false;
			this.isAccountBalance = false;
			this.isTransactions = false;
			this.isAlexa = false;
			this.isDeactivate = false;
		
			break;

		case 'password':
		this.router.navigate(['home/password']);

		this.isPassword = true;

		this.isProfile = false;
		this.isNotifications = false;
		this.isBillingInfo = false;
		this.isGiftCards = false;
		this.isCancelTask = false;
		this.isAccountBalance = false;
		this.isTransactions = false;
		this.isAlexa = false;
		this.isDeactivate = false;


		case 'notification':
		this.router.navigate(['home/app-notifications']);
		
				this.isNotifications = true;

				this.isPassword = false;		
				this.isProfile = false;
				this.isBillingInfo = false;
				this.isGiftCards = false;
				this.isCancelTask = false;
				this.isAccountBalance = false;
				this.isTransactions = false;
				this.isAlexa = false;
				this.isDeactivate = false;

		case 'billingInfo':
		this.router.navigate(['home/app-billing-info']);
		
				this.isBillingInfo = true;

				this.isPassword = false;		
				this.isProfile = false;
				this.isNotifications = false;
				this.isGiftCards = false;
				this.isCancelTask = false;
				this.isAccountBalance = false;
				this.isTransactions = false;
				this.isAlexa = false;
				this.isDeactivate = false;

		case 'giftCards':
		this.router.navigate(['home/app-gift-cards']);
		
				this.isGiftCards = true;

				this.isPassword = false;	
				this.isProfile = false;
				this.isNotifications = false;
				this.isBillingInfo = false;
				this.isCancelTask = false;
				this.isAccountBalance = false;
				this.isTransactions = false;
				this.isAlexa = false;
				this.isDeactivate = false;
				break;

		case 'cancelTask':
		this.router.navigate(['home/app-cancel-task']);
		
				this.isCancelTask = true;

				this.isPassword = false;	
				this.isProfile = false;
				this.isNotifications = false;
				this.isBillingInfo = false;
				this.isGiftCards = false;
				this.isAccountBalance = false;
				this.isTransactions = false;
				this.isAlexa = false;
				this.isDeactivate = false;
				break;
		case 'accountBalaance':
		this.router.navigate(['home/app-account-balance']);
		
				this.isAccountBalance = true;

				this.isPassword = false;	
				this.isProfile = false;
				this.isNotifications = false;
				this.isBillingInfo = false;
				this.isGiftCards = false;
				this.isCancelTask = false;
				this.isTransactions = false;
				this.isAlexa = false;
				this.isDeactivate = false;
				break;
		case 'transactions':
		this.router.navigate(['home/app-transactions']);
		
				this.isTransactions = true;

				this.isPassword = false;
				this.isProfile = false;
				this.isNotifications = false;
				this.isBillingInfo = false;
				this.isGiftCards = false;
				this.isCancelTask = false;
				this.isAccountBalance = false;
				this.isAlexa = false;
				this.isDeactivate = false;
				break;
		case 'alexa':
		this.router.navigate(['home/app-alexa']);
		
				this.isAlexa = true;

				this.isPassword = false;	
				this.isProfile = false;
				this.isNotifications = false;
				this.isBillingInfo = false;
				this.isGiftCards = false;
				this.isCancelTask = false;
				this.isAccountBalance = false;
				this.isTransactions = false;
				this.isDeactivate = false;
				break;
		case 'deactivate':
		this.router.navigate(['home/app-deactive']);
		
		this.isDeactivate = true;
			 
		this.isPassword = false;
      	this.isProfile = false;
				this.isNotifications = false;
				this.isBillingInfo = false;
				this.isGiftCards = false;
				this.isCancelTask = false;
				this.isAccountBalance = false;
				this.isTransactions = false;
				this.isAlexa = false;
				break;
		default:
		return null;	
	}
  }
}
