import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'angular-datatables';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormControl } from '@angular/forms';
import { ExcelService } from '../excel.service';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  rpo_url =  `${environment.serviceUrl}`;
  details: any;
  val: any;

  idvalue: any;
  mod1;
  modelvalue: any;
  model: any;




tabledata(tabledata: any) {
  throw new Error("Method not implemented.");
}



constructor(private r: Router,private ht: HttpClient,private excel: ExcelService) {
  this.ht.get(this.rpo_url+"/services").subscribe(res => {
    console.log(res)
    this.table = res
    console.log(this.table);

  }
  )
}
h:any=600
table;
token;
tab
//done bye me
table_heading_key:any;
table_heading:any
status:any=false
field_select=new FormControl();
ipp:any=10
search:any
status1:any=true
ngOnInit() {
  
  this.token = localStorage.getItem('token')

  // this.s.noticeget(this.token).subscribe(resp => {

    this.ht.get(this.rpo_url+"/services",{
        headers:{
        "X-Access-Token":this.token
        }
        }).subscribe(res=>{console.log(res)
        this.tab=res;
        this.details=this.tab.result
        this.table_heading_key=Object.keys(this.details[0])
    this.table_heading_key=this.table_heading_key.filter(s => s!= "date")
    console.log(this.table_heading_key)
    this.details = this.table.result

       
        })
    
}
addservice(){
  this.r.navigate(['home/addservice'])
}


id(i){
  
  this.idvalue=i.id;
   this.model=i.serviceName
  }

  editfn(r){

   var mod1 = {
     "id": this.idvalue,
     "serviceName": r.serviceName
   }
    console.log(this.val);
    console.log(this.idvalue);
     this.ht.post(this.rpo_url+"/services/" + this.idvalue,mod1,
     {
     headers:{
     "X-Access-Token":this.token
     }
     })
    .subscribe(resp=>{
     console.log(resp)
     if(resp)
     {
     this.ht.get(this.rpo_url+"/services",
     {

     headers:{
     "X-Access-Token":this.token
     }
     }
     ).subscribe(resp=>{ 
     this.ngOnInit();
    });
     }
    // window.alert("successfully updated");
     }
     );
     
    }
 


// addroute() {

//   this.r.navigate(['/home/add']);
// }

downloadpdf(){
  const doc = new jsPDF();
  doc.autoTable({html: '#tab',theme:'striped'});
  doc.save('Joblocation.pdf');

}
downloadExcel(){
  this.excel.exportAsExcelFile(this.details, 'sample');
}

selected_fields(){
  this.status1=false
  console.log(this.field_select.value)
  this.table_heading=this.field_select.value
  this.status=true
  if(this.field_select.value.length==0){
    this.status=false
    this.status1=true
  }
}

}








// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import * as $ from "jquery";
// import 'datatables.net';
// import 'datatables.net-dt';
// import 'angular-datatables';
// @Component({
//   selector: 'app-services',
//   templateUrl: './services.component.html',
//   styleUrls: ['./services.component.css']
// })
// export class ServicesComponent implements OnInit {
//   data:any;
//   name: string;
//   status=false;
//   public details: Object;
//   msg: string;
//   idvalue: any;
//   token
//   del:number; 
//   data1;
//   details1
  
//   val: any;
//   status1= false;
  
//   constructor(private ht:HttpClient) { 
//   // pageActual:number=1;
//   }
  
  
//   ngOnInit()
//   {
  
//   this.token=localStorage.getItem("token")
//   this.ht.get("http://192.168.1.137:8089/rpo/rest/services",{
//   headers:{
//   "X-Access-Token":this.token
//   }
//   }).subscribe(resp=>{console.log(resp)
//   this.data=resp;
//   this.details=this.data.result
//   if (resp) {
//     $(document).ready(function () {
//       $('#tableService').DataTable({
//         responsive: true,
//       });
//     });
//   }
//   })
  
//   }
  
  
//   edit(){
//   this.name=window.prompt("Edit service model");
  
  
  
//   }
  
//   delete(c){
  
//   this.ht.delete("http://192.168.1.137:8089/rpo/rest/services/"+c.id,{
  
//   headers:{
//   "X-Access-Token":this.token
//   }
//   }
//   )
//  .subscribe(resp=>{
//  // resp= null
//   console.log(resp)
//   if(resp)
//   {
//   this.ht.get("http://192.168.1.137:8089/rpo/rest/services",{
//   headers:{
//   "X-Access-Token":this.token
//   }
//   }).subscribe(resp=>{ console.log(resp); this.data=resp;
//   this.details=this.data.result});
//   }
//   })
//   }
 
 
  
  
//   addfn()
//   {
//   this.status=true; 
//   }
 
 
  
//  savefn(input){
//   this.status1=true
//   console.log(input)
//  this.status=false;
//  this.ht.post("http://192.168.1.137:8089/rpo/rest/services",input,{
//   headers:{
//   "X-Access-Token":this.token
//   }
//  })
//  .subscribe(resp=>{
//   console.log(resp)
//   if(resp)
//   {
//   this.ht.get("http://192.168.1.137:8089/rpo/rest/services",{
//   headers:{
//   "X-Access-Token":this.token
//   }
//   }).subscribe(resp=>{ console.log(resp); this.data=resp;
//   this.details=this.data.result});
//   }
//   })
  
//   }
  
//  id(i){
  
//  this.idvalue=i;
  
//  }
  
//  editfn(right){
//  this.val=right
//  console.log(this.val);
//  console.log(this.idvalue);
//   this.ht.post("http://192.168.1.137:8089/rpo/rest/services",this.val,
//   {
//   headers:{
//   "X-Access-Token":this.token
//   }
//   }
//   )
//  .subscribe(resp=>{
//   console.log(resp)
//   if(resp)
//   {
//   this.ht.get("http://192.168.1.137:8089/rpo/rest/services",{
//   headers:{
//   "X-Access-Token":this.token
//   }
//   }).subscribe(resp=>{ console.log(resp); this.data=resp;
//   this.details=this.data.result
//   this.ngOnInit();
//  });
//   }
//  // window.alert("successfully updated");
//   })
  
//  }
// }
