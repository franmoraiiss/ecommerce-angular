import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductsListComponent, CartComponent, AlertComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
