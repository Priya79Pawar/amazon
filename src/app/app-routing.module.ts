import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { RegistrationComponent } from './registration/registration.component';
import { FirstProductimgComponent } from './first-productimg/first-productimg.component';
import { SecondProComponent } from './second-pro/second-pro.component';
import { ThirdProComponent } from './third-pro/third-pro.component';
import { HomeComponent } from './home/home.component';
import { CartprodcutComponent } from './buyer/cartprodcut/cartprodcut.component';
import { ReturnOrderComponent } from './return-order/return-order.component';


const routes: Routes = [

  {
      path:"",component:HomeComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"admin", component:AdminComponent
  },
 {
  path:"seller", component:SellerComponent
 },
 {
  path:"buyer", component:BuyerComponent
 },
 {
  path:"registration", component:RegistrationComponent
 }
 
 ,
 {
  path:"firstProduct", component:FirstProductimgComponent
 },
 {
  path:"secondProduct", component:SecondProComponent
 }
 ,
 {
  path:"thirdProduct",component:ThirdProComponent
 },
 {
  path:"cart",component:CartprodcutComponent
 },
 {
  path:"returnOrder", component:ReturnOrderComponent
 }


];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
