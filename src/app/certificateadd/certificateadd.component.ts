import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-certificateadd',
  templateUrl: './certificateadd.component.html',
  styleUrls: ['./certificateadd.component.css']
})
export class CertificateaddComponent implements OnInit {
  rpo_url = `${environment.serviceUrl}`;
  rol;
  data: any;
  token: string;

  constructor(private router: Router, private ht: HttpClient) { }

  ngOnInit() {
    this.ht.get(this.rpo_url + "/BillingModel/").subscribe(resp => {
      console.log(resp)
      this.rol = resp;
      this.data = this.rol.result;
    });
  }
  addCertificate(a){
 
    this.token = localStorage.getItem('token');
    this.ht.post(this.rpo_url + "/certificates/", a,
      {
        // headers: new HttpHeaders()
        // .set('Content-Type', "application/json;charset=UTF-8")
        // .set('X-Access-Token', this.token)
        headers: {
          'X-Access-Token': this.token,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
    ).subscribe(res => {
        console.log(res)
        if (res) {
          this.ht.get(this.rpo_url + "/certificates", {
            headers: {
              "X-Access-Token": this.token
            }
          }).subscribe(rep=>{
            this.ngOnInit();
          })
        }

      });

    this.router.navigate(['/home/certificates'])
  }
  cancel() {
    this.router.navigate(['/home/certificates'])
  }
}
