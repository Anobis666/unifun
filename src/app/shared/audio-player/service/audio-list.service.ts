import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { publishReplay, refCount} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AudioList } from '../model/audio-player.model';
@Injectable({
  providedIn: 'root'
})
export class AudioListService {

  iTunesUrl='https://itunes.apple.com/search';
  
  audioList: Observable<AudioList[]>;
  
 

  constructor(private httpClient: HttpClient) { } 


  
  getAudioList(queryString): Observable<AudioList[]> {
     if (!this.audioList) {
       this.audioList= this.httpClient.get<AudioList[]>(`${this.iTunesUrl}?term=${queryString}`).pipe(
         publishReplay(1),
         refCount()
        );
     }
     return this.audioList;

  }

  clearCache() {
    this.audioList = null;
  }

  
  
}