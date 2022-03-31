import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalManagementMusicComponent } from './modal-management-music.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalManagementMusicComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ModalManagementMusicComponent
  ]
})
export class ModalManagementMusicModule { }
