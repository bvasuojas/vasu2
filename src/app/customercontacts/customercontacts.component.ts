import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-customercontacts',
  templateUrl: './customercontacts.component.html',
  styleUrls: ['./customercontacts.component.css']
})
export class CustomercontactsComponent implements OnInit {
  rpo_url = `${environment.serviceUrl}`;
  token: string;
  data: Object;
  details;


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


      console.log(this.data, "this from responce")

    });
  }
  id(c) {
    this.id = c.id
    console.log(this.id)
    this.route.navigate(['/home2/addcustomercontact'])
    // this.ht.post("http://192.168.1.137:8087/rpo/rest/addClientContact/findContactByBdmId/4/AM/1/10?sortField=undefined&sortOrder=undefined&searchField=undefined&searchText=undefined).subscribe()

  }
}
