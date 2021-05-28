import { Component, OnInit } from '@angular/core';
import { CARD_MOCK,CARD_MOCK2,CARD_MOCK3 } from 'src/app/shared/mocks/cards';
import { CardProduct } from 'src/app/shared/models/card';

@Component({
  selector: 'detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  constructor() { }

  cards: CardProduct[] = CARD_MOCK;
  cards2: CardProduct[] = CARD_MOCK2;
  cards3: CardProduct[] = CARD_MOCK3;
  responsiveRow:boolean=true;



  ngOnInit(): void {
  }

}
