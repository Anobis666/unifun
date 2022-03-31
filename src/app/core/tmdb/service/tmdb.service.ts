import { HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpService } from '../../http/service/http.service';
import { TmdbCategoryEnum, TmdbMovieListItemModel, TmdbSearchResponseModel, TmdbTvSeriesListItemModel } from '../models/tmdb.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const headers = new HttpHeaders().set('Content-type', 'application/X-www-form-urlencoded');
@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  
  //private tmbDbMoviesEndpoint: string = environment.tmdbAuth.apiBaseEndpoint;
  public result: any;
  search: any;
  constructor(private httpclient: HttpClient) { }
  /*search(item: string): Observable<any> {
    let searchterm = 'query=${item}';
    try{
      this.result = this.httpclient.post('/search', searchterm, {headers});
      return this.result;
    } catch (e) {
      console.log(e, 'error')
    }
  
  }
}
*/
}
