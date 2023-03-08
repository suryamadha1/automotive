import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { OrdersRoutingModule } from './orders-routing/orders-routing.module';



@NgModule({
  declarations: [
    ViewOrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  exports: [ViewOrdersComponent]
})
export class OrdersModule { }
