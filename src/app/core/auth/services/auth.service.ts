import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { LocalStorageService } from '../../local-storage/service/local-storage.service';
import { APP_ROUTE_LOGIN_PATH } from '../models/auth-path/auth-path.constants';
import { CognitoAuthService } from './cognito/cognito-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cognitoAuthService: CognitoAuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  public login() {
    this.cognitoAuthService.federatedLogin();
  }

  public logout() {
    this.cognitoAuthService.logout();
  }

  public async isAuthenticated(redirectToLogin: boolean = true): Promise<boolean | UrlTree> {
    const isAuthenticatedFn = () => this.cognitoAuthService.isAuthenticated();
    const authFailedFn = 
      (resolve: (UrlTree : any)=> void, reject: () => void) => {
        if(redirectToLogin) {
          console.info('AuthService', 'redirect to:', APP_ROUTE_LOGIN_PATH);
          resolve(this.router.parseUrl(APP_ROUTE_LOGIN_PATH));
        }
        else reject();
      };

    return new Promise<boolean>(
      (resolve, reject) => {
        isAuthenticatedFn()
          .then(
            value => {
              if (value) resolve(true);
              else authFailedFn(resolve, ()=> reject('Not Authenticated'))
            }
          )
          .catch(
            error => authFailedFn(resolve, () => reject(error))
          )
      }
    )
  }


}
