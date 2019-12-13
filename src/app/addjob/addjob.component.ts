import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from '../jobservice.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {


  addvalue;
  constructor(private router: Router, private s: JobserviceService) { }

  ngOnInit() {
  }
  addroute(q) {
    console.log(q);
    // localStorage.setItem('addvalue',this.addvalue);
    this.s.noticeadd(q).subscribe(res => { console.log(res) });

    this.router.navigate(['/home/job'])
  }
  cancel() {
    this.router.navigate(['/home/job'])
  }

}
