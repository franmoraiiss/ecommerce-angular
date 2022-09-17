import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Output() showModal = false;
  products: Product[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts(): void {
    this.productService
      .getAll()
      .subscribe((products) => (this.products = products));
  }

  addOnCart(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        if (product.in_stock) {
          this.cartService.addProduct(product).subscribe();
          alert('Produto adicionado ao carrinho.');
        } else {
          this.showModal = !this.showModal;
        }
      },
    });
  }
}
