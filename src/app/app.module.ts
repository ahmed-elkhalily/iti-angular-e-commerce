import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { InterceptorService } from './services/interceptor.service';
// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { CartComponent } from './cart/cart.component';
import { AppReducer } from './store/store.reducer';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AuthonticationModule } from './authontication/authontication.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { SliceStringPipe } from './pipes/slice-string.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
//services
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CardsListComponent,
    SingleCardComponent,
    CartComponent,
    WishlistComponent,
    SpinnerComponent,
    SliceStringPipe,
    CurrencyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(AppReducer),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
