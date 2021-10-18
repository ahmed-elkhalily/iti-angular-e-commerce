import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartItemCounter: number;
  wishListCounter: number;
  constructor(
    private productService: ProductsService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.productService.cartItemsCounter.subscribe(
      (item) => (this.cartItemCounter = item)
    );
    this.store
      .select('wishList')
      .subscribe((items) => (this.wishListCounter = items.length));
  }
}
