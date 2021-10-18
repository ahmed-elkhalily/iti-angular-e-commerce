import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: [];
  totalCash: number;
  constructor(private productService: ProductsService) {}
  quantityInc(id: number) {
    this.productService.quantityInc(id);
  }
  quantityDec(id: number) {
    this.productService.quantityDec(id);
  }
  cartItemDel(id: number) {
    this.productService.removeFromCart(id);
  }
  ngOnInit(): void {
    this.productService.cartItemsList.subscribe((items: []) => {
      this.cartItems = items;
    });
    this.productService.TotalCash.subscribe((item) => (this.totalCash = item));
  }
}
