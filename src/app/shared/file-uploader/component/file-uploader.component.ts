import { Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';
@Component({
  selector: 'uni-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  @Optional() @Input()
  withUpload!: boolean;

  @Output()
  public onUploadButtonClicked = new EventEmitter<any>();

  @Output()
  public onFileSelectedEmitter = new EventEmitter<any>();

  @Input()
  public formControl: FormControl = new FormControl;

  @Input()
  public fileType!: string;

  @ViewChild("fileUpload", { static: false })
  fileUpload!: ElementRef;
  public files = [];

  public imageSelected: any;

  private imageFileControls = {
    max_size: 20971520,
    allowed_types: ['image/png', 'image/jpeg', 'image/jpg'],
    max_height: 15200,
    max_width: 25600
  };

  private formData = new FormData();

  constructor() { }

  ngOnInit(): void {
  }

  emitUploadEvent(event: any) {
    console.log('FILE', event);

    this.formData.append('file', event);
    this.onUploadButtonClicked.emit(this.formData);
  }

  onFileSelected(event:any) {

    const file: File = event.target.files[0];
    switch (this.fileType) {

      case 'image':
        if (this.checkFile(file, 'image')) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            this.imageSelected = image.src;
            image.onload = rs => {
              
              const imgBase64Path = e.target.result;
              this.formControl.setValue({
                  name: file.name,
                  data: imgBase64Path
                });
              this.onFileSelectedEmitter.emit({
                name: file.name,
                data: imgBase64Path
              });
            }
          };
          reader.readAsDataURL(file);
        }
        break
    }
    // if (file) {
    //   const filename = file.name;
    //   const formData = new FormData();
    //   formData.append('file', file, filename);
    //   console.log('ON FILE SELECTED', file);
    //   file.arrayBuffer().then(
    //     arrayBuffer => {
    //       this.formControl.setValue({
    //         name: filename,
    //         data: new Blob([arrayBuffer], {type: file.type})
    //       });
    //       this.onFileSelectedEmitter.emit(formData);
    //     }
    //   )
    // }

  }

  private checkFile(file: File, fileType: string): boolean {
    switch (fileType) {
      case 'image':
        if (file.size > this.imageFileControls.max_size) {
          const imageError =
            'Maximum size allowed is ' + this.imageFileControls.max_size / 1000 + 'Mb';

          return false;
        }

        if (!_.includes(this.imageFileControls.allowed_types, file.type)) {
          const imageError = 'Only Images are allowed ( JPG | PNG )';
          return false;
        }
        return true

      default:
        return false
    }
  }
}
