import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from "jquery";
import 'datatables.net';
import 'datatables.net-dt';
import 'angular-datatables';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  data:any;
  name: string;
  status=false;
  public details: Object;
  msg: string;
  idvalue: any;
  token
  del:number; 
  data1;
  details1
  
  val: any;
  status1= false;
  
  constructor(private ht:HttpClient) { 
  // pageActual:number=1;
  }
  
  
  ngOnInit()
  {
  
  this.token=localStorage.getItem("token")
  this.ht.get("http://192.168.1.137:8087/rpo/rest/services",{
  headers:{
  "X-Access-Token":this.token
  }
  }).subscribe(resp=>{console.log(resp)
  this.data=resp;
  this.details=this.data.result
  if (resp) {
    $(document).ready(function () {
      $('#tableService').DataTable({
        responsive: true,
      });
    });
  }
  })
  
  }
  
  
  edit(){
  this.name=window.prompt("Edit service model");
  
  
  
  }
  
  delete(c){
  
  this.ht.delete("http://192.168.1.137:8087/rpo/rest/services/"+c.id,{
  
  headers:{
  "X-Access-Token":this.token
  }
  }
  )
 .subscribe(resp=>{
 // resp= null
  console.log(resp)
  if(resp)
  {
  this.ht.get("http://192.168.1.137:8087/rpo/rest/services",{
  headers:{
  "X-Access-Token":this.token
  }
  }).subscribe(resp=>{ console.log(resp); this.data=resp;
  this.details=this.data.result});
  }
  })
  }
 
 
  
  
  addfn()
  {
  this.status=true; 
  }
 
 
  
 savefn(input){
  this.status1=true
  console.log(input)
 this.status=false;
 this.ht.post("http://192.168.1.137:8087/rpo/rest/services",input,{
  headers:{
  "X-Access-Token":this.token
  }
 })
 .subscribe(resp=>{
  console.log(resp)
  if(resp)
  {
  this.ht.get("http://192.168.1.137:8087/rpo/rest/services",{
  headers:{
  "X-Access-Token":this.token
  }
  }).subscribe(resp=>{ console.log(resp); this.data=resp;
  this.details=this.data.result});
  }
  })
  
  }
  
 id(i){
  
 this.idvalue=i;
  
 }
  
 editfn(right){
 this.val=right
 console.log(this.val);
 console.log(this.idvalue);
  this.ht.post("http://192.168.1.137:8087/rpo/rest/services",this.val,
  {
  headers:{
  "X-Access-Token":this.token
  }
  }
  )
 .subscribe(resp=>{
  console.log(resp)
  if(resp)
  {
  this.ht.get("http://192.168.1.137:8087/rpo/rest/services",{
  headers:{
  "X-Access-Token":this.token
  }
  }).subscribe(resp=>{ console.log(resp); this.data=resp;
  this.details=this.data.result
  this.ngOnInit();
 });
  }
 // window.alert("successfully updated");
  })
  
 }
}

