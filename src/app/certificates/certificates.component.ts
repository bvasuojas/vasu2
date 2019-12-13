import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import 'angular-datatables';
 import jsPDF from 'jspdf';
 import 'jspdf-autotable';
 import { FormControl } from '@angular/forms';
import { ExcelService } from '../excel.service';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
 
  rpo_url =  `${environment.serviceUrl}`;
   
  cer1=false;
  data: any;
  modelvalue;
  name: string;
  status = false;
  public details: Object;
  msg: string;
  idvalue: any;
  token;
  modl;
  table_heading_key:any;
  table_heading:any;
  Result
  field_select=new FormControl();
  ipp:any=10
  search:any
  status1:any=true
  constructor(private r:Router,private ht: HttpClient,private excel: ExcelService) { }

  
  ngOnInit() {

    this.token = localStorage.getItem("token")
    this.ht.get(this.rpo_url+"/certificates", {
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


  addcertificate(){
    this.r.navigate(['/home/addcertificate']);
  }
  
cer2(){
  this.cer1= false;
}


  addfn() {
    this.status = true;
  }


  savefn(input) {
    this.cer1=true;
    console.log(input)
    this.status = false;
    this.ht.post(this.rpo_url+"/certificates", input, {
      headers: {
        "X-Access-Token": this.token,
        'Content-Type': 'application/json'
      }
    })
      .subscribe(resp => {
        console.log(resp)
        if (resp) {
          this.ht.get(this.rpo_url+"/certificates", {
            headers: {
              "X-Access-Token": this.token,
              'Content-Type': 'application/json'
            }
          }).subscribe(resp => {
            console.log(resp); this.data = resp;
            this.details = this.data.result
            this.ngOnInit();
          });
        }
        
      })
    
  }




  editfn(ud) {
    this.cer1=true;
   
    this.modl = {
      "id": this.idvalue,
      "certificationName": ud.certificationName
    }
    console.log(this.modl)
    this.ht.post(this.rpo_url+"/certificates/" + this.idvalue, this.modl,
      {
        headers: {
          "X-Access-Token": this.token
        }
      })
      .subscribe(resp => {
        console.log(resp)
        if (resp) {
          this.ht.get(this.rpo_url+"/certificates/")
            .subscribe(resp => {

              
              this.details = resp;
              console.log(resp);
              this.ngOnInit();
            });
        }

       
      }

      )
  }

  id(i) {
    this.modelvalue = i.certificationName
    this.idvalue = i.id;
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
