import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CusttypeService } from '../custtype.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addo',
  templateUrl: './addo.component.html',
  styleUrls: ['./addo.component.css']
})
export class AddoComponent implements OnInit {

  status:boolean=false;
  val;
   rpo_url =  `${environment.serviceUrl}`;
  token
  users
  usersList
  data

  constructor(private ht:HttpClient,private m:Router,private s:CusttypeService) { }

  ngOnInit() {
          this.token=localStorage.getItem("token")
      console.log(this.token)
      this.ht.get(this.rpo_url+"/customerType", {
        headers: {
          'X-Access-Token':this.token,
          'Content-Type': 'application/json'
        }}).subscribe(resp=> {
  
          this.users = resp;
          this.usersList = this.users.result;
          console.log(this.usersList) })
  }
  save(cu) {
    this.token = localStorage.getItem('token');
    this.ht.post(this.rpo_url + "/customerType/", cu,
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
          this.ht.get(this.rpo_url + "/customerType", {
            headers: {
              "X-Access-Token": this.token
            }
          }).subscribe(res=> {
           
            this.ngOnInit();
          });
        }
       
      });

    this.m.navigate(['/home/customer'])
  }
 mr(){
  this.m.navigate(['home/customer']);
 }
}
