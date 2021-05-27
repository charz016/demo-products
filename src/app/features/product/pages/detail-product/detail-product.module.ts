import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product.component';
import { CarrouselProductModule } from '../../components/carrousel-product/carrousel-product.module';
import { ProductInfoModule } from '../../components/product-info/product-info.module';



@NgModule({
  declarations: [
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    CarrouselProductModule,
    ProductInfoModule,
  ],
  exports:[
    DetailProductComponent
  ]
})
export class DetailProductModule { }