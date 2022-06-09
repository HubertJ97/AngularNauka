import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HJOrdersComponent} from "./components/hj-orders/hj-orders.component";
import {HjOrdersDetailsComponent} from "./components/hj-orders-details/hj-orders-details.component";

const routes: Routes = [
  {
    path:'',
    component:HJOrdersComponent
  },
  {
    path: 'api/posts/:id',
    component:HjOrdersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
