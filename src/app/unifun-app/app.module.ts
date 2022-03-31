import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '../layout/layout.module';
import { CoreModule } from '../core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { HomeModule } from '../features/home/home.module';
import { LoginModule } from '../features/login/login.module';






@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    LayoutModule,
    CoreModule,
    HomeModule,
    LayoutModule,
    AmplifyAngularModule,
    NgbModule,
    LoginModule,
    
    
  ],
  providers: [
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
