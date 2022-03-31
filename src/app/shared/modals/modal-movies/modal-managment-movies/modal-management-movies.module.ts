import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { ModalManagementMoviesComponent } from './modal-management-movies.component';




@NgModule({
  declarations: [
    ModalManagementMoviesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ModalManagementMoviesComponent
  ]
})
export class ModalManagmentMoviesModule { }
