import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-footer',
  templateUrl: './product-footer.component.html',
  styleUrls: ['./product-footer.component.scss']
})
export class ProductFooterComponent implements OnInit {

  @Input() productPrice:number=0;
  @Input() coverage:number=0;

  productTotal:number=0;

  constructor() { }

  ngOnInit(): void {
    this.productTotal = this.productPrice + this.coverage;
  }

}
