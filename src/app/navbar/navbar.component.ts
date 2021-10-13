import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartItemCounter;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.cartItemsCounter.subscribe(
      (item) => (this.cartItemCounter = item)
    );
  }
}
