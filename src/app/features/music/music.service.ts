import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { environment } from 'src/environments/environment';
import { DeleteMusicRequest, GetMusicRequest } from './models/music-request.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  user_id: any

  constructor( private httpClient: HttpClient, private userSessionService: UserSessionService) {

    this.user_id = this.userSessionService.getUserData()['user_id'];

   }
  
  public registerMusic(music: any){
    return this.httpClient.post<any>(
      environment.apiGwBaseEndpoint+"/"+"music", 
      music
    )
   // return this.httpClient.post<any>(environment.apiGwBaseEndpoint+"/"+"books", book)
  }
  public getMusic(request: GetMusicRequest){
    
    return this.httpClient.get<any>(environment.apiGwBaseEndpoint+"/"+"music"+"/"+this.user_id)
  }
  public deletePost( request: DeleteMusicRequest) {
  
  return this.httpClient.delete(environment.apiGwBaseEndpoint+"/"+"music"+"/"+ this.user_id+"/"+request.music_id)
  }
  public updateMusic(newMusic : any) {
    return this.httpClient.put(environment.apiGwBaseEndpoint+"/"+"music"+"/"+ this.user_id+"/"+newMusic.music_id, 
      {
        data: {
            year: newMusic.year,
            description: newMusic.description,
            title: newMusic.title,
            singer: newMusic.singer,
            image_url: newMusic.image_url, 
            file:newMusic.file
          }
      })
     }
} 

//   constructor( private httpClient : HttpClient, private userSessionService: UserSessionService) { }
  
//   public registerMusic(music: any){
//     return this.httpClient.post<any>(
//       environment.apiGwBaseEndpoint+"/"+"music",
//       music
//     )

//   }
//   public getMusic(request: GetMusicRequest){
//     const user_id = this.userSessionService.getUserData()['user_id'];
//     return this.httpClient.get<any>(environment.apiGwBaseEndpoint+"/"+"music"+"/"+user_id)

//   }

//   public deletePost( request: DeleteMusicRequest) {
//     const user_id = this.userSessionService.getUserData()['user_id'];
//     return this.httpClient.delete(environment.apiGwBaseEndpoint+"/"+"music"+"/"+ user_id+"/"+request.music_id)
     
//   }


// }
