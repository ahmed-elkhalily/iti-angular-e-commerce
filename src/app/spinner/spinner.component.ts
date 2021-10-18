import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  loadingState: boolean;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.isProductLoading.subscribe(
      (loading) => (this.loadingState = loading)
    );
  }
}
