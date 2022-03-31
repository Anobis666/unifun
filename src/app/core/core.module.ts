import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Oauth2Guard } from './auth/guards/oauth2.guard';
import { AuthGuardService } from './auth/guards/auth-guard.service';
import { HttpService } from './http/service/http.service';
import { ApiPrefixInterceptor } from './http/interceptors/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/interceptors/error-handler.interceptor';
import { CacheInterceptor } from './http/interceptors/cache.interceptor';
import { AmplifyAngularModule, AmplifyModules, AmplifyService } from 'aws-amplify-angular';
import { Auth } from '@aws-amplify/auth/lib-esm/Auth';
import Storage from '@aws-amplify/storage';




export const httpInterceptors = [
  ApiPrefixInterceptor,
  ErrorHandlerInterceptor,
  CacheInterceptor,
]


//export function HttpLoaderFactory(http: HttpClient) {
 // return new TranslateHttpLoader(
  //  http,
   // `${environment.i18nPrefix}/assets/i18n/`,
    //'.json'
  //);
//} 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    


    
  ],
  providers: [
    //...httpInterceptors,
    Oauth2Guard,
    AuthGuardService,
    //HttpService,
    //{
      //provide: HttpClient,
      //useClass: HttpService,
    //},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    
    {
      provide: AmplifyService,
      useFactory: () => AmplifyModules({ Auth, Storage })
    }
  ],
  exports: []
})
export class CoreModule { }
