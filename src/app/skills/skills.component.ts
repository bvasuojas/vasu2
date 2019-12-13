import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { SkillserviceService } from '../skillservice.service';

import 'angular-datatables';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormControl } from '@angular/forms';
import { ExcelService } from '../excel.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  Skilltype: string;
  Skilltype1: string;
  id1: any;
  payyyy: any;
  Result: any;

  constructor(private r: Router, private ht: HttpClient, private s: SkillserviceService,private excel: ExcelService) {
    
    this.getdata();
  }
  skilln;
  skillt;
  arr;
  ;
  ta;
  skif;
  tt;
  fl;
  flag
  arr1 = [];
  arr2 = [];
  objedir = {
    "skillName": this.skilln,
    "flag": this.skif
  };
  table_heading_key:any;
  table_heading:any
  status:any=false
  field_select=new FormControl();
  ipp:any=10
  search:any
  status1:any=true
  hold
  ngOnInit() {

    

    this.tt = localStorage.getItem('token');


    this.getdata();

  }
  getdata() {
    this.s.tabledata(this.tt).subscribe(res => {
      console.log(res, "gggggg")
      this.Result =res
    
      this.arr = this.Result.result;

      console.log(this.arr)
      this.table_heading_key=Object.keys(this.arr[0])
      this.table_heading_key=this.table_heading_key.filter(s => s!= "date")
      console.log(this.table_heading_key)




      this.ta = this.arr.result;
      
      for (let i = 0; i < this.ta.length; i++) {
        // if(this.ta[i].flag === true){
        //   alert(this.Skilltype  = "primary")
        // this.Skilltype  = "primary";
        // }
        // else{
        //   alert(this.Skilltype  = "secondary")
        //   this.Skilltype  = "secondary";
        // }

        if (this.ta[i].flag == true) {

          console.log("skillname", this.ta);
          this.Skilltype  = "primary";
          this.arr1.push(
            {
              "id": this.ta[i].id,
              "skillName": this.ta[i].skillName,
              "Skilltype":  this.Skilltype 
            }
          );
        }
        else {
          this.Skilltype  = "secondary";
          this.arr1.push({
            "id": this.ta[i].id,
            "skillName": this.ta[i].skillName,
            "Skilltype":  this.Skilltype 
          });


          
        }
console.log(this.arr1)
      }

    });
  }

  cl() {
    this.r.navigate(['home/skilladd'])
  }
  EditofTable() {

  }
  edit(e) {
    console.log(e)
    this.id1 = e.id;
    // console.log(e.skillName)
    this.skilln = e.skillName;
    // console.log(e.Skilltype)
    this.skillt = e.Skilltype;
    this.flag=e.flag
    console.log(this.flag)




  }
  obj: {}





  update(a) {



    this.obj = {
      "id": this.id1,
      "skillName": a.skillName,
      "flag":this.flag
    }
    console.log(this.obj);

    this.s.tableupdate(this.obj).subscribe(res => {
      this.payyyy = res;
      console.log("hhhhhhhhh", res)
      if (this.payyyy) {
        this.getdata();
        // window.location.reload();
      }

    }


    )


  }
  skllType(){
alert(this.skllType);
  }




  downloadpdf(){
    const doc = new jsPDF();
    doc.autoTable({html: '#tab',theme:'striped'});
    doc.save('Joblocation.pdf');
  
  }
  downloadExcel(){
    this.excel.exportAsExcelFile(this.arr, 'sample');
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
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { ServiceService } from '../service.service';
// import { SkillserviceService } from '../skillservice.service';
// import * as $ from "jquery";
// import 'datatables.net';
// import 'datatables.net-dt';
// import 'angular-datatables';

// @Component({
//   selector: 'app-skills',
//   templateUrl: './skills.component.html',
//   styleUrls: ['./skills.component.css']
// })
// export class SkillsComponent implements OnInit {
//   Skilltype: string;
//   Skilltype1: string;
//   id1: any;
//   payyyy: any;

//   constructor(private r: Router, private ht: HttpClient, private s: SkillserviceService) {
    
//     this.getdata();
//   }
//   skilln;
//   skillt;
//   arr;
//   ;
//   ta;
//   skif;
//   tt;
//   fl;
//   arr1 = [];
//   arr2 = [];
//   objedir = {
//     "skillName": this.skilln,
//     "flag": this.skif
//   };
//   ;
//   ngOnInit() {

    

//     this.tt = localStorage.getItem('token');


//     this.getdata();

//   }
//   getdata() {
//     this.s.tabledata(this.tt).subscribe(res => {
//       console.log(res, "gggggg")

//       this.arr = res;

//       this.ta = this.arr.result;
      
//       for (let i = 0; i < this.ta.length; i++) {
//         // if(this.ta[i].flag === true){
//         //   alert(this.Skilltype  = "primary")
//         // this.Skilltype  = "primary";
//         // }
//         // else{
//         //   alert(this.Skilltype  = "secondary")
//         //   this.Skilltype  = "secondary";
//         // }

//         if (this.ta[i].flag == true) {

//           console.log("skillname", this.ta);
//           this.Skilltype  = "primary";
//           this.arr1.push(
//             {
//               "id": this.ta[i].id,
//               "skillName": this.ta[i].skillName,
//               "Skilltype":  this.Skilltype 
//             }
//           );
//         }
//         else {
//           this.Skilltype  = "secondary";
//           this.arr1.push({
//             "id": this.ta[i].id,
//             "skillName": this.ta[i].skillName,
//             "Skilltype":  this.Skilltype 
//           });


          
//         }
// console.log(this.arr1)
//       }

//     });
//   }

//   cl() {
//     this.r.navigate(['home/skilladd'])
//   }
//   EditofTable() {

//   }
//   edit(e) {
//     console.log(e.id)
//     this.id1 = e.id;
//     // console.log(e.skillName)
//     this.skilln = e.skillName;
//     // console.log(e.Skilltype)
//     this.skillt = e.Skilltype;
//     console.log(this.skillt)




//   }
//   obj: {}





//   update(a) {



//     this.obj = {
//       "id": this.id1,
//       "skillName": a.skillName,
//       "flag": a.flag
//     }
//     console.log(this.obj);

//     this.s.tableupdate(this.obj).subscribe(res => {
//       this.payyyy = res;
//       console.log("hhhhhhhhh", res)
//       if (this.payyyy) {
//         this.getdata();
//         // window.location.reload();
//       }

//     }


//     )


//   }


// }
