import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { TmdbService } from 'src/app/core/tmdb/service/tmdb.service';

@Component({
  selector: 'uni-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.scss']
})
export class MoviePlayerComponent implements OnInit {

  public loading: boolean = false;
  public results: Observable<any>;
  public searchField: FormControl;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => { 
        this.loading = true; 
      }),
      switchMap(term => this.tmdbService.search(term)),
      tap(_ => (this.loading = false))
    );

    
  }

}
