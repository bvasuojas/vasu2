import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
 
@Component({
selector: 'app-addnotice',
templateUrl: './addnotice.component.html',
styleUrls: ['./addnotice.component.css']
})
export class AddnoticeComponent implements OnInit {
addvalue;
constructor(private router:Router,private s:ServiceService) { }
 
ngOnInit() {
 }
 
addroute(q){
console.log(q);
// localStorage.setItem('addvalue',this.addvalue);
this.s.noticeadd(q).subscribe(res=>{console.log(res)
alert("success")});
this.router.navigate(['home/notice'])
 }
cancel(){
this.router.navigate(['home/notice'])
 }
 
}