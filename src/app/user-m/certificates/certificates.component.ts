import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'datatables.net';
 import 'datatables.net-dt';
 import 'angular-datatables';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

 
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

  constructor(private ht: HttpClient) { }

  
  ngOnInit() {

    this.token = localStorage.getItem("token")
    this.ht.get("http://192.168.1.137:8087/rpo/rest/certificates", {
      headers: {
        "X-Access-Token": this.token,
        'Content-Type': 'application/json'
      }
    }).subscribe(resC => {
      console.log(resC)
      this.data = resC;
      this.details = this.data.result


      if (resC) {
 
        $(document).ready(function () {
         $('#tablecer').DataTable({
            responsive: true,
            
            // 'paging': false,
            // 'lengthChange': true,
            // 'searching': true,
             //'ordering': false,
            // 'info': false,
            // 'autoWidth': true 
            
          });
        });
      }
    })
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
    this.ht.post("http://192.168.1.137:8087/rpo/rest/certificates", input, {
      headers: {
        "X-Access-Token": this.token,
        'Content-Type': 'application/json'
      }
    })
      .subscribe(resp => {
        console.log(resp)
        if (resp) {
          this.ht.get("http://192.168.1.137:8087/rpo/rest/certificates", {
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
    
    this.ht.post("http://192.168.1.137:8087/rpo/rest/certificates/" + this.idvalue, this.modl,
      {
        headers: {
          "X-Access-Token": this.token
        }
      })
      .subscribe(resp => {
        console.log(resp)
        if (resp) {
          this.ht.get("http://192.168.1.137:8087/rpo/rest/certificates/")
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
    this.idvalue = i;
  }
}
