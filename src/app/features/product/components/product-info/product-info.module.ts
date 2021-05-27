import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './product-info.component';
import { TabInfoModule } from '../tab-info/tab-info.module';



@NgModule({
  declarations: [
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    TabInfoModule,
  ],
  exports:[
    ProductInfoComponent
  ]
})
export class ProductInfoModule { }
