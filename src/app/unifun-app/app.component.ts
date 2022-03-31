import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'unifun';
  public currentRouter!: string;


  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
      this.authService.logout();
  }

}
