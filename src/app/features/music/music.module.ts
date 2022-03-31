import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './component/music.component';
import { AudioPlayerModule } from 'src/app/shared/audio-player/audio-player.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MusicRoutingModule } from './music-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CardModule } from 'src/app/shared/cards/card.module';
import { SearchBarModule } from 'src/app/shared/search-bar/search-bar.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ModalManagementMusicModule } from 'src/app/shared/modals/modal-music/modal-management-music/modal-management-music.module';



@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MusicRoutingModule,
    HttpClientModule,
    LayoutModule,
    AudioPlayerModule,
    MaterialModule,
    CardModule,
    SearchBarModule,
    DialogModule,
    DynamicDialogModule,
    ModalManagementMusicModule
  ],
  providers: [DialogService]
})
export class MusicModule { }
