import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabInfoComponent } from './tab-info.component';



@NgModule({
  declarations: [
    TabInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TabInfoComponent
  ]
})
export class TabInfoModule { }
