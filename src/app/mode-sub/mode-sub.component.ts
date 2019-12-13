import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mode-sub',
  templateUrl: './mode-sub.component.html',
  styleUrls: ['./mode-sub.component.css']
})
export class ModeSubComponent implements OnInit {
  rpo_url = `${environment.serviceUrl}`;
data;
id;
totaldata;
  rol;
  token: string;
  details: any;

  constructor(private q:Router,private ht:HttpClient) { 
  }
  ngOnInit() {
    this.ht.get(this.rpo_url + "/modeofInterview/").subscribe(resp => {
      console.log(resp)
      this.rol = resp;
      this.details = this.rol.result;
    });
  }




save(mod){


  this.token = localStorage.getItem('token');
  this.ht.post(this.rpo_url + "/modeofInterview/", mod,
    {
      // headers: new HttpHeaders()
      // .set('Content-Type', "application/json;charset=UTF-8")
      // .set('X-Access-Token', this.token)
      headers: {
        'X-Access-Token': this.token,
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
  ).subscribe(


    res => {
      console.log(res)
      if (res) {
        this.ht.get(this.rpo_url + "/modeofInterview", {
          headers: {
            "X-Access-Token": this.token
          }
        }).subscribe(res=> {
         
          this.ngOnInit();
        });
      }
     
    });


  this.q.navigate(['home/moi']);


}
cancel() {
  this.q.navigate(['/home/moi'])
}


}




