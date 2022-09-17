import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../interfaces/Cart';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
