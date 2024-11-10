import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { SellerComponent } from '../seller/seller.component';
import { BuyerComponent } from '../buyer/buyer.component';

const routes: Routes = [
  {
    path:"admin", component:AdminComponent},
  {
    path:"seller", component:SellerComponent
  },
  {
    path:"buyer", component:BuyerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
