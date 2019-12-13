import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-candidatematch',
  templateUrl: './candidatematch.component.html',
  styleUrls: ['./candidatematch.component.css']
})
export class CandidatematchComponent implements OnInit {
  token: any;
  data: any;
 
  constructor(private ht:HttpClient,private route:Router) { }

  ngOnInit() {
    this.token = localStorage.getItem("token")
    console.log(this.token)
    this.me()
  }
  me(){
    this.ht.get("http://192.168.1.137:8087/rpo/rest/allocaterequirment",{
      headers: {
        "X-Access-Token": this.token,
        'Content-Type': 'application/json'
      }
    }).subscribe(resp=>{console.log(resp)
      
    this.data=resp

  
    console.log(this.data,"this from responce")
    
   });
  }



 

}
