import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-addcustomercontact',
  templateUrl: './addcustomercontact.component.html',
  styleUrls: ['./addcustomercontact.component.css']
})
export class AddcustomercontactComponent implements OnInit {
  rpo_url = `${environment.serviceUrl}`;
  token: string;
  details;
  data: any;
  contactName: any;
  clientName: any;



  constructor(private ht: HttpClient, private route: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem("token")
    console.log(this.token)
    this.customer();
  }

  customer() {
    this.ht.get(this.rpo_url + "/addClientContact/findContactByBdmId/4/AM/1/10?sortField=undefined&sortOrder=undefined&searchField=undefined&searchText=undefined", {
      headers: {
        "X-Access-Token": this.token,
        'Content-Type': 'application/json'
      }
    }).subscribe(resp => {
      console.log(resp)
      this.details = resp

      this.data = this.details.result
      this.contactName = this.data[1].contactName
      this.clientName = this.data[0].clientName


      console.log(this.contactName, "this from responce")
      console.log(this.data, "this from responce")

    });
  }
}
