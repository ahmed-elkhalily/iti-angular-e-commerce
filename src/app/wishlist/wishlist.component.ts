import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveFromWishListAction } from '../store/wishlist/wishlist.action';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishList: Array<any>;
  wishListQuant: number;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select('wishList').subscribe((data) => {
      this.wishList = data;
      this.wishListQuant = data.length;
    });
  }
  removeFromWishItems(id: number) {
    this.store.dispatch(new RemoveFromWishListAction(id));
  }
}
