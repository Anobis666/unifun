import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserData } from 'src/app/core/user-session/models/user-session.models';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { BooksService } from 'src/app/features/books/books-service.service';
import { BookModel } from 'src/app/features/books/models/books.model';



@Component({
  selector: 'uni-modal-managment-books',
  templateUrl: './modal-managment-books.component.html',
  styleUrls: ['./modal-managment-books.component.scss']
})
export class ModalManagmentBooksComponent implements OnInit {

  booksForm: FormGroup= new FormGroup({})
  imageSelected: string;
  book: BookModel;
  isModifica: boolean = false
  user: UserData
  bookCover:any


  objReqImage: any;
  
  constructor( private booksService: BooksService, private fb: FormBuilder, public modal: DynamicDialogRef, public dataModal: DynamicDialogConfig) {
    this.initFormBook()
   }

  ngOnInit(): void {

    this.book=this.dataModal.data.book
    this.isModifica=this.dataModal.data.isModifica
    this.user=this.dataModal.data.user

    console.log("BOOK-->",this.book);

    this.bookCover = this.book.image_url;

    if (this.isModifica && this.book){ 
      this.booksForm.setValue({
        year: this.book.year,
        description: this.book.description,
        title: this.book.title,
        author: this.book.author,
        image_url: this.book.image_url,
        book_id:this.book.book_id,
        file: null
      })
    }
  }

  initFormBook(){
    //CREO LA FORM 
    this.booksForm= this.fb.group({
      'year': ['', Validators.required],
      'image_url':[''],
      'description':['',Validators.required],
      'title':['', Validators.required],
      'book_id':[''],
      'author':['', Validators.required],
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

       this.booksForm.get('image_url').setValue('');
        this.bookCover = imageBase64PAth

      }
    };
    reader.readAsDataURL(file);
  }  

  onSubmitBook(){
    
    
  if(this.booksForm.valid){

    //CREO LA REQUEST PER LA FORM
    const newBooks = this.booksForm.getRawValue(); 

    newBooks.file = this.objReqImage;
    
    // const req = {
    //   user_id : this.user.user_id,
    //   book_id : newBooks.book_id,
    //   data: newBooks
    // };

    if(this.isModifica){

       this.booksService.updateBook(newBooks).subscribe(res => {
          if(res) {
            //get
              this.modal.close(res)
            }
      },
      error => {
        alert(JSON.stringify(error));
      })

      
   } else{
      //todo : servizio creazione libro
    }
  } else {
    alert("dati mancanti")
    }

    
  }
}
