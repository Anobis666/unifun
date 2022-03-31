import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { update } from 'lodash';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { environment } from 'src/environments/environment';
import { DeleteTvSeriesRequest, GetTvSeriesRequest, UpdateTvSeriesRequest } from './model/tv-series-request.model';

@Injectable({
  providedIn: 'root'
})
export class TvSeriesService {

  user_id: any

  constructor( private httpClient: HttpClient, private userSessionService: UserSessionService) {

    this.user_id = this.userSessionService.getUserData()['user_id'];

   }
  
  public registerTvSeries(serie: any){
    return this.httpClient.post<any>(
      environment.apiGwBaseEndpoint+"/"+"tv-series", 
      serie
    )
   
  }
  public getTvSeries(request: GetTvSeriesRequest){
    
    return this.httpClient.get<any>(environment.apiGwBaseEndpoint+"/"+"tv-series"+"/"+this.user_id)
  }
  public deletePost( idTvSeries: string) {
      return this.httpClient.delete(   environment.apiGwBaseEndpoint+"/"+"tv-series"+"/"+ this.user_id+"/"+ idTvSeries)
  }



  public updateTvSeries(newTvSeries : any) {
    return this.httpClient.put(environment.apiGwBaseEndpoint+"/"+"tv-series"+"/"+ this.user_id+"/"+ newTvSeries.tvSerie_id, 
      {
        data: {
            year: newTvSeries.year,
            description: newTvSeries.description,
            title: newTvSeries.title,
            actor: newTvSeries.actor,
            image_url: newTvSeries.image_url, 
            file:newTvSeries.file
          }
      })
     }
} 

//   constructor( private httpClient: HttpClient, private userSessionService: UserSessionService) { }
  
//   public registerTvSeries(tv-series: any){
//     return this.httpClient.post<any>(
//       environment.apiGwBaseEndpoint+"/"+"tv-series", 
//       book
//     )
//    // return this.httpClient.post<any>(environment.apiGwBaseEndpoint+"/"+"tv-series",book)
//   }
//   public getTvSeries(request: c){
//     const user_id = this.userSessionService.getUserData()['user_id'];
//     return this.httpClient.get<any>(environment.apiGwBaseEndpoint+"/"+"tv-series"+"/"+user_id)
//   }


//   public deletePost( request: DeleteTvSeriesRequest) {
//   const user_id = this.userSessionService.getUserData()['user_id'];
//   return this.httpClient.delete(environment.apiGwBaseEndpoint+"/"+"tv-series"+"/"+ user_id+"/"+request.tvSeries_id)
   
//   }
//   public updateTvSeries(request : any) {
//   const user_id = this.userSessionService.getUserData()['user_id'];
//   return this.httpClient.put(environment.apiGwBaseEndpoint+"/"+"tv-series"+"/"+ user_id+"/"+request.tvSeries_id , request)
//   }
// }