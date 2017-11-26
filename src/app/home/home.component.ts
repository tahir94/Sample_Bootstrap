import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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


  constructor(private router: Router) {

    $('body').scrollspy({
      target: '.bs-docs-sidebar',
      offset: 40
    });
  }

  ngOnInit() {
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
  }
  password() {
    this.isPassword = true;

    this.isProfile = false;
    this.isNotifications = false;
    // this.router.navigate(['home/demo'])
    this.isBillingInfo = false;
    this.isGiftCards = false;
    this.isCancelTask = false;
    this.isAccountBalance = false;
    this.isTransactions = false;
    this.isAlexa = false;
    this.isDeactivate = false;
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
  }
  giftCards() {
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

  }
}
