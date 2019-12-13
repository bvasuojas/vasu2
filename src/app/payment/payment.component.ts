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
 selector: 'app-payment',
 templateUrl: './payment.component.html',
 styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rpo_url =  `${environment.serviceUrl}`;
data;
 details;
 details1;
 data1;
 status=false;
 token;
 idvalue:any;
 show1: boolean=true;
 modelvalue: any;
 status1:any=true
  table_heading_key:any;
  table_heading:any;
  ipp:any=10
  search:any
  field_select=new FormControl();
  rol
constructor(private ht:HttpClient,private route:Router,private excel: ExcelService) { }
pageActual:number=1;
ngOnInit()
{



 this.token=localStorage.getItem("token");
 
 this.ht.get(this.rpo_url+"/PaymentTerms",{
headers:{
"X-Access-Token":this.token
}
 }).subscribe(resp=>{console.log(resp);
 this.data=resp;

this.rol=resp;
this.data =this.rol.result;
console.log(this.data)
this.table_heading_key=Object.keys(this.data[0])
this.table_heading_key=this.table_heading_key.filter(s => s!= "date")
console.log(this.table_heading_key)
this.details=this.data.result;

})
 


}

f1(){
  this.route.navigate(['home/list'])

}
modla
 
 addfn()
 {
 this.status=true;
 }
 
 savefn(input){
 console.log(input)
 this.status=false;
 this.ht.post(this.rpo_url+"/PaymentTerms",input,{
 headers:{
 "X-Access-Token":this.token
 }
 })
 .subscribe(resp=>{
 console.log(resp)
 if(resp)
 {
 this.ht.get(this.rpo_url+"/PaymentTerms",{
 headers:{
 "X-Access-Token":this.token
 }
 }).subscribe(resp=>{ console.log(resp); this.data=resp;
 this.details=this.data.result});
 }
 }) 
 }
 
id(i){
 
this.idvalue=i.id;
this.modelvalue = i.paymentType;
}
 
editfn(ud){
 
  this.modla = {
    "id": this.idvalue,
    "paymentType": ud.paymentType
  }
 this.ht.post(this.rpo_url+"/PaymentTerms/"+this.idvalue,this.modla,
 {
 headers:{
 "X-Access-Token":this.token
 }
 }).subscribe(resp=>{
 console.log(resp)
 if(resp)
 {
 this.ht.get(this.rpo_url+"/PaymentTerms/"
 ).subscribe(resp=>{
  
 this.data=resp;
 console.log(resp);
 this.ngOnInit();
 });
 }
 
 }
 )
 
 }




 
show(){
 this.show1=false;
 this.route.navigate(['home/list']);
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