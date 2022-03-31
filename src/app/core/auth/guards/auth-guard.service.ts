import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    // return this.socialAuthService.authState.pipe(
    //   map((socialUser: SocialUser) => !!socialUser),
    //   tap((isLoggedIn: boolean) => {
    //     if (!isLoggedIn) this.router.navigate(['login'])
    //   })
    // )
    return this.authService.isAuthenticated();
  }
}
