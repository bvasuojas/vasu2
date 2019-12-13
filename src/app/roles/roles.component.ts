import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as $ from "jquery";
// import 'datatables.net';
// import 'datatables.net-dt';
import 'angular-datatables';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormControl } from '@angular/forms';
import { ExcelService } from '../excel.service';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';
export interface PeriodicElement {

  name: string;
  position: number;
  weight: number;
  symbol: string;

}


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {
  rpo_url =  `${environment.serviceUrl}`;

  token;
  data;
  details: any;
  status: boolean;
  modelvalue: String;
  idvalue: Number;
  table_heading_key: any;
  table_heading: any;
  rol
  field_select = new FormControl();
  ipp: any = 10
  search: any
  status1: any = true
  constructor(private ht: HttpClient,private r:Router, private excel: ExcelService) {
  }




  ngOnInit() {


    this.token = localStorage.getItem("token");

    this.ht.get(this.rpo_url+"/designation", {
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



  addfn() {
    this.status = true;
  }

mod

  id11(i) {
    this.modelvalue = i.designation;
    this.idvalue = i.id;

  }
  addroute(){
     
    this.r.navigate(['home/addrole']);
     }
  editfn(ud) {
    this.mod = {
      "id": this.idvalue,
      "designation": ud.designation
    }
 
    this.ht.post(this.rpo_url+"/designation/" + this.idvalue, this.mod,
      {
        headers:
        {
          "X-Access-Token": this.token
        }
      }
    )
      .subscribe(resp => {
        console.log(resp)
        if (resp) {
          this.ht.get(this.rpo_url+"/designation/")
           .subscribe(resp => {
           
            this.data = resp;
            console.log(resp);
            // this.details = this.data.result;
            this.ngOnInit();
          });
        }

      }
      );

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


