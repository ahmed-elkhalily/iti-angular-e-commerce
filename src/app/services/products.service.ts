import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
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
  totalCashVal = this.TotalCash.asObservable();
  private isLoading = new BehaviorSubject(true);
  isProductLoading = this.isLoading.asObservable();
  private wishList = new BehaviorSubject([]);
  wishListMap = this.wishList.asObservable();

  constructor(private http: HttpClient, private store: Store<any>) {}

  getProductList() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getSingleProduct(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
  fillProductList(products: []) {
    this.store.select('wishList').subscribe((data) => {
      const mappedData = data.map((item: object): [] => item['id']);
      this.wishList.next(mappedData);
    });
    this.productList.next(products);
  }
  updateLoading(state: boolean) {
    this.isLoading.next(state);
  }

  addItemToCart(newCartCounter: number, item: Array<any>) {
    this.cartCounter.next(newCartCounter);
    let obj = {};
    let totalCach: number;
    let itemIndex = item[0].id;
    obj[itemIndex] = item[0];
    obj[itemIndex].quantity++;
    obj[itemIndex].totalPrice = item[0].price * item[0].quantity;
    this.cartItems.next({
      ...this.cartItems.getValue(),
      ...obj,
    });
    if (newCartCounter == 1) {
      console.log(newCartCounter);
      totalCach = obj[itemIndex]['totalPrice'];
      this.TotalCash.next(totalCach);
    } else {
      totalCach = this.TotalCash.getValue();
      totalCach += obj[itemIndex]['totalPrice'];
      this.TotalCash.next(totalCach);
    }
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
