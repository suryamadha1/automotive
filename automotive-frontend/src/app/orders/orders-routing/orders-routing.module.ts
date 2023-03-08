import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'all', pathMatch:'full'
  },
  { 
    path: 'all', component: ViewOrdersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
