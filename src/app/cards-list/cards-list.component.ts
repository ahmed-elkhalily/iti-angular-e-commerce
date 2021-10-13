import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  productListItems: [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      (data: []) => {
        this.productService.fillProductList(data);
        this.productService.productListItems.subscribe(
          (data: []) => (this.productListItems = data)
        );
      },
      (error) => {
        console.log('error', error);
      },
      () => {
        console.log('complete', 'you are complete');
      }
    );
  }
}
