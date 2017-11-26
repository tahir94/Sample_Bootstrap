import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from "./routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from "./notifications/notifications.component";
import { ProfileComponent } from "./profile/profile.component";
import { GiftCardsComponent } from "./gift-cards/gift-cards.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { BillingInfoComponent } from "./billing-info/billing-info.component";
import { CancelTaskComponent } from "./cancel-task/cancel-task.component";
import { PasswordComponent } from "./password/password.component";
import { DeactiveComponent } from "./deactive/deactive.component";
import { AlexaComponent } from "./alexa/alexa.component";
import { AlexaEditComponent } from "./alexa-edit/alexa-edit.component";
import { AccountBalanceComponent } from "./account-balance/account-balance.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotificationsComponent,
    ProfileComponent,
    GiftCardsComponent,
    TransactionsComponent,
    BillingInfoComponent,
    CancelTaskComponent,
    PasswordComponent,
    DeactiveComponent,
    AlexaComponent,
    AlexaEditComponent,
    AccountBalanceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutes,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
