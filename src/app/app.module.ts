import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './seller/product/product.component';
import { FindproductComponent } from './buyer/findproduct/findproduct.component';
import { CartprodcutComponent } from './buyer/cartprodcut/cartprodcut.component';
import { HistoryComponent } from './buyer/history/history.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstProductimgComponent } from './first-productimg/first-productimg.component';
import { SecondProComponent } from './second-pro/second-pro.component';
import { ThirdProComponent } from './third-pro/third-pro.component';
import { ReturnOrderComponent } from './return-order/return-order.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SellerComponent,
    BuyerComponent,
    AdminComponent,
    CategoryComponent,
    ProductComponent,
    FindproductComponent,
    CartprodcutComponent,
    HistoryComponent,
    RegistrationComponent,
    HomeComponent,
    FirstProductimgComponent,
    SecondProComponent,
    ThirdProComponent,
    ReturnOrderComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
