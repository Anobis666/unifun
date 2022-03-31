import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './component/books.component';
import { LayoutModule } from 'src/app/layout/layout.module';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksRoutingModule } from './books-routing.module';
import {DialogModule} from 'primeng/dialog';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { ModalManagmentBooksModule } from 'src/app/shared/modals/modal-books/modal-managment-books/modal-managment-books.module';




@NgModule({
  declarations: [
    BooksComponent,

  ],
  imports: [
    CommonModule,
    LayoutModule,
    BooksRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    DynamicDialogModule,
    ModalManagmentBooksModule,
  ],
  providers: [DialogService]
})
export class BooksModule { }
