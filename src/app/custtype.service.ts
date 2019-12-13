import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpParams, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CusttypeService {
  rpo_url =  `${environment.serviceUrl}`;
  cus;
  token;
  token1;
   constructor(private ht:HttpClient) { }
   add(a){
   
   const body=new HttpParams()
   .set('username', a.username)
   .set('password', a.password);
   return this.ht.post(this.rpo_url+"/user/authenticate", body.toString(),
   {
   headers:new HttpHeaders()
   .set('Content-Type', 'application/form-data')
   }
   )
   
   }
   getItem(){
   return localStorage.getItem('token')
   }
   
   cusget(e) {
   return this.ht.get(this.rpo_url+"/customerType", {
   headers: {
   'X-Access-Token': e,
   'Content-Type': 'application/json'
   }
   }
   );
   
   }
   
   cuadd(a) {
   this.token = localStorage.getItem('token');
   console.log(this.token);
   return this.ht.post(this.rpo_url+"/customerType",a,
   {
   headers: {
   'X-Access-Token': this.token,
   'Content-Type': 'application/json;charset=UTF-8'
   }
   }
   )
   
   }
   fdit(a){
   
   this.token=localStorage.getItem('token');
   
   return this.ht.post(this.rpo_url+"/customerType/"+a.id,a,{
   headers: {
   'X-Access-Token': this.token,
   'Content-Type': 'application/json;charset=UTF-8'
   }
   })
   }
 
  
}
