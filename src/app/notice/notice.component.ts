import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import 'angular-datatables';


import jsPDF from 'jspdf';
 import 'jspdf-autotable';
 import { FormControl } from '@angular/forms';
import { ExcelService } from '../excel.service';
import {environment} from '../../environments/environment';
@Component({
selector: 'app-notice',
templateUrl: './notice.component.html',
styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  rpo_url =  `${environment.serviceUrl}`;
  token;
  Result
  data;
  table_heading_key:any;
  table_heading:any;

  field_select=new FormControl();
  ipp:any=10
  
  status1:boolean=true
  tabledata;
  status=false
  modelvalue:String
  idvalue: Number;
  modelobj: any
  cer1: false;
  idtospace: any;
  constructor(private r:Router,private ht:HttpClient,private excel: ExcelService){

  }
  ngOnInit(){
    this.token = localStorage.getItem("token")
    this.ht.get(this.rpo_url+"/noticePeriod", {
        headers: {
        'X-Access-Token': this.token,
      //  'Content-Type': 'application/json'
         }
         }
         ).subscribe(resC => {
          console.log(resC)
          this.Result =resC
          this.data = this.Result.result;
          console.log(this.data)
          this.table_heading_key=Object.keys(this.data[0])
          this.table_heading_key=this.table_heading_key.filter(s => s!= "date")
          console.log(this.table_heading_key)
          this.tabledata = this.data.result
        })

         
        

  }
  tospace(id){
      this.idtospace=id;
      }
    
cer2(){
  this.cer1= false;
}

 
  id(e){
         this.modelvalue=e.noticePeriod;
         this.idvalue=e.id;
         }


         update(e) {
        
          this.modelobj={
            "id":this.idvalue,
            "noticePeriod":e.noticePeriod
          }
         
          console.log(this.modelobj)
          this.ht.post(this.rpo_url+"/noticePeriod/"+this.idvalue, this.modelobj,
            {
              headers: {
                "X-Access-Token": this.token
              }
            })
            .subscribe(resp => {
              console.log(resp)
              if (resp) {
                this.ht.get(this.rpo_url+"/noticePeriod/")
                
                  .subscribe(resp => {
      
                    
                    this.tabledata = resp;
                    console.log(resp);
                    this.ngOnInit();
                  });
              }
      
             
            }
      
            );
        }
        addNotice(){
     
              this.r.navigate(['home/addnotice']);
               }
        downloadpdf(){
          const doc = new jsPDF();
          doc.autoTable({html: '#tab',theme:'striped'});
          doc.save('NoticePeriod.pdf');
        
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
   
// svalue;
// modelvalue;
 
// tabledata;
// token;
// notprd;
// modelobj;
// id;


// table_heading_key:any;
// table_heading:any;
// Result
// field_select=new FormControl();
// ipp:any=10
// search:any
// status1:any=true
// constructor(private s:ServiceService,private r:Router,private ht:HttpClient,private excel: ExcelService) { 
 
// // this.ht.get(this.rpo_url+"/noticePeriod").subscribe(res => { console.log(res)
// // this.tabledata = res;

// }
 
// ngOnInit() {
//     this.token=localStorage.getItem('token');
//     this.s.noticeget(this.token).subscribe(res=>{console.log(res)
//       this.Result=res
//     this.notprd=this.Result.result;
//     console.log(this.notprd)
//       this.table_heading_key=Object.keys(this.notprd[0])
//       this.table_heading_key=this.table_heading_key.filter(s => s!= "date")
//       console.log(this.table_heading_key)
//     this.tabledata=this.notprd.result;
    
     
//      })
//      }
//     modelmethod(e){
//     this.modelvalue=e.noticePeriod;
//     this.id=e.id;
//      }
//     addroute(){
     
//     this.r.navigate(['home/addnotice']);
//      }
//     status;
//     update(e){
//     this.modelobj={'id':this.id,'noticePeriod':e}
//     this.s.noticeedit(this.modelobj ).subscribe(res=>{
//     //alert("edited success, refresh to see updated table")
    
//         this.s.noticeget(this.token).subscribe(resp=>{
//             this.notprd=res;
//             this.tabledata=this.notprd.result;
//         })
   
//     //window.location.reload();
// });

    

// }















 