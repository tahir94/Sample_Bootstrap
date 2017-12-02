import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from "@angular/router";
declare var jquery: any;
declare var $: any;
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title: any;
	prevTitle: any;

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

	isClicked: Boolean = false;


	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
	this.checkRoutes()
		
		$('body').scrollspy({
			target: '.bs-docs-sidebar',
			offset: 40
		});

		
	}

	ngOnInit() {
	}
	checkRoutes(){
		
		switch(this.router.url){

			case '/home/password':			
			this.password();
			break;

			case '/home/app-notifications':
			this.notifications();
			break;
			
			case '/home/app-billing-info':
			this.billingInfo();
			break;

			case '/home/app-gift-cards':
			this.giftCards();			
			break;
			
			case '/home/app-cancel-task':
			this.cancelTask();						
			break;

			case '/home/app-account-balance':
			this.accountBalance();			
			break;

			case '/home/app-transactions':
			this.transactions();			
			break;

			case '/home/app-alexa':
			this.alexa();			
			break;
			
			case '/home/app-deactive':
			this.deactive();			
			break;

			case '/home/app-profile':
			this.profile();			
			break;
			
		
			default:
			return null;
		}
	}
	profile() {
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

		this.isClicked = false;
	}


	password() {
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

		this.isClicked = false;
	}
	notifications() {
		this.isNotifications = true;

		this.isProfile = false;
		this.isPassword = false;
		this.isBillingInfo = false;
		this.isGiftCards = false;
		this.isCancelTask = false;
		this.isAccountBalance = false;
		this.isTransactions = false;
		this.isAlexa = false;
		this.isDeactivate = false;

		this.isClicked = false;
	}

	billingInfo() {
		this.isBillingInfo = true

		this.isProfile = false;
		this.isPassword = false;
		this.isNotifications = false;
		this.isGiftCards = false;
		this.isCancelTask = false;
		this.isAccountBalance = false;
		this.isTransactions = false;
		this.isAlexa = false;
		this.isDeactivate = false;

		this.isClicked = false;
	}

	giftCards() {


		this.isClicked = true;
		this.isGiftCards = true

		this.isProfile = false;
		this.isPassword = false;
		this.isNotifications = false;
		this.isBillingInfo = false;
		this.isCancelTask = false;
		this.isAccountBalance = false;
		this.isTransactions = false;
		this.isAlexa = false;
		this.isDeactivate = false;
	}
	cancelTask() {
		this.isCancelTask = true

		this.isProfile = false;
		this.isPassword = false;
		this.isNotifications = false;
		this.isBillingInfo = false;
		this.isGiftCards = false;
		this.isAccountBalance = false;
		this.isTransactions = false;
		this.isAlexa = false;
		this.isDeactivate = false;

		this.isClicked = false;

	}
	accountBalance() {
		this.isAccountBalance = true;

		this.isProfile = false;
		this.isPassword = false;
		this.isNotifications = false;
		this.isBillingInfo = false;
		this.isGiftCards = false;
		this.isCancelTask = false;
		this.isTransactions = false;
		this.isAlexa = false;
		this.isDeactivate = false;

		this.isClicked = false;
	}
	transactions() {
		this.isTransactions = true;

		this.isProfile = false;
		this.isPassword = false;
		this.isNotifications = false;
		this.isBillingInfo = false;
		this.isGiftCards = false;
		this.isCancelTask = false;
		this.isAccountBalance = false;
		this.isAlexa = false;
		this.isDeactivate = false;

		this.isClicked = false;
	}
	alexa() {
		this.isAlexa = true;

		this.isProfile = false;
		this.isPassword = false;
		this.isNotifications = false;
		this.isBillingInfo = false;
		this.isGiftCards = false;
		this.isCancelTask = false;
		this.isAccountBalance = false;
		this.isTransactions = false;
		this.isDeactivate = false;

		this.isClicked = false;
	}
	deactive() {
		this.isDeactivate = true;

		this.isProfile = false;
		this.isPassword = false;
		this.isNotifications = false;
		this.isBillingInfo = false;
		this.isGiftCards = false;
		this.isCancelTask = false;
		this.isAccountBalance = false;
		this.isTransactions = false;
		this.isAlexa = false;

		this.isClicked = false;

	}
}
