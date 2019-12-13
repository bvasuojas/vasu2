import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myassignments',
  templateUrl: './myassignments.component.html',
  styleUrls: ['./myassignments.component.css']
})
export class MyassignmentsComponent implements OnInit {
  data
  token;
details;
  constructor(private ht:HttpClient,private route:Router) { }

  ngOnInit() {
    this.token = localStorage.getItem("token")
    console.log(this.token)
    this.me()
  }
  me(){
    this.ht.get("http://192.168.1.137:8089/rpo/rest/allocaterequirment",{
      headers: {
        "X-Access-Token": this.token,
        'Content-Type': 'application/json'
      }
    }).subscribe(resp=>{console.log(resp)
      
    this.data=resp

  
    console.log(this.data,"this from responce")
    
   });
  }
  h
  viewReqInfo(a)
  {
    console.log(a,"hyyyyyyyyyyyyy")
    this.h=a;
  }
  
  f1(){
  
    this.route.navigate(['home3/addcan'])
  }
  
f2(t){
  this.route.navigate(['home3/canmatch'])


}
}
