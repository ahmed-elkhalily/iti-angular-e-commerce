import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductsService } from '../services/products.service';
import { AddToWishListAction } from '../store/wishlist/wishlist.action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() productItems: any;
  cartCounter: number;
  products: [];
  cartItem: [];
  wishList: [];
  wishListMap = [];
  constructor(
    private router: Router,
    private productService: ProductsService,
    private store: Store<any>
  ) {}
  goToPage(event: any): void {
    this.router.navigate([`card/${event.id}`]);
  }
  addToCartItem(id: number) {
    this.cartCounter += 1;
    const item = this.products.filter((item) => item['id'] == id);

    this.productService.addItemToCart(this.cartCounter, item);
  }
  ngOnInit(): void {
    this.productService.cartItemsCounter.subscribe(
      (item) => (this.cartCounter = item)
    );
    this.productService.productListItems.subscribe((item: []) => {
      this.products = item;
    });
    this.store.select('wishList').subscribe((items) => {
      this.wishList = items;
    });
    this.productService.wishListMap.subscribe(
      (wishListMap) => (this.wishListMap = wishListMap)
    );
  }

  addToWishList(product: object) {
    let productItem = product;
    if (
      this.wishList.filter((item: object) => item['id'] == productItem['id'])
        .length == 0
    ) {
      this.store.dispatch(
        new AddToWishListAction(JSON.parse(JSON.stringify(product)))
      );

      this.productService.wishListMap.subscribe(
        (wishListMap) => (this.wishListMap = wishListMap)
      );
    }
  }

  checkInWishlist(id: number): boolean {
    if (this.wishListMap.length) {
      return this.wishListMap.find((item) => item == id);
    }
    return false;
  }
}
