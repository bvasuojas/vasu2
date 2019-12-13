import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpParams, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements HttpInterceptor {
  rpo_url =  `${environment.serviceUrl}`;
  constructor(private ht: HttpClient) { }



token;

  add(a) {
    const body = new HttpParams()
      .set('username', a.username)
      .set('password', a.password);
    return this.ht.post(this.rpo_url+"/user/authenticate", body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/form-data')
      }
    )
  }
  token1
  add1(a) {
    this.token1 = localStorage.getItem('token')
    return this.ht.post( this.rpo_url+"/BillingModel/", a,
      {
        headers: {
          'X-Access-Token': this.token1,
          'Content-Type': 'application/json'
        }
      }
    )
  }

  post(a) {
    this.token1 = localStorage.getItem('token')
    return this.ht.post(this.rpo_url+"/BillingModel/"+a.id,a,
      {
        headers: {
          'X-Access-Token': this.token1,
          'Content-Type': 'application/json'
        }
      }
    )
  }


 del(a) {
     this.token1 = localStorage.getItem('token')
    return this.ht.delete(this.rpo_url+"/BillingModel/"+a,
    {
      headers: {
        'X-Access-Token': this.token1,
        'Content-Type': 'application/json'
      }
    })
  }
  getItem() {
    return localStorage.getItem('token')
  }
  get(e) {
    return this.ht.get(this.rpo_url+"/BillingModel", {
      headers: {
        'X-Access-Token': e,
        'Content-Type': 'application/json'
      }
    });
  }
  intercept(req, next) {
    let token = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${this.getItem()}`
      }
    })
    return next.handle(token);
  }


  noticeget(e) {
    return this.ht.get(this.rpo_url+"/noticePeriod", {
    headers: {
    'X-Access-Token': e,
    'Content-Type': 'application/json'
    }
    }
    );
    
    }
    
    noticeadd(a) {
    this.token = localStorage.getItem('token');
    return this.ht.post(this.rpo_url+"/noticePeriod", a,
    {
    // headers: new HttpHeaders()
    // .set('Content-Type', "application/json;charset=UTF-8")
    // .set('X-Access-Token', this.token)
    headers: {
    'X-Access-Token': this.token,
    'Content-Type': 'application/json;charset=UTF-8'
    }
    }
    )
    
    }
   
   
    noticeedit(a) {
    this.token = localStorage.getItem('token');
    return this.ht.post(this.rpo_url+"/noticePeriod/"+a.id, a,
    {
    // headers: new HttpHeaders()
    // .set('Content-Type', "application/json;charset=UTF-8")
    // .set('X-Access-Token', this.token)
    headers: {
    'X-Access-Token': this.token,
    'Content-Type': 'application/json;charset=UTF-8'
    }
    }
    )
    
    }
}
