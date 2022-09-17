import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productsOnCart: Product[] = [];

  constructor(private cartService: CartService) {
    this.getProductsOnCart();
  }

  ngOnInit(): void {}

  getProductsOnCart(): void {
    this.cartService.getAll().subscribe((products) => {
      this.productsOnCart = products;
    });
  }

  removeProduct(id: number): void {
    this.cartService.remove(id).subscribe();
    this.productsOnCart = this.productsOnCart.filter(
      (product) => product.id !== id
    );
  }

  buy(): void {
    alert('Você comprou os produtos do carrinho!');
  }
}
