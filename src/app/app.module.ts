import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HJOrdersComponent } from './components/hj-orders/hj-orders.component';
import { HjOrdersItemComponent } from './components/hj-orders-item/hj-orders-item.component';
import { HjOrdersDetailsComponent } from './components/hj-orders-details/hj-orders-details.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HJOrdersComponent,
    HjOrdersItemComponent,
    HjOrdersDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
