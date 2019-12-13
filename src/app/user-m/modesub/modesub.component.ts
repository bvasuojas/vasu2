import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modesub',
  templateUrl: './modesub.component.html',
  styleUrls: ['./modesub.component.css']
})
export class ModesubComponent implements OnInit {


  data;
  id;
  totaldata;
  
    constructor(private q:Router,private hx:HttpClient) { 
    }
    ngOnInit() {
  
  
    }
  save(obj){
  
    console.log(obj);
    // this.hl.add(obj).subscribe(res=>console.log(res));
    this.q.navigate(['home/moi']);
  
  
  }
  
  
  }
  
  
  