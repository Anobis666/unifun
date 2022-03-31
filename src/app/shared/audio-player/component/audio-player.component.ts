import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../model/audio-player.model';
import { AudioListService } from '../service/audio-list.service';


@Component({
  selector: 'uni-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  music;

  constructor(private audioListService: AudioListService) { }

  ngOnInit(): void {}

  searchSong(value) {
    this.audioListService.getAudioList(value).subscribe(music => {
     this.music = music;
     console.log(music)
    })
  }


}
