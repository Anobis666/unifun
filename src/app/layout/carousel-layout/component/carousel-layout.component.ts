import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'uni-carousel-layout',
  templateUrl: './carousel-layout.component.html',
  styleUrls: ['./carousel-layout.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() movieImages:any; 
  @Input() seriesImages:any;
  @Input() bookImages:any; 
  @Input() musicImages:any; 
  
  responsiveOptions:any;

  constructor( private router: Router) {
      this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 3
      }];
  }

  ngOnInit(): void {
      console.log('BOOKS ITEMS', this.bookImages);
  }


  navigateMusic(){
  this.router.navigate(['music'])}

  navigateBooks(){
    this.router.navigate(['books'])
  }
  navigateMovies(){
    this.router.navigate(['movies']) 
  }
    
  navigateTvSeries(){
   this.router.navigate(['tv-series'])
  }
  
}
