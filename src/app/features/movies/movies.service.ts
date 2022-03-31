import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { environment } from 'src/environments/environment';
import { DeleteMoviesRequest, GetMoviesRequest } from './models/movies-request.model';

@Injectable({
  providedIn: 'root'
})


export class MoviesService {

  user_id: any

  constructor( private httpClient: HttpClient, private userSessionService: UserSessionService) {

    this.user_id = this.userSessionService.getUserData()['user_id'];

   }
  
  public registerMovies(movie: any){
    return this.httpClient.post<any>(
      environment.apiGwBaseEndpoint+"/"+"movies", 
      movie
    )
   
  }
  public getMovie(request: GetMoviesRequest){
    
    return this.httpClient.get<any>(environment.apiGwBaseEndpoint+"/"+"movies"+"/"+this.user_id)
  }
  public deleteMovie( request: DeleteMoviesRequest) {
  
  return this.httpClient.delete(environment.apiGwBaseEndpoint+"/"+"movies"+"/"+ this.user_id+"/"+request.movie_id)
  }
  public updateMovie(request : any) {
    return this.httpClient.put(environment.apiGwBaseEndpoint+"/"+"movies"+"/"+ this.user_id+"/"+request.movie_id, 
      {
        user_id : this.user_id,
        movie_id : request.movieId,
        data: {
            year: request.year,
            description: request.description,
            title: request.title,
            author: request.author,
            image_url: request.image_url, 
          }
      })
     }
} 


// export class MoviesService {
//   deletePost(deleteBook: DeleteMoviesRequest) {
//     throw new Error('Method not implemented.');
//   }
//   getMovies: any;

//   constructor( private httpClient: HttpClient, private userSessionService: UserSessionService) { }
  
//   public registerMovies(movies: any){
//     return this.httpClient.post<any>(
//       environment.apiGwBaseEndpoint+"/"+"movies", 
//       movies
//     )
//    // return this.httpClient.post<any>(environment.apiGwBaseEndpoint+"/"+"books", book)
//   }
//   public getMovie(request: GetMoviesRequest){
//     const user_id = this.userSessionService.getUserData()['user_id'];
//     return this.httpClient.get<any>(environment.apiGwBaseEndpoint+"/"+"movies"+"/"+user_id)
//   }
//   public deleteMovie(request:DeleteMoviesRequest) {
//     const user_id = this.userSessionService.getUserData()['user_id']
//     return this.httpClient.delete(environment.apiGwBaseEndpoint+"/"+"movies"+"/"+ user_id+"/"+request.movie_id)
//   }
  

// }