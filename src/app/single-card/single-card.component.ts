import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cardsList } from '../data';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit {
  // TODO fixing singlecard.template.html -> length in the first line
  item: any;
  cartItemCounter: number;
  constructor(
    private activeRouter: ActivatedRoute,
    private productService: ProductsService
  ) {}
  addToCart(item) {
    this.cartItemCounter++;
    this.productService.addItemToCart(this.cartItemCounter, item);
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(
      (param) => {
        this.productService.getSingleProduct(param.id).subscribe((data) => {
          this.item = data;
        });
      },
      (error) => {
        // console.error(error);
      },
      () => {
        // console.warn('complete', 'you are complete');
      }
    );
    this.productService.cartItemsCounter.subscribe(
      (item) => (this.cartItemCounter = item)
    );
  }
}
