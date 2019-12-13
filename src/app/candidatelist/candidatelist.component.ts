import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatelist',
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.css']
})
export class CandidatelistComponent implements OnInit {
  token: string;
  details;
  data: any;
  constructor(private ht: HttpClient, private route: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem("token")
    console.log(this.token)
    this.customer();
  }

  customer() {
    this.ht.get("http://192.168.1.137:8089/rpo/rest/addCandidate/getAllCandidatesByAddedPerson/41/1/10?sortingOrder=undefined&sortingField=undefined&searchText=undefined&searchField=undefined", {
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

