import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  token
  constructor(private ht:HttpClient) { }
users;
usersList;
itemsp=4;
id
  ngOnInit() {
    this.token=localStorage.getItem("token")
    console.log(this.token)
    this.getdata()
  }

  getdata(){
    this.ht.get("http://192.168.1.137:8087/rpo/rest/Reg", {
      headers: {
        'X-Access-Token':this.token,
        'Content-Type': 'application/json'
      }}).subscribe(resp=> {

        this.users = resp;
        this.usersList = this.users.result;
        console.log(this.usersList) })
  }
  getid(e){
    console.log(e)
    this.id=e
  }

  update(e){
    console.log(e)
    let id={"id":e.reportingId}
// console.log(id)


let data={
  "contactNumber":e.contactNumber,
"ctc": e.ctc,
"doj":e.doj,
"email": e.email,
"extension": e.extension,
"firstName": e.firstName,
"lastName": e.lastName,
"maxtarget": e.maxtarget,
"mintarget": e.mintarget,
"name": e.name,
"password": e.password,
"status":e.status,
// "reportingId":id,
"role": e.role,
"salary": e.salary,
"targetduration": e.targetduration,
"variablepay": e.variablepay
}
    this.ht.post("http://192.168.1.137:8087/rpo/rest/Reg/"+this.id,data,{
      headers: {
        'X-Access-Token':this.token,
       'Content-Type': 'application/json'
     }
    }).subscribe(resp=>{
      console.log(resp)
      if(resp){
        this.getdata()
      }
    })
  }

}
