import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.cartItemsList.subscribe((items: []) => {
      this.cartItems = items;
    });
  }
}
