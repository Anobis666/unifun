import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/core/user-session/models/user-session.models';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { ICarouselItemModel } from 'src/app/layout/carousel-layout/models/carousel-layout.models';
import { BooksService } from '../../books/books-service.service';
import { GetBookRequest } from '../../books/models/book-request.model';
import { GetMoviesRequest } from '../../movies/models/movies-request.model';
import { MoviesService } from '../../movies/movies.service';
import { GetMusicRequest } from '../../music/models/music-request.model';
import { MusicService } from '../../music/music.service';
import { GetTvSeriesRequest } from '../../tv-series/model/tv-series-request.model';
import { TvSeriesService } from '../../tv-series/tv-series.service';



@Component({
  selector: 'uni-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public musicCarouselItems: ICarouselItemModel[] = [];
  public bookCarouselItems: ICarouselItemModel[] = [];
  public movieCarouselItems: ICarouselItemModel[] = [];
  public tvSeriesCarouselItems: ICarouselItemModel[] = [];

  public loading: boolean = true;

  private userData: UserData;

  constructor(
    private booksService: BooksService,
    private userSessionService: UserSessionService,
    private movieService: MoviesService,
    private musicService: MusicService,
    private tvSeriesService: TvSeriesService
  ) { }

  ngOnInit(): void {
    this.userData=this.userSessionService.getUserData();

    this.initCarousel();

  }

  private getBookItems() {
    const getBooksRequest: GetBookRequest={
      user_id:this.userData.user_id
    };
    this.booksService.getBooks(getBooksRequest)
    .subscribe(res => {
      this.bookCarouselItems=res.items.map(
        elem => {
          const carouselItem: ICarouselItemModel = {
            picture: elem.image_url,
            title: elem.title
          };
          return carouselItem
        }
      );
      this.loading = false;
      console.log(res)
  
    })

  }

  private getMovieItems() {
    const getMovieRequest: GetMoviesRequest={
      user_id:this.userData.user_id
    };
    this.movieService.getMovie(getMovieRequest)
    .subscribe(res => {
      this.movieCarouselItems=res.items.map(
        elem => {
          const carouselItem: ICarouselItemModel = {
            picture: elem.image_url,
            title: elem.title
          };
          return carouselItem
        }
      );
      this.loading = false;
      console.log(res)
  
    })
  }


    private getMusicItems() {
      const getMusicRequest: GetMusicRequest={
        user_id:this.userData.user_id
      };
      this.musicService.getMusic(getMusicRequest)
      .subscribe(res => {
        this.musicCarouselItems=res.items.map(
          elem => {
            const carouselItem: ICarouselItemModel = {
              picture: elem.image_url,
              title: elem.title
            };
            return carouselItem
          }
        );
        this.loading = false;
        console.log(res)
    
      })
    }


      private getTvSeriesItems() {
        const getTvSeriesRequest: GetTvSeriesRequest={
          user_id:this.userData.user_id
        };
        this.tvSeriesService.getTvSeries(getTvSeriesRequest)
        .subscribe(res => {
          this.tvSeriesCarouselItems=res.items.map(
            elem => {
              const carouselItem: ICarouselItemModel = {
                picture: elem.image_url,
                title: elem.title
              };
              return carouselItem
            }
          );
          this.loading = false;
          console.log(res)
      
        })




  }

  private initCarousel() {
    this.loading = true;
   
    this.getMovieItems();
    this.getBookItems();
    this.getMusicItems();
    this.getTvSeriesItems();

  }
}
