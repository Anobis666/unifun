import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './component/audio-player.component';
import { SharedModule } from '../shared.module';
import { MaterialModule } from '../material/material.module';
import { CardModule } from '../cards/card.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { YouTubePlayerModule } from '@angular/youtube-player';







@NgModule({
  declarations: [
    AudioPlayerComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CardModule,
    SearchBarModule,
    
    
    
  
  ],
  exports:[
    AudioPlayerComponent,
    
    
  ]
})

export class AudioPlayerModule { }
