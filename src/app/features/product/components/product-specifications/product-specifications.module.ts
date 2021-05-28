import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSpecificationsComponent } from './product-specifications.component';



@NgModule({
  declarations: [
    ProductSpecificationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductSpecificationsComponent
  ]
})
export class ProductSpecificationsModule { }
