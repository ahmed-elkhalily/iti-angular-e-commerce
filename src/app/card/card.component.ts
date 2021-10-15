import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductsService } from '../products.service';
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
    this.productService.addItemToCart(
      this.cartCounter,
      this.products.filter((item) => item['id'] == id)
    );
  }
  ngOnInit(): void {
    this.productService.cartItemsCounter.subscribe(
      (item) => (this.cartCounter = item)
    );
    this.productService.productListItems.subscribe(
      (item: []) => (this.products = item)
    );
    this.store.select('wishList').subscribe((items) => (this.wishList = items));
  }
  addToWishList(product: object) {
    if (
      this.wishList.filter((item) => item['id'] == product['id']).length == 0
    ) {
      this.store.dispatch(new AddToWishListAction(product));
    }
  }
}
