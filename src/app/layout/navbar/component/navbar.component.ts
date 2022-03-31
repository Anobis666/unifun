import { Component, Input, OnInit } from '@angular/core';

import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { LocalStorageService } from 'src/app/core/local-storage/service/local-storage.service';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';




@Component({
  selector: 'uni-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  public currentUrl!: string;
  public sectionTitle!: string;
  constructor(
    private router: Router, private authService: AuthService,
    private localStorage: LocalStorageService, private userSessionService:UserSessionService) {
  }

  loggato:boolean; 
  utente:any;


 ngOnInit(): void {
   this.checkLogged()
   
   this.router.events
       .subscribe(
         event => {
           switch (true) {
             case event instanceof NavigationEnd:
               this.checkLogged();
               this.currentUrl = (event as RouterEvent).url;
               console.log('CURRENT ROUTE', this.currentUrl);
               switch (this.currentUrl) {
                 case '/books':
                   this.sectionTitle = 'My Library'
                  break;

                  case '/music':
                    this.sectionTitle = 'My JukeBox'
                  break;

                  case '/movies':
                    this.sectionTitle = 'My Cinema'
                  break;
                  case '/tv-series':
                    this.sectionTitle = 'My Shows'
                  break;
                  case '/login':
                    this.sectionTitle = 'login'
                    break;
                  default:
                    this.sectionTitle = 'My home'
                  break;

               }
               break
           }
         }
       )
        
    
 }



 public navigateToLogin(){
   this.router.navigate(['login'])
 }




 logout(){
  this.authService.logout();
  this.checkLogged()
}

private checkLogged(){
  const authToken =  this.userSessionService.getAuthToken();
  this.loggato = authToken!= null;
  console.log("loggato", this.loggato);
  console.log(authToken);
  
}

public clickTitle() {
  const h1= document.querySelector('h1')
  h1.addEventListener('click', (e) => e.preventDefault())
}

navigateBooks(){
  this.router.navigate(['books'])
}
navigateMovies(){
  this.router.navigate(['movies']) }


navigateTvSeries(){
    this.router.navigate(['tv-series']) }


navigateMusic(){
      this.router.navigate(['music'])}



navigateHomePage(){
  this.router.navigate(['home'])
}
}






