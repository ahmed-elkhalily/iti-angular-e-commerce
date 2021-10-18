import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { ProductsService } from './products.service';
@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private productsService: ProductsService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(finalize(() => this.productsService.updateLoading(false)));
  }
}
