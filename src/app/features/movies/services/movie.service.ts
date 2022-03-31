import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { environment } from 'src/environments/environment';
import { GetMoviesRequest } from '../models/movies-request.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  user:any

  constructor(private httpClient: HttpClient, private userSessionService : UserSessionService) { 
    this.user=this.userSessionService.getUserData();
  }


public registerMovie(movie: any){
  return this.httpClient.post<any>(environment.apiGwBaseEndpoint+"/"+"movies", movie)
}

public getMovies(request: GetMoviesRequest){
  //const user_id = this.userSessionService.getUserData()['user_id'];
  return this.httpClient.get<any>(environment.apiGwBaseEndpoint+"/" + "movies" + "/" +this.user.user_id)
}

public updateMovie(newMovies : any) {
  // const user_id = this.userSessionService.getUserData()['user_id'];
  return this.httpClient.put(environment.apiGwBaseEndpoint+"/"+"movies"+"/"+ this.user.user_id + "/"+ newMovies.movie_id  , {
    data:{
      year: newMovies.year,
      description: newMovies.description,
      title: newMovies.title,
      author: newMovies.author,
      image_url: newMovies.image_url, 
      file:newMovies.file
    }
  })
  }
}