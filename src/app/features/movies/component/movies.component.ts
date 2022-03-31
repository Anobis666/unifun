import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/core/user-session/models/user-session.models';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { DeleteMoviesRequest, GetMoviesRequest } from '../models/movies-request.model';
import { moviesmodel } from '../models/movies.model';
import { MoviesService } from '../movies.service';
import {DialogService} from 'primeng/dynamicdialog';
import { ModalManagementMoviesComponent } from 'src/app/shared/modals/modal-movies/modal-managment-movies/modal-management-movies.component';

@Component({
  selector: 'uni-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  private userData:UserData;
  moviesForm!: FormGroup;
  allMovies!: [moviesmodel];
  public imageSelected: any;
  movieUpdated!: any;


  constructor(
    private moviesService: MoviesService, private fb: FormBuilder, private userSession: UserSessionService, private dialogService: DialogService) { 

    }

  ngOnInit(): void {
    this.userData=this.userSession.getUserData();
    this.getMovies();
    this.moviesForm=this.fb.group({
      'year':['',Validators.required],
      'movie_url':[''],
      'file':[null],
      'description':['',Validators.required],
      'title':['', Validators.required],
      'id':[''],
      'author':['', Validators.required]
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
        // (imageBase64PAth) è lurl dell'img che ho caricato

        this.moviesForm.get('file').setValue(
          {
            name: file.name,
            data:imageBase64PAth
          }
        );
      }

    };
    reader.readAsDataURL(file);
  } 
getMovies(){
  const GetMovieRequest: GetMoviesRequest={
    user_id: this.userData.user_id
  }
  this.moviesService.getMovie(GetMovieRequest)
  .subscribe(res => {
    this.allMovies = res.items;
    console.log(res);

  })
}
postMovies() {
  const newMovies = this.moviesForm.getRawValue();
  console.log(newMovies);
  const req = {
    user_id : this.userData.user_id,
    data: newMovies
  };
  this.moviesService.registerMovies(req)
  .subscribe(res => {
    alert ("wow well done boy!")
    this.moviesForm.reset();
    this.getMovies();
  },
  error => {
    alert(JSON.stringify(error));
  
  })
}
getFormControl(name: string){
  return this.moviesForm.get(name) as FormControl;
}
deleteMovies(movie_id: string){
  const deleteMovie: DeleteMoviesRequest={
    user_id:this.userData.user_id,
    movie_id: movie_id
  }
  this.moviesService.deleteMovie(deleteMovie)
  .subscribe(res=> {
    alert("deleted item")
    this.getMovies();

  })
}

showDialog(movie: moviesmodel) {
  const ref = this.dialogService.open(ModalManagementMoviesComponent, {
      header: 'Update',
      width: '40%',
      data: {
        movie: movie, 
        user: this.userData, 
        isModifica:true
      }
  });

  ref.onClose.subscribe((res ) => {
      if (res) {
         alert(`è stato modificato il libro ${res.title}`)
         this.getMovies();
      }
  });
}
}