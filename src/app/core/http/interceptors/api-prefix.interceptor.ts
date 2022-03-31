import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSessionService } from '../../user-session/service/user-session.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  id_token!: string

  constructor( private injector: Injector, private userSessionService: UserSessionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('INTERCEPTED REQUEST', request);

    if (request.url.indexOf(environment.apiGwBaseEndpoint)!== -1) {
      console.log("request intercepted");
      this.id_token= this.userSessionService.getAuthToken()['jwtToken'];
      let headers= request.headers
      .set("Authorization", `Bearer ${this.id_token}`)

      request= request.clone(
      {
        headers
      }
      );
    }

    console.log('INTERCEPTED REQUEST TRANSFORMED', request);

    return next.handle(request);
  }
}
