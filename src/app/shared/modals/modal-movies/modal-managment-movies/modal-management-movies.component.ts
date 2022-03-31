import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserData } from 'src/app/core/user-session/models/user-session.models';
import { moviesmodel } from 'src/app/features/movies/models/movies.model';
import { MovieService } from 'src/app/features/movies/services/movie.service';

@Component({
  selector: 'uni-modal-management-movies',
  templateUrl: './modal-management-movies.component.html',
  styleUrls: ['./modal-management-movies.component.scss']
})
export class ModalManagementMoviesComponent implements OnInit {

  moviesForm: FormGroup= new FormGroup({})
  imageSelected: string;
  movie: moviesmodel;
  isModifica: boolean = false
  user: UserData
  movieCover:any


  objReqImage: any;
  constructor( private moviesService: MovieService, private fb: FormBuilder, public modal: DynamicDialogRef, public dataModal: DynamicDialogConfig) {
    this.initFormMovie()
   }

  ngOnInit(): void {

    this.movie=this.dataModal.data.movie
    this.isModifica=this.dataModal.data.isModifica
    this.user=this.dataModal.data.user

    console.log("Movie-->",this.movie);

    this.movieCover = this.movie.image_url;

    if (this.isModifica && this.movie){ 
      this.moviesForm.setValue({
        year: this.movie.year,
        description: this.movie.description,
        title: this.movie.title,
        author: this.movie.author,
        image_url: this.movie.image_url,
        movie_id:this.movie.movie_id,
        file: null
      })
    }
  }

  initFormMovie(){
    //CREO LA FORM 
    this.moviesForm= this.fb.group({
      'year': ['', Validators.required],
      'image_url':[''],
      'description':['',Validators.required],
      'title':['', Validators.required],
      'movie_id':[''],
      'author':['', Validators.required],
      'file': null
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
        
        /* this.moviesForm.get('file').setValue({
          name: file.name,
          data:imageBase64PAth
        }); */
        this.objReqImage = {
          name: file.name,
          data:imageBase64PAth
        }; 

        this.moviesForm.get('image_url').setValue('');
        this.movieCover = imageBase64PAth

      }
    };
    reader.readAsDataURL(file);
  }  

  onSubmitMovie(){
    
    
  if(this.moviesForm.valid){

    //CREO LA REQUEST PER LA FORM
    const newMovies = this.moviesForm.getRawValue(); 

    newMovies.file = this.objReqImage;
  
  
    if(this.isModifica){

       this.moviesService.updateMovie(newMovies)
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


