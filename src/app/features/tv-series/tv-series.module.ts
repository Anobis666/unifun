import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvSeriesComponent } from './component/tv-series.component';

import { AudioPlayerModule } from 'src/app/shared/audio-player/audio-player.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TvSeriesRoutingModule } from './tv-series-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalManagementTvSeriesModule } from 'src/app/shared/modals/modal-tv-series/modal-management-tv-series/modal-management-tv-series.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TvSeriesComponent
  ],
  imports: [
    CommonModule,
    AudioPlayerModule,
    MaterialModule,
    SharedModule,
    TvSeriesRoutingModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    DialogModule,
    DynamicDialogModule,
    ModalManagementTvSeriesModule
  ],
  providers: [DialogService]
})
export class TvSeriesModule { }
