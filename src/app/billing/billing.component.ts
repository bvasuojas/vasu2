import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'angular-datatables';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormControl } from '@angular/forms';
import { ExcelService } from '../excel.service';


import {environment} from '../../environments/environment'
import { Router } from '@angular/router';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  rpo_url =  `${environment.serviceUrl}`;
  token
  rol
  data:any
  table_heading_key:any;
  table_heading:any;
  field_select=new FormControl();
  ipp:any=10
  search:any
  status1:any=true
  status = false;
  public details: Object;
  model
  id: any;
  // arr: Object;
  // status: boolean;
   dataa;
  

  constructor(private r: Router,private ht:HttpClient , private excel: ExcelService) { 

  }
  // tabledata;
  // p:number=1;

  ngOnInit() {
   

   this.token = localStorage.getItem("token");

this.ht.get(this.rpo_url+"/BillingModel", {
     headers: {
       "X-Access-Token": this.token
     }
   }).subscribe(resp => {
     console.log(resp);
      this.rol = resp;
     this.data = this.rol.result;
     console.log(this.data)
            this.table_heading_key = Object.keys(this.data[0])
     this.table_heading_key = this.table_heading_key.filter(s => s != "date")
console.log(this.table_heading_key)

     this.details = this.data.result;
    })
}

id1(i){
this.id=i.id
this.dataa=i.billingModel
}
edit(u)

{
  this.model={
    'id': this.id,
     'billingModel': u.billingModel
    }
    console.log(this.model)
    this.ht.post(this.rpo_url+"/BillingModel/" + this.id, this.model,
      {
        headers: {
          "X-Access-Token": this.token
        }
      })
      .subscribe(resp => {
        console.log(resp)
        if (resp) {
          this.ht.get(this.rpo_url+"/BillingModel/")
            .subscribe(resp => {

              
              this.details = resp;
              console.log(resp);
              this.ngOnInit();
            });
        }

       
      }

      )

}


//   token;
//   stat = false
//   dataa
//   id
//   totaldata
// details:any;

//   table_heading_key: any;
//   table_heading: any;
//   rol
//   field_select = new FormControl();
//   ipp: any = 10
//   search: any
//   status1: any = true
//   add2() {
//     this.stat = true;
//   }
//   add3(a){
//     this.stat=false
//     console.log(a);
//     localStorage.getItem('token')
//      this.pi.add1(a).subscribe(resp=>console.log(resp))
//      alert("Successfully added")
//   }
//   update(e) {
//     console.log(e)
//     this.dataa = e.billingModel;  
//     this.id = e.id
//   }
 
//   update1(e) {
//     console.log();
//     this.totaldata = {
//       'id': this.id,
//       'billingModel': e
//     }
//     this.pi.post(this.totaldata).subscribe(resp => console.log(resp))
//   }


//   id1
//   delete(e){
//     console.log(e)
//     this.id1=e.id
//     console.log(this.id1)
//      this.pi.del(this.id1).subscribe(resp=>console.log(resp))
//   }

addroute() {

  this.r.navigate(['/home/billadd']);

//   this.ht.get(this.rpo_url+"/BillingModel", {
//     headers: {
//       "X-Access-Token": this.token
//     }
//   }).subscribe(resp => {
//     console.log(resp);
//      this.rol = resp;
//     this.data = this.rol.result;
//     console.log(this.data)
//            this.table_heading_key = Object.keys(this.data[0])
//     this.table_heading_key = this.table_heading_key.filter(s => s != "date")
// console.log(this.table_heading_key)

//     this.details = this.data.result;
//    })
  // this.ngOnInit();
}
  downloadpdf() {
    const doc = new jsPDF();
    doc.autoTable({ html: '#tab', theme: 'striped' });
    doc.save('Joblocation.pdf');

  }
  downloadExcel() {
    this.excel.exportAsExcelFile(this.data, 'sample');
  }

  selected_fields() {
    this.status1 = false
    console.log(this.field_select.value)
    this.table_heading = this.field_select.value
    this.status = true
    if (this.field_select.value.length == 0) {
      this.status = false
      this.status1 = true
    }
  }

}
