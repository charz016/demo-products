import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product.component';
import { CarrouselProductModule } from '../../components/carrousel-product/carrousel-product.module';
import { ProductInfoModule } from '../../components/product-info/product-info.module';
import { ProductSpecificationsModule } from '../../components/product-specifications/product-specifications.module';



@NgModule({
  declarations: [
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    CarrouselProductModule,
    ProductInfoModule,
    ProductSpecificationsModule,
  ],
  exports:[
    DetailProductComponent
  ]
})
export class DetailProductModule { }
