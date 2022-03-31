import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserData } from 'src/app/core/user-session/models/user-session.models';
import { TvSeriesModel } from 'src/app/features/tv-series/model/tv-series.model';
import { TvSeriesService } from 'src/app/features/tv-series/tv-series.service';

@Component({
  selector: 'uni-modal-management-tv-series',
  templateUrl: './modal-management-tv-series.component.html',
  styleUrls: ['./modal-management-tv-series.component.scss']
})
export class ModalManagementTvSeriesComponent implements OnInit {

  tvSeriesForm: FormGroup= new FormGroup({})
  imageSelected: string;
  tvSerie: TvSeriesModel;
  isModifica: boolean = false;
  user: UserData;
  tvSerieCover:any


  objReqImage: any;
    
  
  constructor( private tvSeriesService:TvSeriesService, private fb: FormBuilder, public modal: DynamicDialogRef, public dataModal: DynamicDialogConfig) {
    this.initFormBook()
   }

  ngOnInit(): void {

    this.tvSerie=this.dataModal.data.tvSerie
    this.isModifica=this.dataModal.data.isModifica
    this.user=this.dataModal.data.user

    console.log("TV-Serie-->",this.tvSerie);

    this.tvSerieCover = this.tvSerie.image_url;

    if (this.isModifica && this.tvSerie){ 
      this.tvSeriesForm.setValue({
        year: this.tvSerie.year,
        description: this.tvSerie.description,
        title: this.tvSerie.title,
        actor: this.tvSerie.actor,
        image_url: this.tvSerie.image_url,
        tvSerie_id:this.tvSerie.tv_series_id,
        file: null
      })
    }
  }

  initFormBook(){
    //CREO LA FORM 
    this.tvSeriesForm= this.fb.group({
      'year': ['', Validators.required],
      'image_url':[''],
      'description':['',Validators.required],
      'title':['', Validators.required],
      'tvSerie_id':[''],
      'actor':['', Validators.required],
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

        this.tvSeriesForm.get('image_url').setValue('');
        this.tvSerieCover = imageBase64PAth

      }
    };
    reader.readAsDataURL(file);
  }  

  onSubmitTvSerie(){
    
    
  if(this.tvSeriesForm.valid){

    //CREO LA REQUEST PER LA FORM
    const newTvSeries = this.tvSeriesForm.getRawValue(); 

    newTvSeries.file = this.objReqImage;
  
    // const req = {
    //   user_id : this.user.user_id,
    //   tvSerie_id : tvSerieId,
    //   data: newTvSeries
    // };


    if(this.isModifica){

       this.tvSeriesService.updateTvSeries(newTvSeries)
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

