import { Injectable } from '@angular/core';

import { HttpClient,HttpInterceptor, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SkillserviceService {

  constructor(private ht:HttpClient) { }
  add(a){
   
      const body=new HttpParams()
       .set('username', a.username)
       .set('password', a.password);
     return this.ht.post("http://192.168.1.137:8089/rpo/rest/user/authenticate", body.toString(),
       {
      headers:new HttpHeaders()
       .set('Content-Type', 'application/form-data')
       }
       )
   
  }
  
  getItem(){
    return localStorage.getItem('token')
  }
  intercept(req,next){
    let token=req.clone({
      setHeaders:{
        "Authorization":`Bearer ${this.getItem()}`
      }
     
    })
    return next.handle(token);
  }
  tabledata(a){
   return this.ht.get("http://192.168.1.137:8089/rpo/rest/skill",{
    headers:{
      'X-Access-Token':a,
 'Content-Type':'application/json'
 }
    }

 
  )
  }
  tableupdate(r){
    debugger;
  let p = localStorage.getItem("token");
    return this.ht.post("http://192.168.1.137:8089/rpo/rest/skill/"+ r.id,r,{
      headers:{
        'X-Access-Token':p,
   'Content-Type':'application/json'
   }
   
    })
  }
  addnewdetails(a){
    let p = localStorage.getItem("token")
    return this.ht.post("http://192.168.1.137:8089/rpo/rest/skill",a,{
      headers:{
        'X-Access-Token':p,
   'Content-Type':'application/json'
   }
    })
  }
}
