import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'datatables.net';
import 'datatables.net-dt';
import 'angular-datatables';

// export interface PeriodicElement {

//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {


  token;
  data;
  details: any;
  status: boolean;
  modelvalue: String;
  idvalue: Number;

  constructor(private ht: HttpClient) {
  }




  ngOnInit() {


    this.token = localStorage.getItem("token");

    this.ht.get("http://192.168.1.137:8087/rpo/rest/designation/", {
      headers: {
        "X-Access-Token": this.token
      }
    }).subscribe(resp => {
      console.log(resp);
      this.data = resp;
      this.details = this.data.result;
      if (resp) {
        $(document).ready(function () {
          $('#table1').DataTable({
            responsive: true,
            "order": [[0, "desc"]],
          });
        });
      }
    })
  }



  addfn() {
    this.status = true;
  }



  id(i) {
    this.modelvalue = i.designation;
    this.idvalue = i.id;

  }

  editfn(ud) {

    var val = ud;
    this.ht.post("http://192.168.1.137:8087/rpo/rest/designation/" + this.idvalue, val,
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
          this.ht.get("http://192.168.1.137:8087/rpo/rest/designation",
            {
              headers:
              {
                "X-Access-Token": this.token
              }
            }
          ).subscribe(resp => {
            console.log(resp);
            this.data = resp;
            this.details = this.data.result;
          });
        }
      
      }
      );


  }
}

