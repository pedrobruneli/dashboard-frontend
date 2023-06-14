import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard {

  constructor(private readonly router: Router, private readonly jwtHelper: JwtHelperService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    if (token) {
      if(route.root.firstChild?.routeConfig?.path === 'login')
        this.router.navigate(['']);
      return !this.jwtHelper.isTokenExpired(token)
    }
    this.router.navigate(['login']);
    return false;
  }
}
