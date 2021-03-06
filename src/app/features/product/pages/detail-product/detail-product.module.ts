import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product.component';
import { CarrouselProductModule } from '../../components/carrousel-product/carrousel-product.module';
import { ProductInfoModule } from '../../components/product-info/product-info.module';
import { ProductSpecificationsModule } from '../../components/product-specifications/product-specifications.module';
import { ProductRadioCardsModule } from '../../components/product-radio-cards/product-radio-cards.module';
import { ProductFooterModule } from '../../components/product-footer/product-footer.module';
import { ProductIconsModule } from '../../components/product-icons/product-icons.module';



@NgModule({
  declarations: [
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    CarrouselProductModule,
    ProductInfoModule,
    ProductSpecificationsModule,
    ProductRadioCardsModule,
    ProductFooterModule,
    ProductIconsModule
  ],
  exports:[
    DetailProductComponent
  ]
})
export class DetailProductModule { }
