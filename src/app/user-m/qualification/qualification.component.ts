import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as $ from "jquery";
// import 'datatables.net';
// import 'datatables.net-dt';
// import 'angular-datatables';
@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  data: any;
  name: string;
  status = false;
  details: Object;
  msg: string;
  idvalue: any;
  token: string;
  alertm: boolean = false;

  constructor(private ht: HttpClient) { }
  pageActual: number = 1;
  ngOnInit() {
      this.token = localStorage.getItem("token")
      this.ht.get("http://192.168.1.137:8087/rpo/rest/Qualification", {
          headers: {
              "X-Access-Token": this.token
          }
      }).subscribe(resp => {
          console.log(resp);
          this.data = resp;
          this.details = this.data.result
          //  if (resp) {
          //     $(document).ready(function () {
          //       $('#table').DataTable({
          //         responsive: true,
          //       });
          //     });
          //   }

          this.msg = "successfully retrieved";


      }, err => {
          console.log(err);
          this.msg = "please retry....not able to hit API";
      }, () => console.log("success")
      );

  }

  addfn() {
      this.status = true;
  }



  savefn(input) {
      this.status = false;
      this.alertm = true;
      this.ht.post("http://192.168.1.137:8087/rpo/rest/Qualification/", input, {
          headers: {
              "X-Access-Token": this.token
          }
      }).subscribe(resp => {
          console.log(resp)
          if (resp) {
              this.ht.get("http://192.168.1.137:8087/rpo/rest/Qualification/", {
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

  editfn(ud) {
      this.alertm = true;
      var val = ud;
      this.ht.post("http://192.168.1.137:8087/rpo/rest/Qualification/" + this.idvalue, val, {
          headers: {
              "X-Access-Token": this.token
          }
      }).subscribe(resp => {
          console.log(resp)
          if (resp) {
              this.ht.get("http://192.168.1.137:8087/rpo/rest/Qualification/", {
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


  delete(c) {

      this.ht.delete("http://192.168.1.137:8087/rpo/rest/Qualification/" + c, {
          headers: {
              "X-Access-Token": this.token
          }
      }).subscribe(resp => {
          console.log(resp);


          if (resp) {
              this.ht.get("http://192.168.1.137:8087/rpo/rest/Qualification/", {
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

      this.idvalue = i;

  }
  alert() {
      this.alertm = false
  }



}
