import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';

import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
