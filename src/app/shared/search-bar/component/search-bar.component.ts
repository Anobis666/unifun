import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AudioListService } from '../../audio-player/service/audio-list.service';

@Component({
  selector: 'uni-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

  constructor(private audioListService: AudioListService) { }

  ngOnInit(): void {}
  passQueryString(value) {
    this.searchQuery.emit(value);
    this.audioListService.clearCache();
  }


}
