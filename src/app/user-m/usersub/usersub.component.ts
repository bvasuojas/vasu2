import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersub',
  templateUrl: './usersub.component.html',
  styleUrls: ['./usersub.component.css']
})
export class UsersubComponent implements OnInit {

  token
  users
  usersList
  data
    constructor(private ht:HttpClient) { }
  
    ngOnInit() {
      this.token=localStorage.getItem("token")
      console.log(this.token)
      this.ht.get("http://192.168.1.137:8087/rpo/rest/Reg", {
        headers: {
          'X-Access-Token':this.token,
          'Content-Type': 'application/json'
        }}).subscribe(resp=> {
  
          this.users = resp;
          this.usersList = this.users.result;
          console.log(this.usersList) })
    }
  click(e){
  
  let id={"id":e.reportingId}
  // console.log(id)
  
  
  let data={
    "contactNumber":e.contactNumber,
  "ctc": e.ctc,
  "dob":e.dob,
  "doj":e.doj,
  "email": e.email,
  "extension": e.extension,
  "firstName": e.firstName,
  "lastName": e.lastName,
  "maxtarget": e.maxtarget,
  "mintarget": e.mintarget,
  "name": e.name,
  "password": e.password,
  "reportingId":id,
  "role": e.role,
  "salary": e.salary,
  "targetduration": e.targetduration,
  "variablepay": e.variablepay
  }
    console.log(data);
    this.ht.post("http://192.168.1.137:8087/rpo/rest/Reg",data,{
       headers: {
          'X-Access-Token':this.token,
         'Content-Type': 'application/json'
       }
    }).subscribe(resp=>(console.log(resp)))
  }
  
}