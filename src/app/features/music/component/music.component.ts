import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/core/user-session/models/user-session.models';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { DeleteMusicRequest, GetMusicRequest } from '../models/music-request.model';
import { MusicModel } from '../models/music.model';
import { MusicService } from '../music.service';
import {DialogService} from 'primeng/dynamicdialog';
import { ModalManagementMusicComponent } from 'src/app/shared/modals/modal-music/modal-management-music/modal-management-music.component';



@Component({
  selector: 'uni-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {
  private userData:UserData;
  musicForm!: FormGroup;
  allMusic!: [MusicModel];
  public imageSelected: any;



  constructor(
    private musicService: MusicService, private fb: FormBuilder, private userSession: UserSessionService , private dialogService: DialogService) { 
    }

  ngOnInit(): void {
    this.userData=this.userSession.getUserData();
    this.getMusic();
    this.musicForm= this.fb.group({
      'year':['', Validators.required],
      'image_url':[''],
      'file':[null],
      'description':['',Validators.required],
      'title':['', Validators.required],
      'singer':['',Validators.required],
      'id':['']
    })
  }

  onFileSelected(event) {
    const file:File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e:any) => {
      const image = new Image();
      image.src = e.target.result;
      this.imageSelected = image.src;
      image.onload = rs => {
        const imageBase64PAth = e.target.result;
        console.log(imageBase64PAth);
        this.musicForm.get('file').setValue({
          name: file.name,
          data: imageBase64PAth
        });
      }
    };
    reader.readAsDataURL(file);
  }


getMusic(){
  const GetMusicRequest: GetMusicRequest = {
    user_id: this.userData.user_id
  }
  this.musicService.getMusic(GetMusicRequest)
  .subscribe(res => {
    this.allMusic = res.items;

    console.log(res)
  })
}
postMusic(){
  console.log(this.musicForm.getRawValue());
  const newMusic= this.musicForm.getRawValue();
  console.log(newMusic);

  const req = {
    user_id: this.userData.user_id,
    data: newMusic
  };
  this.musicService.registerMusic(req)
  .subscribe(res => {
    this.musicForm.reset();
    alert ("perfect");
    this.getMusic();
  },
  error => {
    alert(JSON.stringify(error));
  })
}


getFormControl(name: string){
  return this.musicForm.get(name) as FormControl;

}

deleteMusic(music_id: string){
  const deleteMusic: DeleteMusicRequest={
    user_id:this.userData.user_id,
    music_id: music_id
  }
  this.musicService.deletePost(deleteMusic)
  .subscribe(res => {
    alert ("deleted item")
    this.getMusic();
  })
}

showDialog(music : MusicModel) {
  const ref = this.dialogService.open(ModalManagementMusicComponent, {
      header: 'Update',
      width: '40%',
      data: {
        music: music, 
        user: this.userData, 
        isModifica:true
      }
  });

  ref.onClose.subscribe((res ) => {
      if (res) {
        this.getMusic();
         alert(`è stato modificato il libro ${res.title}`)
      }
  });
}


}