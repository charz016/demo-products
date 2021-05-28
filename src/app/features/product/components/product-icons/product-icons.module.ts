import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIconsComponent } from './product-icons.component';



@NgModule({
  declarations: [
    ProductIconsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductIconsComponent
  ]
})
export class ProductIconsModule { }
