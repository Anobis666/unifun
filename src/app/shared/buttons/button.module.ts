import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsComponent } from './component/buttons.component';




@NgModule({
  declarations: [
    ButtonsComponent
    
  ],
  imports: [
    CommonModule,
  
  ],
  exports:[
    CommonModule,
    
  ]
})

export class ButtonModule { }
