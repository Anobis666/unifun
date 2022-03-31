import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalManagmentBooksComponent } from './modal-managment-books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';




@NgModule({
  declarations: [
    ModalManagmentBooksComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ModalManagmentBooksComponent
  ]
})
export class ModalManagmentBooksModule { }
