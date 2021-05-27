import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product.component';
import { CarrouselProductModule } from '../../components/carrousel-product/carrousel-product.module';



@NgModule({
  declarations: [
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    CarrouselProductModule
  ]
})
export class DetailProductModule { }
