import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private cartCounter = new BehaviorSubject(0);
  cartItemsCounter = this.cartCounter.asObservable();
  private productList = new BehaviorSubject([]);
  productListItems = this.productList.asObservable();
  private cartItems = new BehaviorSubject([]);
  cartItemsList = this.cartItems.asObservable();

  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  fillProductList(products: []) {
    this.productList.next(products);
  }
  addItemToCart(newCartCounter: number, item) {
    this.cartCounter.next(newCartCounter);
    item[0].quantity = 1;
    this.cartItems.next(this.cartItems.getValue().concat(...item));
  }
}
