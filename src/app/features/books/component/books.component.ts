import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/core/user-session/models/user-session.models';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { BooksService } from '../books-service.service';
import { DeleteBookRequest, GetBookRequest } from '../models/book-request.model';
import { BookModel } from '../models/books.model';
import {DialogService} from 'primeng/dynamicdialog';
import { ModalManagmentBooksComponent } from 'src/app/shared/modals/modal-books/modal-managment-books/modal-managment-books.component';

@Component({
  selector: 'uni-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  
})


    
export class BooksComponent implements OnInit{
  private userData:UserData;
  booksForm!: FormGroup;
  allBooks!: [BookModel]; 
  public imageSelected: any;
  bookUpdated!: any;
  display: boolean = false;

  constructor(
    private booksService: BooksService, private fb: FormBuilder, private userSession: UserSessionService, private dialogService: DialogService) {
    }


  ngOnInit(): void {
    this.userData=this.userSession.getUserData();
    this.getBooks();
    this.booksForm= this.fb.group({
      'year': ['', Validators.required],
      'image_url':[''],
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
        console.log(imageBase64PAth);

        this.booksForm.get('file').setValue(
          {
            name: file.name,
            data:imageBase64PAth
          }
        );
      }

    };
    reader.readAsDataURL(file);
  } 
  
getBooks(){
 const GetBookRequest: GetBookRequest={
    user_id:this.userData.user_id
  }
  this.booksService.getBooks(GetBookRequest)
  .subscribe(res => {
    this.allBooks=res.items;
    
   console.log(res)
  })
}
postBooks() {
  const newBooks = this.booksForm.getRawValue(); 
  console.log( newBooks);
  const req = {
    user_id : this.userData.user_id,
    data: newBooks
  };
  this.booksService.registerBook(req)
  .subscribe(res => {
    alert("ok");
    this.getBooks();
  },
  error => {
    alert(JSON.stringify(error));
  })
}


getFormControl(name: string){
  return this.booksForm.get(name) as FormControl;
}
deleteBooks(book_id: string){
  const deleteBook: DeleteBookRequest={
    user_id:this.userData.user_id,
    book_id: book_id
  }
  this.booksService.deletePost(deleteBook)
  .subscribe(res=> {
    alert("deleted item")
    this.getBooks();
  })
}

 /*  updateBooks(book_id: string) {
    const req ={
      user_id: this.userData.user_id,
      book_id: book_id,
      data: this.bookUpdated
    }
  
    console.log(req);
    
    // this.tvSeriesService.updateTvSeries(req)
    // .subscribe(res => {
    //   this.getTvSeries();
    // })
  } */

  showDialog(book: BookModel) {
    const ref = this.dialogService.open(ModalManagmentBooksComponent, {
        header: 'Update',
        width: '40%',
        data: {
          book: book, 
          user: this.userData, 
          isModifica:true
        }
    });

    ref.onClose.subscribe((res ) => {
        if (res) {
           alert(`è stato modificato il libro ${res.title}`)
           this.getBooks();
           
        }
        
    });
}

/* newBook(){
  const ref = this.dialogService.open(ModalManagmentBooksComponent, {
    header: 'NUOVO',
    width: '70%',
    data: {
      user: this.userData, 
      isModifica:false
    }
});

ref.onClose.subscribe((res ) => {
    if (res) {
      
    }
});
} */

}
