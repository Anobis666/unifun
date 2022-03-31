import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalManagementTvSeriesComponent } from './modal-management-tv-series.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalManagementTvSeriesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    ModalManagementTvSeriesComponent
  ]
})
export class ModalManagementTvSeriesModule { }
