import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CardProduct } from 'src/app/shared/models/card';

@Component({
  selector: 'product-radio-cards',
  templateUrl: './product-radio-cards.component.html',
  styleUrls: ['./product-radio-cards.component.scss']
})
export class ProductRadioCardsComponent implements OnInit {

  @Input() cards: CardProduct[] = [];
  @Input() rowCard: boolean = false;

  @Output() price = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
    
  }

  handleChange(event:any,price:number){
    this.price.emit(price)

  }

}
