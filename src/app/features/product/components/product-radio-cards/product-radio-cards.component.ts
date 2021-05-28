import { Component, Input, OnInit } from '@angular/core';
import { CardProduct } from 'src/app/shared/models/card';

@Component({
  selector: 'product-radio-cards',
  templateUrl: './product-radio-cards.component.html',
  styleUrls: ['./product-radio-cards.component.scss']
})
export class ProductRadioCardsComponent implements OnInit {

  @Input() cards: CardProduct[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cards);
    
  }

}
