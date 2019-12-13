import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  token: string;

  constructor(private ht: HttpClient) { }
  add(a) {

    const body = new HttpParams()
      .set('username', a.username)
      .set('password', a.password);
    return this.ht.post("http://192.168.1.137:8089/rpo/rest/user/authenticate", body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/form-data')
      }
    )

  }
  getItem() {
    return localStorage.getItem('token')
  }
  noticeget(e) {
    return this.ht.get("http://192.168.1.137:8089/rpo/rest/location", {
      headers: {
        'X-Access-Token': e,
        'Content-Type': 'application/json'
      }
    }
    );
  }

  noticeadd(a) {
    this.token = localStorage.getItem('token');
    return this.ht.post("http://192.168.1.137:8089/rpo/rest/location", a,
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
