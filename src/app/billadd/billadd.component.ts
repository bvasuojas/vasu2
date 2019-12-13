import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-billadd',
  templateUrl: './billadd.component.html',
  styleUrls: ['./billadd.component.css']
})
export class BilladdComponent implements OnInit {
  rpo_url = `${environment.serviceUrl}`;
  token: string;
  rol;
  data: any;

  constructor(private router: Router, private ht: HttpClient) { }

  ngOnInit() {
    this.ht.get(this.rpo_url + "/BillingModel/").subscribe(resp => {
      console.log(resp)
      this.rol = resp;
      this.data = this.rol.result;
    });
  }


  addroute(bill) {



    this.token = localStorage.getItem('token');
    this.ht.post(this.rpo_url + "/BillingModel/", bill,
      {
        headers: {
          'X-Access-Token': this.token,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
    ).subscribe(


      res => {
        console.log(res)
        if (res) {
          this.ht.get(this.rpo_url + "/BillingModel", {
            headers: {
              "X-Access-Token": this.token
            }
          }).subscribe(res=> {
           
            this.ngOnInit();
          });
        }
       
      });

    this.router.navigate(['/home/bill'])
  }
  cancel() {
    this.router.navigate(['/home/bill'])
  }

}

