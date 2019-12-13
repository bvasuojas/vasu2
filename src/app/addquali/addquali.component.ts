import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addquali',
  templateUrl: './addquali.component.html',
  styleUrls: ['./addquali.component.css']
})
export class AddqualiComponent implements OnInit {
  rpo_url = `${environment.serviceUrl}`;
  
  addvalue;
  token: string;
 constructor(private router:Router, private ht: HttpClient) { }
 
 ngOnInit() {
  this.ht.get(this.rpo_url + "/Qualification").subscribe(resp => {
    console.log(resp)
  });
 }

 
 addroute(a) {



  this.token = localStorage.getItem('token');
  this.ht.post(this.rpo_url + "/Qualification/", a,
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
        this.ht.get(this.rpo_url + "/Qualification", {
          headers: {
            "X-Access-Token": this.token
          }
        }).subscribe(res=> {
         
          this.ngOnInit();
        });
      }
     
    });

  this.router.navigate(['/home/qualification'])
}
//  addroute(q){
//  console.log(q);
//  // localStorage.setItem('addvalue',this.addvalue);
//  this.s.noticeadd(q).subscribe(res=>{console.log(res)});
 
//  this.router.navigate(['/home/qualification'])
//  }
 cancel(){
 this.router.navigate(['/home/qualification'])
 }

}
