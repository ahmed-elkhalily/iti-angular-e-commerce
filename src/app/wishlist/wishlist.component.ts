import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveFromWishListAction } from '../store/wishlist/wishlist.action';
import { wishListReducer } from '../store/wishlist/wishlist.reducer';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishList: Array<any>;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select('wishList').subscribe((data) => (this.wishList = data));
  }
  removeFromWishItems(id: number) {
    this.store.dispatch(new RemoveFromWishListAction(id));
  }
}
