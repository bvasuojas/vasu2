import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../jobservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from "jquery";
import 'datatables.net';
import 'datatables.net-dt';
import 'angular-datatables';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormControl } from '@angular/forms';
import { ExcelService } from '../excel.service';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-joblocation',
  templateUrl: './joblocation.component.html',
  styleUrls: ['./joblocation.component.css']
})
export class JoblocationComponent implements OnInit {
  rpo_url = `${environment.serviceUrl}`;
  tabledata(tabledata: any) {
    throw new Error("Method not implemented.");
  }



  constructor(private r: Router, private s: JobserviceService, private ht: HttpClient, private excel: ExcelService) {
    this.ht.get(this.rpo_url + "/skill").subscribe(res => {
      console.log(res)
      this.table = res
      console.log(this.table);

    }
    )
  }
  h: any = 600
  table;
  token;
  //done bye basha
  table_heading_key: any;
  table_heading: any
  status: any = false
  field_select = new FormControl();
  ipp: any = 10
  search: any
  status1: any = true
  ngOnInit() {
    // this.table=JSON.parse(localStorage.getItem('notice'));
    this.token = localStorage.getItem('token')

    this.s.noticeget(this.token).subscribe(resp => {
      console.log(resp)
      this.table = resp
      // edited by basha
      this.table_heading_key = Object.keys(this.table[0])
      this.table_heading_key = this.table_heading_key.filter(s => s != "date")
      console.log(this.table_heading_key)
      //end
      if (resp) {
        $('#tab').DataTable({
          responsive: true,
          "order": [[0, "asc"]],
          'paging': true,

        });


      }
    })



  }
  addroute() {

    this.r.navigate(['/home/add']);
  }

  downloadpdf() {
    const doc = new jsPDF();
    doc.autoTable({ html: '#tab', theme: 'striped' });
    doc.save('Joblocation.pdf');

  }
  downloadExcel() {
    this.excel.exportAsExcelFile(this.table, 'sample');
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
