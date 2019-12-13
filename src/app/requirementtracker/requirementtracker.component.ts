import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-requirementtracker',
  templateUrl: './requirementtracker.component.html',
  styleUrls: ['./requirementtracker.component.css']
})
export class RequirementtrackerComponent implements OnInit {
  rpo_url =  `${environment.serviceUrl}`;
  data
  token;
  details;
  
  constructor(private ht:HttpClient,private route:Router) 
  { }

  ngOnInit() {
    this.token = localStorage.getItem("token")
    console.log(this.token)
    this.me()
  }
  me(){
    this.ht.get(this.rpo_url+"/Bdmrequire/getBdmReqByRole/4/AM/1/10?sortingOrder=undefined&sortingField=undefined&searchText=undefined&searchField=undefined",{
      
      headers: {
        "X-Access-Token": this.token,
        'Content-Type': 'application/json'
      }
    }).subscribe(resp=>{console.log(resp)
      
    this.details=resp
    this.data=this.details.result

  
    console.log(this.data,"this from responce")
    
   });
  }
  h
  viewReqInfo(a)
  {
    console.log(a,"hyyyyyyyyyyyyy")
    this.h=a;
  }
  f1()
  {
    this.route.navigate(['home2/addreq'])
  }
  f2()
  {
    this.route.navigate(['home2/editreq'])
  }
  f3()
  {
    this.route.navigate(['home2/assignreq'])
  }
  
//   f1(){
  
//     this.route.navigate(['home3/addcan'])
//   }
  
// f2(t){
//   this.route.navigate(['home3/canmatch'])


// }

}
