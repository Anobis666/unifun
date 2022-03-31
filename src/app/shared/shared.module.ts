import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ButtonModule } from './buttons/button.module';
import { AudioPlayerModule } from './audio-player/audio-player.module';
import { CardModule } from './cards/card.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { AudioPlayerComponent } from './audio-player/component/audio-player.component';
import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { ModalManagementMoviesComponent } from './modals/modal-movies/modal-managment-movies/modal-management-movies.component';
//import { MoviePlayerComponent } from './movie-player/component/movie-player.component';






export const sharedComponents = [
  

];


@NgModule({
  declarations: [
    ...sharedComponents,
    
    

  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SearchBarModule,
    CardModule,
    

    
    
  ],
  exports:[
    ButtonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SearchBarModule,
    CardModule,
    
    
    
    
  ]
  })
    
export class SharedModule { }
