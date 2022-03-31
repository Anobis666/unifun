
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { environment } from 'src/environments/environment';
import { DeleteBookRequest, GetBookRequest, UpdateBookRequest } from './models/book-request.model';
import { BookModel } from './models/books.model';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  user_id: string

  constructor( private httpClient: HttpClient, private userSessionService: UserSessionService) {

    this.user_id = this.userSessionService.getUserData().user_id;

   }
  
  public registerBook(book: any){
    return this.httpClient.post<any>(
      environment.apiGwBaseEndpoint+"/"+"books", 
      book
    )
   // return this.httpClient.post<any>(environment.apiGwBaseEndpoint+"/"+"books", book)
  }
  public getBooks(request: GetBookRequest){
    
    return this.httpClient.get<any>(environment.apiGwBaseEndpoint+"/"+"books"+"/"+this.user_id)
  }
  public deletePost( request: DeleteBookRequest) {
  
  return this.httpClient.delete(environment.apiGwBaseEndpoint+"/"+"books"+"/"+ this.user_id+"/"+request.book_id)
  }
  public updateBook(newBooks : any) {
    return this.httpClient.put(environment.apiGwBaseEndpoint+"/"+"books"+"/"+ this.user_id+"/"+newBooks.book_id, 
      {
        data: {
            year: newBooks.year,
            description: newBooks.description,
            title: newBooks.title,
            author: newBooks.author,
            image_url: newBooks.image_url, 
            file:newBooks.file
          }
      })
     }
} 


// export class BooksService {

//   constructor( private httpClient: HttpClient, private userSessionService: UserSessionService) { }
  
//   public registerBook(book: any){
//     return this.httpClient.post<any>(
//       environment.apiGwBaseEndpoint+"/"+"books", 
//       book
//     )
  //  return this.httpClient.post<any>(environment.apiGwBaseEndpoint+"/"+"books", book)
//   }
//   public getBooks(request: GetBookRequest){
//     const user_id = this.userSessionService.getUserData()['user_id'];
//     return this.httpClient.get<any>(environment.apiGwBaseEndpoint+"/"+"books"+"/"+user_id)
//   }
//   public deletePost( request: DeleteBookRequest) {
//   const user_id = this.userSessionService.getUserData()['user_id'];
//   return this.httpClient.delete(environment.apiGwBaseEndpoint+"/"+"books"+"/"+ user_id+"/"+request.book_id)
//   }
//   public updateBook(request : any) {
//     // const user_id = this.userSessionService.getUserData()['user_id'];
//     return this.httpClient.put(environment.apiGwBaseEndpoint+"/"+"books"+"/"+ request.user_id+"/"+request.book_id, request)
//     }
// }