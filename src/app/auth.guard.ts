import { AuthenticateService } from './authenticate.service';
import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticateService,
    private routerNavigate: Router
  ) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticate()) {
      this.routerNavigate.navigate(["home "]);
      return false;
    }
    return true;
  }
}
