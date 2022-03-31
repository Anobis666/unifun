import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/core/user-session/models/user-session.models';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { DeleteTvSeriesRequest, GetTvSeriesRequest } from '../model/tv-series-request.model';
import { TvSeriesModel } from '../model/tv-series.model';
import { TvSeriesService } from '../tv-series.service';
import {DialogService} from 'primeng/dynamicdialog';
import { ModalManagementTvSeriesComponent } from 'src/app/shared/modals/modal-tv-series/modal-management-tv-series/modal-management-tv-series.component';

@Component({
  selector: 'uni-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TvSeriesComponent implements OnInit {
  private userData:UserData;
  tvSeriesForm!: FormGroup;
  allTvSeries!: [TvSeriesModel];
  public imageSelected: any;
  updateTs!: any;
  display: boolean = false;



  constructor(
    private tvSeriesService: TvSeriesService, private fb: FormBuilder, private userSession: UserSessionService,private dialogService: DialogService) { 
    }

  ngOnInit(): void {
    this.userData=this.userSession.getUserData();
    this.getTvSeries();
    this.tvSeriesForm= this.fb.group({
      'year':['', Validators.required],
      'image_url':[''],
      'file':[null],
      'description':['',Validators.required],
      'title':['', Validators.required],
      'actor':['',Validators.required],
      'id':['']
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
        console.log(imageBase64PAth);

        this.tvSeriesForm.get('file').setValue(
          {
            name: file.name,
            data:imageBase64PAth
          }
        );
      }

    };
    reader.readAsDataURL(file);
  } 


getTvSeries(){
  const GetTvSeriesRequest: GetTvSeriesRequest = {
    user_id: this.userData.user_id
  }
  this.tvSeriesService.getTvSeries(GetTvSeriesRequest)
  .subscribe(res => {
    this.allTvSeries = res.items;

    console.log(res)
  })
}
postTvSeries(){
  const newTvSeries= this.tvSeriesForm.getRawValue();
  console.log(newTvSeries);

  const req = {
    user_id: this.userData.user_id,
    data: newTvSeries
  };
  this.tvSeriesService.registerTvSeries(req)
  .subscribe(res => {
    alert ("perfect");
    this.tvSeriesForm.reset();
    this.getTvSeries();
  },
  error => {
    alert(JSON.stringify(error));
  })
}


getFormControl(name: string){
  return this.tvSeriesForm.get(name) as FormControl;
}

deleteTvSeries(tvSeries:TvSeriesModel ){
  console.log("->",tvSeries);
  
  /* const deleteTvSeries: DeleteTvSeriesRequest={
    user_id:this.userData.user_id,
    tvSeries_id: tvSeries_id
  } */
  
  this.tvSeriesService.deletePost(tvSeries.tv_series_id)
  .subscribe(res => {
    alert ("deleted item")
    this.getTvSeries();
  })
}

showDialog(tvSerie: TvSeriesModel) {
  const ref = this.dialogService.open(ModalManagementTvSeriesComponent, {
      header: 'Update',
      width: '40%',
      data: {
        tvSerie: tvSerie, 
        user: this.userData, 
        isModifica:true
      }
  });

  ref.onClose.subscribe((res ) => {
      if (res) {
         alert(`è stato modificato il libro ${tvSerie.title}`)
         this.getTvSeries();
      }
  });
}

// updateTvSeries(tvSeries_id: string) {
//   const req ={
//     user_id: this.userData.user_id,
//     tvSeries_id: tvSeries_id,
//     data: this.updateTs,
//   }

//   console.log(req);
  
  // this.tvSeriesService.updateTvSeries(req)
  // .subscribe(res => {
  //   this.getTvSeries();
  // })

}

