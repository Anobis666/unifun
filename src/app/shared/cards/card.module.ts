import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
exports: [
  CardComponent
]
})
export class CardModule { }
