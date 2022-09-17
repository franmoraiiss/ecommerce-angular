import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}
