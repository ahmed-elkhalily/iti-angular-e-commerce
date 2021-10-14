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
  private cartItems = new BehaviorSubject({});
  cartItemsList = this.cartItems.asObservable();
  TotalCash = new BehaviorSubject(0);
  private totalCashObserval = this.TotalCash.asObservable();

  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getSingleProduct(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
  fillProductList(products: []) {
    this.productList.next(products);
  }

  addItemToCart(newCartCounter: number, item) {
    this.cartCounter.next(newCartCounter);
    let obj = {};
    let itemIndex = item[0].id;
    let totalCach = this.TotalCash.getValue();

    if (itemIndex in this.cartItems.getValue()) {
      obj = this.cartItems.getValue();
      obj[itemIndex].quantity++;
      obj[itemIndex].totalPrice =
        obj[itemIndex].price * obj[itemIndex].quantity;
    } else {
      item[0].quantity = 1;
      item[0].totalPrice = item[0].price;
      obj[itemIndex] = item[0];
    }
    this.cartItems.next({ ...this.cartItems.getValue(), ...obj });
    totalCach += obj[itemIndex].price;
    this.TotalCash.next(totalCach);
  }

  innerTotalPriceAndQuantity(id: number, inc: boolean = true) {
    let obj = {};
    let cartCounter = this.cartCounter.getValue();
    obj = this.cartItems.getValue();
    if (inc) {
      obj[id].quantity++;
      cartCounter++;
      this.cartCounter.next(cartCounter);
      this.TotalCash.next(this.TotalCash.getValue() + obj[id].price);
    } else if (obj[id].quantity == 1) {
      this.TotalCash.next(this.TotalCash.getValue() - obj[id].totalPrice);
      delete obj[id];
      cartCounter--;
      this.cartCounter.next(cartCounter);
    } else {
      cartCounter--;
      this.cartCounter.next(cartCounter);
      obj[id].quantity--;
      this.TotalCash.next(this.TotalCash.getValue() - obj[id].price);
    }

    obj[id].totalPrice = obj[id].price * obj[id].quantity;
    this.cartItems.next(obj);
  }
  quantityInc(id: number) {
    this.innerTotalPriceAndQuantity(id);
  }
  quantityDec(id: number) {
    this.innerTotalPriceAndQuantity(id, false);
  }
  removeFromCart(id: number) {
    let obj = {};
    obj = this.cartItems.getValue();
    this.cartCounter.next(this.cartCounter.getValue() - obj[id]['quantity']);
    this.TotalCash.next(this.TotalCash.getValue() - obj[id].totalPrice);
    delete obj[id];
  }
}
