import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MenupageComponent } from './menupage/menupage.component';
import { MycartComponent } from './mycart/mycart.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderconfirmedComponent } from './orderconfirmed/orderconfirmed.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    LoginpageComponent,
    MenupageComponent,
    MycartComponent,
    CheckoutComponent,
    OrderconfirmedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
