import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide = true;
  login=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    field1:new FormControl('',Validators.required),
    field2:new FormControl('',Validators.required),
    field3:new FormControl('',Validators.required)
  })
data;
error;
fld1;
fld2;
code;
  inputCode;
 result;
 openeye=false;
 slasheye=true;
 temp="password";
 fafa(){
   if(this.temp=="password"){
     this.temp="text";
     this.slasheye=false;
     this.openeye=true;
   }
   else{
     this.temp="password";
     this.slasheye=true;
     this.openeye=false;
   }
 }
  
msgerr=false;
  constructor(private ht:HttpClient,private r:Router) { }
 
  ngOnInit() {
    this.fld1=Math.floor(Math.random() * 10);
    this.fld2=Math.floor(Math.random() * 10);
    
    this.result=this.fld1+this.fld2;
    
  }
 
  onsubmit(){
    console.log("this.code",this.code);
    console.log("this.inputCode", this.login.value.captcha);
    
    if (this.result == this.login.value.field3) {
     
    } else {
      
     
      return;
    }
    
    const body = new HttpParams()
 .set('username', this.login.value.username)
 .set('password', this.login.value.password);
    console.log(this.login.value)








 
//   login=new FormGroup({
//     username:new FormControl('',Validators.required),
//     password:new FormControl('',Validators.required)
//   })
// data;
// error;
// msgerr=false;
//   constructor(private ht:HttpClient,private r:Router) { }

//   ngOnInit() {
//   }

//   onsubmit(){
//     const body = new HttpParams()
//  .set('username', this.login.value.username)
//  .set('password', this.login.value.password);
//     console.log(this.login.value)
this.ht.post("http://192.168.1.137:8089/rpo/rest/user/authenticate",body.toString(), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }}).subscribe(resp=>{console.log(resp)
this.data=resp;
if(this.data.token=="Bad credentials"){
  this.msgerr=true;
}else{
  localStorage.setItem("token",this.data.token);
  
  if(this.data.user.role=='BDM'){
  this.r.navigate(['home'])}
  if(this.data.user.role=='ADMIN'){
  this.r.navigate(['home1'])}
  if(this.data.user.role=='AM'){
  this.r.navigate(['home2'])}
  if(this.data.user.role=='recruiter'){
  this.r.navigate(['home3'])}
}
});
}

}
