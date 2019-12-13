import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpayment',
  templateUrl: './listpayment.component.html',
  styleUrls: ['./listpayment.component.css']
})
export class ListpaymentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
