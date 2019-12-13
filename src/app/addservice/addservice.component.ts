import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  rpo_url = `${environment.serviceUrl}`;
  data: any;
  rol;
  token: string;
  constructor(private router: Router, private ht: HttpClient) { }

  ngOnInit() {
    this.ht.get(this.rpo_url + "/services/").subscribe(resp => {
      console.log(resp)
      this.rol = resp;
      this.data = this.rol.result;
    });
  }
  addservice(a){

    this.token = localStorage.getItem('token');
    this.ht.post(this.rpo_url + "/services/", a,
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
          this.ht.get(this.rpo_url + "/services", {
            headers: {
              "X-Access-Token": this.token
            }
          }).subscribe(rep=>{
            this.ngOnInit();
          })
        }

      });

    this.router.navigate(['/home/service'])
  }
  cancel() {
    this.router.navigate(['/home/service'])
  }

}
