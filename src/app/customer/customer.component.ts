import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'angular-datatables';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormControl } from '@angular/forms';
import { ExcelService } from '../excel.service';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

token
ipp:any=10
search:any
status1:any=true
Result
data
modelvalue
status = false;
table_heading_key:any;
  table_heading:any;
  public details: Object;
  field_select=new FormControl();
rpo_url =  `${environment.serviceUrl}`;
  idvalue1: any;
  commissionRate: any;
  modalobj;
 
 constructor(private r:Router,private ht: HttpClient,private excel: ExcelService) { }
 ngOnInit() {

  this.token = localStorage.getItem("token")
  this.ht.get(this.rpo_url+"/customerType", {
    headers: {
      "X-Access-Token": this.token,
      'Content-Type': 'application/json'
    }
  }).subscribe(resC => {
    console.log(resC)
    this.Result =resC
    this.data = this.Result.result;
    console.log(this.data)
    this.table_heading_key=Object.keys(this.data[0])
    this.table_heading_key=this.table_heading_key.filter(s => s!= "date")
    console.log(this.table_heading_key)
    this.details = this.data.result
  })
}


// id(e){
//   this.modelvalue=e.amount;
//   this.idvalue1=e.id;
//   console.log(this.modelvalue)
//   }



 fn(){
 this.r.navigate(["home/addo"]);
 }

 her;

 
 
 
  modelmethod(e){
 
 this.modelvalue=e.amount;
 this.her=e;
 this.idvalue1= e.id;
 }




 updatefn(e){
   var modalobj={'id':this.idvalue1,'amount':e.amount,'commissionRate':this.her.commissionRate,'customerType':this.her.customerType,'dropdown1':this.her.dropdown1,'dropdown2':this.her.dropdown2}
 console.log(this.modalobj);
  // var obj={
  //   "id":this.idvalue1,
  //   "amount":e.amount,
  //   "commissionRate":this.commissionRate
  // }
   
    this.ht.post(this.rpo_url+"/customerType/" +this.idvalue1, modalobj,  {
      headers: {
        "X-Access-Token": this.token
      }
    })
    .subscribe(resp => {
      console.log(resp)
      if (resp) {
        this.ht.get(this.rpo_url+"/customerType"
        ).subscribe(resp => {
          this.ngOnInit();
        });
      }
      
    })
  }
  
 downloadpdf(){
    const doc = new jsPDF();
    doc.autoTable({html: '#tab',theme:'striped'});
    doc.save('Joblocation.pdf');
  
  }
  downloadExcel(){
    this.excel.exportAsExcelFile(this.data, 'sample');
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
//  token;
//  tabledata;
//  id;
//  cusget;
//  hold;
//  cust
//  modalobj;

//  table_heading_key:any;
//   table_heading:any
//   status:any=false
//   field_select=new FormControl();
//   ipp:any=10
//   search:any
//   status1:any=true
//  ngOnInit() {
//  this.token=localStorage.getItem('token');
//  this.s.cusget(this.token).subscribe(res=>{console.log(res)
//  this.cust=res;
//  this.hold= this.cust.result;
//  this.table_heading_key=Object.keys(this.hold[0])
//  this.table_heading_key=this.table_heading_key.filter(s => s!= "date")
//  console.log(this.table_heading_key)

//  this.tabledata=this.hold.result;
//  })


 
//  }
//  her;
//  fn(){
//  this.r.navigate(["home/addo"]);
//  }
//  modelmethod(e){
//  console.log(e);
//  this.amount=e.amount;
//  this.her=e;
//  this.id = e.id;
//  }
//  uppit(e){
//  console.log(e);
//  this.modalobj={'id':this.id,'amount':e,'commissionRate':this.her.commissionRate,'customerType':this.her.customerType,'dropdown1':this.her.dropdown1,'dropdown2':this.her.dropdown2}
//  console.log(this.modalobj);
//  this.s.fdit(this.modalobj).subscribe(res=>console.log(res));
//  window.location.reload();
//  //this.s.cusget(e).subscribe(res=>console.log(res));
//  }

//  downloadpdf(){
//   const doc = new jsPDF();
//   doc.autoTable({html: '#tab',theme:'striped'});
//   doc.save('Joblocation.pdf');

// }
// downloadExcel(){
//   this.excel.exportAsExcelFile(this.hold, 'sample');
// }

// selected_fields(){
//   this.status1=false
//   console.log(this.field_select.value)
//   this.table_heading=this.field_select.value
//   this.status=true
//   if(this.field_select.value.length==0){
//     this.status=false
//     this.status1=true
//   }
// }








// import { Component, OnInit } from '@angular/core';
// import { CusttypeService } from '../custtype.service';
// import { Router } from '@angular/router';
// import * as $ from "jquery";
// import 'datatables.net';
// import 'datatables.net-dt';
// import 'angular-datatables';


// @Component({
//   selector: 'app-customer',
//   templateUrl: './customer.component.html',
//   styleUrls: ['./customer.component.css']
// })
// export class CustomerComponent implements OnInit {

//   amount;
//  constructor(private r:Router,private s:CusttypeService) { }
//  token;
//  tabledata;
//  id;
//  cusget;
//  hold;
//  modalobj;
//  ngOnInit() {
//  this.token=localStorage.getItem('token');
//  this.s.cusget(this.token).subscribe(res=>{console.log(res)
//  this.hold=res;
//  this.tabledata=this.hold.result;
//  })


 
//  }
//  her;
//  fn(){
//  this.r.navigate(["home/addo"]);
//  }
//  modelmethod(e){
//  console.log(e);
//  this.amount=e.amount;
//  this.her=e;
//  this.id = e.id;
//  }
//  uppit(e){
//  console.log(e);
//  this.modalobj={'id':this.id,'amount':e,'commissionRate':this.her.commissionRate,
//'customerType':this.her.customerType,'dropdown1':this.her.dropdown1,'dropdown2':this.her.dropdown2}
//  console.log(this.modalobj);
//  this.s.fdit(this.modalobj).subscribe(res=>console.log(res));
//  window.location.reload();
//  //this.s.cusget(e).subscribe(res=>console.log(res));
//  }

// }
