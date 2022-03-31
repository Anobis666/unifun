import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserData } from 'src/app/core/user-session/models/user-session.models';

import { MusicModel } from 'src/app/features/music/models/music.model';
import { MusicService } from 'src/app/features/music/music.service';

@Component({
  selector: 'uni-modal-management-music',
  templateUrl: './modal-management-music.component.html',
  styleUrls: ['./modal-management-music.component.scss']
})
export class ModalManagementMusicComponent implements OnInit {

 
  musicForm: FormGroup= new FormGroup({})
  imageSelected: string;
  music: MusicModel;
  isModifica: boolean = false
  user: UserData
  musicCover:any


  objReqImage: any;
  
  constructor( private musicService: MusicService, private fb: FormBuilder, public modal: DynamicDialogRef, public dataModal: DynamicDialogConfig) {
    this.initFormMusic()
   }

  ngOnInit(): void {

    this.music=this.dataModal.data.music
    this.isModifica=this.dataModal.data.isModifica
    this.user=this.dataModal.data.user

    console.log("MUSIC-->",this.music);

    this.musicCover = this.music.image_url;

    if (this.isModifica && this.music){ 
      this.musicForm.setValue({
        year: this.music.year,
        description: this.music.description,
        title: this.music.title,
        singer: this.music.singer,
        image_url: this.music.image_url,
        music_id:this.music.music_id,
        file: null
      })
    }
  }

  initFormMusic(){
    //CREO LA FORM 
    this.musicForm= this.fb.group({
      'year': ['', Validators.required],
      'image_url':[''],
      'description':['',Validators.required],
      'title':['', Validators.required],
      'music_id':[''],
      'singer':['', Validators.required],
      'file':[null]
    })
  }

  onFileSelected(event) {
    const file:File = event.target.files[0];
    const reader =new FileReader();
    reader.onload = (e:any) => {
      const image =new Image();
      image.src = e.target.result;
      this.imageSelected = image.src;
      image.onload = rs => {
        const imageBase64PAth = e.target.result;
        
        /* this.booksForm.get('file').setValue({
          name: file.name,
          data:imageBase64PAth
        }); */
        this.objReqImage = {
          name: file.name,
          data:imageBase64PAth
        }; 

        this.musicForm.get('image_url').setValue('');
        this.musicCover = imageBase64PAth

      }
    };
    reader.readAsDataURL(file);
  }  

  onSubmitMusic(){
    
    
  if(this.musicForm.valid){

    //CREO LA REQUEST PER LA FORM
    const newMusic = this.musicForm.getRawValue(); 

    newMusic.file = this.objReqImage;
  
    // const req = {
    //   user_id : this.user.user_id,
    //   music_id : musicId,
    //   data: newMusic
    // };


    if(this.isModifica){

       this.musicService.updateMusic(newMusic)
  .subscribe(res => {
    if(res){
      this.modal.close(res)
      console.log(res);
      
    }
  },
  error => {
    alert(JSON.stringify(error));
  })

    } else{

      //todo : servizio creazione libro
    }
    
  }else{
    alert("dati mancanti")
  }
  }

}
