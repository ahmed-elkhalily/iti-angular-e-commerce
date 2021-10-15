import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cards';
  // constructor(private store: Store<any>) {}
  // ngOnInit(): void {
  //   this.store.select('wishList').subscribe((data) => console.log(data));
  // }
}
