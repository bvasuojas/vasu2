import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as $ from "jquery";
// import 'datatables.net';
// import 'datatables.net-dt';
// import 'angular-datatables';
import 'angular-datatables';
 import jsPDF from 'jspdf';
 import 'jspdf-autotable';
 import { FormControl } from '@angular/forms';
import { ExcelService } from '../excel.service';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';
@Component({
    selector: 'app-qualification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
    rpo_url =  `${environment.serviceUrl}`;
    data: any;
    name: string;
    status = false;
    details: Object;
    msg: string;
    idvalue: any;
    token: string;
    alertm: boolean = false;
    table_heading_key:any;
    table_heading:any;
    Result1
    field_select=new FormControl();
    ipp:any=10
    search:any
    modelvalue
    status1:any=true
    constructor(private ht: HttpClient,private r:Router,private excel: ExcelService) { }
    pageActual: number = 1;
    ngOnInit() {
        this.token = localStorage.getItem("token")
        this.ht.get(this.rpo_url+"/Qualification", {
            headers: {
                "X-Access-Token": this.token
            }
        }).subscribe(resp => {
            console.log(resp);
            this.Result1 =resp
            this.data = this.Result1.result;
            console.log(this.data)
            this.table_heading_key=Object.keys(this.data[0])
            this.table_heading_key=this.table_heading_key.filter(s => s!= "date")
            console.log(this.table_heading_key)

            this.details = this.data.result


        
          


        }
        );

    }

    addfn() {
        this.status = true;
    }

    addroute(){
     
        this.r.navigate(['home/addquali']);
         }

    savefn(input) {
        this.status = false;
        this.alertm = true;
        this.ht.post(this.rpo_url+"/Qualification/", input, {
            headers: {
                "X-Access-Token": this.token
            }
        }).subscribe(resp => {
            console.log(resp)
            if (resp) {
                this.ht.get(this.rpo_url+"/Qualification/", {
                    headers: {
                        "X-Access-Token": this.token
                    }
                }).subscribe(resp => {
                    console.log(resp);
                    this.data = resp;
                    this.details = this.data.result
                });
            }
        })
    }
modll
    editfn(ud) {
        this.alertm = true;
        this.modll = {
            "id": this.idvalue,
            "qualificationName": ud.qualificationName
          }
        this.ht.post(this.rpo_url+"/Qualification/" + this.idvalue,this.modll, {
            headers: {
                "X-Access-Token": this.token
            }
        }).subscribe(resp => {
            console.log(resp)
            if (resp) {
                this.ht.get(this.rpo_url+"/Qualification/").subscribe(resp => {
                   
                    this.details = resp
                    console.log(resp);
                    this.ngOnInit();
                });

            }
        }
        )

    }


    delete(c) {

        this.ht.delete(this.rpo_url+"/Qualification/" + c, {
            headers: {
                "X-Access-Token": this.token
            }
        }).subscribe(resp => {
            console.log(resp);


            if (resp) {
                this.ht.get(this.rpo_url+"/Qualification/", {
                    headers: {
                        "X-Access-Token": this.token
                    }
                }).subscribe(resp => {
                    console.log(resp); this.data = resp;
                    this.details = this.data.result
                });
            }
        }
        )
    }




    id(i) {

        this.idvalue = i.id;
        this.modelvalue=i.qualificationName

    }
    alert() {
        this.alertm = false
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
