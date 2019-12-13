import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-billingmode',
  templateUrl: './billingmode.component.html',
  styleUrls: ['./billingmode.component.css']
})
export class BillingmodeComponent implements OnInit {

  arr: Object;
  

  constructor(private pi: ServiceService,private ht:HttpClient) { 

  }
  tabledata;
  p:number=1;

  ngOnInit() {
    this.tabledata = JSON.parse(localStorage.getItem('billing'));
    console.log("new",this.tabledata)
  }
  stat = false
  dataa
  id
  totaldata
  add2() {
    this.stat = true;
  }
  add3(a){
    this.stat=false
    console.log(a);
    localStorage.getItem('token')
     this.pi.add1(a).subscribe(resp=>console.log(resp))
     alert("Successfully added")
  }
  update(e) {
    console.log(e)
    this.dataa = e.billingModel;  
    this.id = e.id
  }
 
  update1(e) {
    console.log();
    this.totaldata = {
      'id': this.id,
      'billingModel': e
    }
    this.pi.post(this.totaldata).subscribe(resp => console.log(resp))
  }


  id1
  delete(e){
    console.log(e)
    this.id1=e.id
    console.log(this.id1)
     this.pi.del(this.id1).subscribe(resp=>console.log(resp))
  }

}
