import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from "jquery";
import 'datatables.net';
 import 'datatables.net-dt';
 import 'angular-datatables';

@Component({
  selector: 'app-modeof-interview',
  templateUrl: './modeof-interview.component.html',
  styleUrls: ['./modeof-interview.component.css']
})
export class ModeofInterviewComponent implements OnInit {

  token;
  data;
  tablemoi: any;
  status: boolean;
  modelvalue1:String;
  idvalue: Number;
  
 
  

  constructor(private b: Router, private ht: HttpClient) { }

  ngOnInit() {
    
    this.token = localStorage.getItem("token")
    this.ht.get("http://192.168.1.137:8087/rpo/rest/modeofInterview/", {
      headers: {
        "X-Access-Token": this.token
      }
    }).subscribe(resM => {
      console.log(resM)
      this.data = resM;
      this.tablemoi = this.data.result;
      if (resM) {
        $(document).ready(function () {
         $('#tablemoi').DataTable({
            responsive: true,
            "order": [[0, "asc"]],
            
            // 'paging': false,
            // 'lengthChange': true,
            // 'searching': true,
            // 'ordering': true,
            // 'info': false,
            // 'autoWidth': true 
            
          });
        });
      }
    })

  }



  add() {
    this.b.navigate(['home/modeSub'])

  }

  
  addfn() {
    this.status = true;

  }

  id(i) {
    this.modelvalue1 = i.modeofInterview;
    this.idvalue = i.id;
  }


  editfn(ud) {
    
    var obj={
      "modeofInterview":ud.modeofInterview
    }
    this.ht.post("http://192.168.1.137:8087/rpo/rest/modeofInterview/"+this.idvalue, obj,
      {
        headers: {
          "X-Access-Token": this.token
        }
      })
      .subscribe(resp => {
        console.log(resp)
        if (resp) {
          this.ht.get("http://192.168.1.137:8087/rpo/rest/modeofInterview/",
          {
            headers:
            {
              "X-Access-Token": this.token
            }
          }
          )
            .subscribe(resp => {
              console.log(resp);
              this.data = resp;
              this.tablemoi= this.data.result;
            });
        }
      }
      );
    }
}



