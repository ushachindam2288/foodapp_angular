import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MenupageComponent } from './menupage/menupage.component';
import { MycartComponent } from './mycart/mycart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderconfirmedComponent } from './orderconfirmed/orderconfirmed.component';

const routes: Routes = [
  {path:'welcomepage',component:WelcomepageComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'menupage',component:MenupageComponent},
  {path:'mycart',component:MycartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'orderconfirmed',component:OrderconfirmedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
