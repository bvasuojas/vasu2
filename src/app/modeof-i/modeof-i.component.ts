import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

 import 'angular-datatables';
 import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormControl } from '@angular/forms';
import { ExcelService } from '../excel.service';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-modeof-i',
  templateUrl: './modeof-i.component.html',
  styleUrls: ['./modeof-i.component.css']
})
export class ModeofIComponent implements OnInit {
  rpo_url =  `${environment.serviceUrl}`;
  token;
  data;
  tablemoi: any;
  status: boolean= false;
  modelvalue1:String;
  idvalue: Number;
  status1: boolean=true;
  
  table_heading: any;
  field_select=new FormControl();
  table_heading_key: any;
  cer1: boolean;
  modl: any;
  ipp:any=10
  details;
  
 
  

  constructor(private b: Router, private ht: HttpClient,private excel: ExcelService) { }

  ngOnInit() {

  this.token = localStorage.getItem("token")
  this.ht.get(this.rpo_url+"/modeofInterview", {
    headers: {
      "X-Access-Token": this.token
      
    }
  }).subscribe(resM => {
    console.log(resM)
    this.data = resM;
    this.details = this.data.result;
    console.log(this.details)
    this.table_heading_key=Object.keys(this.details[0])
    this.table_heading_key=this.table_heading_key.filter(s => s!= "date")
    console.log(this.table_heading_key)
    this.details = this.data.result;
   
  })
 }
  
 cer2(){
  //this.cer1= false;
}
  add() {
    this.b.navigate(['home/modeSub'])

  }

  
  addfn() {
    this.status = true;

  }
  savefn(input) {
   // this.cer1=true;
    console.log(input)
    this.status = false;
    this.ht.post(this.rpo_url+"/modeofInterview", input, {
      headers: {
        "X-Access-Token": this.token,
        'Content-Type': 'application/json'
      }
    })
      .subscribe(resp => {
        console.log(resp)
        if (resp) {
          this.ht.get(this.rpo_url+"/modeofInterview", {
            headers: {
              "X-Access-Token": this.token,
              'Content-Type': 'application/json'
            }
          }).subscribe(resp => {
           
            this.ngOnInit();
          });
        }
        
      })
    
  }

  id(i) {
    this.modelvalue1 = i.modeofInterview;
    this.idvalue = i.id;
  }


  editfn(ud) {
    
    var obj={
      "id":this.idvalue,
      "modeofInterview":ud.modeofInterview
    }
   
    this.ht.post(this.rpo_url+"/modeofInterview/"+this.idvalue, obj,
      {
        headers: {
          "X-Access-Token": this.token
        }
      })
      .subscribe(resp => {
        console.log(resp)
        if (resp) {
          this.ht.get(this.rpo_url+"/modeofInterview/",
          {
            headers:
            {
              "X-Access-Token": this.token
            }
          }
          )
            .subscribe(resp => {
         
              this.tablemoi = resp;
         
              console.log(resp);
              this.ngOnInit();
          
            });
        }
      }
      );
    }



  downloadpdf(){
    const doc = new jsPDF();
    doc.autoTable({html: '#tablemo',theme:'striped'});
    doc.save('ModeofInterview.pdf');
  
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
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import * as $ from "jquery";
// import 'datatables.net';
//  import 'datatables.net-dt';
//  import 'angular-datatables';
//  import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { ExcelService } from '../excel.service';


// @Component({
//   selector: 'app-modeof-i',
//   templateUrl: './modeof-i.component.html',
//   styleUrls: ['./modeof-i.component.css']
// })
// export class ModeofIComponent implements OnInit {
//   token;
//   data;
//   tablemoi: any;
//   status: boolean;
//   modelvalue1:String;
//   idvalue: Number;
  
 
  

//   constructor(private b: Router, private ht: HttpClient,private excel: ExcelService) { }

//   ngOnInit() {
//     this.get();
   

//   }

//  get(){
//   this.token = localStorage.getItem("token")
//   this.ht.get("http://192.168.1.137:8089/rpo/rest/modeofInterview/", {
//     headers: {
//       "X-Access-Token": this.token
//     }
//   }).subscribe(resM => {
//     console.log(resM)
//     this.data = resM;
//     this.tablemoi = this.data.result;
//     if (resM) {
//       $(document).ready(function () {
//        $('#tablemo').DataTable({
//           responsive: true,
//           "order": [[0, "asc"]],


          
//           // 'paging': true,
//           // 'lengthChange': true,
//           // 'searching': true,
//           //  'ordering': true,
//           // 'info': true,
//           // 'autoWidth': true 
          
//         });
//       });
//     }
   
//   })
//  }

//   add() {
//     this.b.navigate(['home/modeSub'])

//   }

  
//   addfn() {
//     this.status = true;

//   }

//   id(i) {
//     this.modelvalue1 = i.modeofInterview;
//     this.idvalue = i.id;
//   }


//   editfn(ud) {
    
//     var obj={
//       "modeofInterview":ud.modeofInterview
//     }
//     this.ht.post("http://192.168.1.137:8089/rpo/rest/modeofInterview/"+this.idvalue, obj,
//       {
//         headers: {
//           "X-Access-Token": this.token
//         }
//       })
//       .subscribe(resp => {
//         console.log(resp)
//         if (resp) {
//           this.ht.get("http://192.168.1.137:8089/rpo/rest/modeofInterview/",
//           {
//             headers:
//             {
//               "X-Access-Token": this.token
//             }
//           }
//           )
//             .subscribe(resp => {
//               console.log(resp);
//               this.data = resp;
//               this.tablemoi= this.data.result;
//               console.log(this.tablemoi);
          
//             });
//         }
//       }
//       );
//     }

//   downloadpdf(){
//     const doc = new jsPDF();
//     doc.autoTable({html: '#tablemo',theme:'striped'});
//     doc.save('ModeofInterview.pdf');
  
//   }
//   downloadExcel(){
//     this.excel.exportAsExcelFile(this.tablemoi, 'sample');
//   }

// }



