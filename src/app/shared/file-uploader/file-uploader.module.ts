import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploaderComponent } from './component/file-uploader.component';
import { SharedModule } from '../shared.module';








@NgModule({
  declarations: [
    //ButtonComponent,
    FileUploaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    
    
  ],
  exports: [
    
  ]
})
export class FileUploaderModule { }