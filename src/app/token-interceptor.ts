import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticateService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
  
      setHeaders: {
        Authorization: `${this.auth.getToken()}`
      }
    })
    return next.handle(request);
  }
}