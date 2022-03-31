import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './component/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from 'primeng/api';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MoviesRoutingModule } from './movies-routing.module';
import {DialogModule} from 'primeng/dialog';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { ModalManagmentMoviesModule } from 'src/app/shared/modals/modal-movies/modal-managment-movies/modal-management-movies.module';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MoviesRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    DynamicDialogModule,
    ModalManagmentMoviesModule
  ],
  providers: [DialogService]
})
export class MoviesModule { }
