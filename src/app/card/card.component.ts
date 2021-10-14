import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() productItems: any;
  cartCounter: number;
  products: [];
  cartItem: [] = [];
  constructor(
    private router: Router,
    private productService: ProductsService
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
  }
}
