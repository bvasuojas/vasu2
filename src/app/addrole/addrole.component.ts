import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {
  addvalue;
  constructor(private router:Router,private s:ServiceService) { }
   
  ngOnInit() {
   }
   
  addroute(q){
  console.log(q);
  // localStorage.setItem('addvalue',this.addvalue);
  this.s.noticeadd(q).subscribe(res=>{console.log(res)
  alert("success")});
  this.router.navigate(['home/roles'])
   }
  cancel(){
  this.router.navigate(['home/roles'])
   }
}
