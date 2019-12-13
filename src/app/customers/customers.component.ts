import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment'
declare var $: any;
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  
  rpo_url =  `${environment.serviceUrl}`;
  data
  token;
  details;
  idtospace: any;
  addStatus:boolean=true;
  constructor(private ht:HttpClient,private route:Router) { }

  ngOnInit() {
    this.token = localStorage.getItem("token")
    console.log(this.token)
    this.me()
    
  }
  tospace(id){
    if(this.addStatus==false){
    this.idtospace=!id;
    this.addStatus=true
      }else{
    this.idtospace=id;
    this.addStatus=false
      }
    }
me(){
    this.ht.get( this.rpo_url+"/client/getAllClientsByRole/4/AM/1/10?sortingOrder=undefined&sortingField=undefined&searchText=undefined&searchField=undefined"
    
    ,{
      
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
    this.route.navigate(['home2/editcust'])
  }
  f3()
  {
    this.route.navigate(['home2/addcont'])
  }
  expandSelected(e)
  {
    console.log(e)
this.h=e;
  }
 
}

// $(document).ready(function(){
//   // Add minus icon for collapse element which is open by default
//   $(".expandSelected.show").each(function(){
//     $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
//   });
  
//   // Toggle plus minus icon on show hide of collapse element
//   $(".expandSelected").on('show.bs.expandSelected', function(){
//     $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
//   }).on('hide.bs.expandSelected', function(){
//     $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
//   });
// });
