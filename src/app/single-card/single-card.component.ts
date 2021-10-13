import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cardsList } from '../data';
@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit {
  cardList = cardsList;
  item: any;
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    const cardId = this.activeRouter.params.subscribe((param) => {
      this.item = this.cardList.filter((item) => item.id == param.id)[0];
      console.log(this.item);
    });
  }
}
