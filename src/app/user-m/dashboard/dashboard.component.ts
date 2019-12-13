import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet, MultiDataSet } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [29, 47, 40, 20, 85], label: 'Series A' },
    { data: [65, 60, 80, 81, 55], label: 'Series B' }
    ];
    public lineChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010'];
    public lineChartOptions:ChartOptions = {
    responsive: true,
    };
    public lineChartColors: Color[] = [
    {
    borderColor: 'black',
    backgroundColor: '#D2F2F6',
    },
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
    public lineChartPlugins = [];
    public barChartOptions: ChartOptions = {
    responsive: true,
    };
    public barChartColors: Color[] = [
    {
    borderColor: 'black',
    backgroundColor: '#D2F2F6',
    },
    ];
    public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [];
    
    public barChartData: ChartDataSets[] = [
    { data: [29, 47, 40, 20, 85], label: 'Series A' },
    { data: [65, 60, 80, 81, 55], label: 'Series B' }
    ];
   
   
   
    
    public pieChartOptions: ChartOptions = {
    responsive: true,
    };
    // public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
    public pieChartData: SingleDataSet = [300, 500, 100];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];
    
    public doughnutChartLabels: Label[] = ['', '', ''];
    public doughnutChartData: MultiDataSet = [
    [350, 350, 350],
    [350, 350, 350],
    [350, 350, 350],
    ];
    public doughnutChartType: ChartType = 'doughnut';
   
    constructor(private r:Router,private p:HttpClient,private s:ServiceService) { }
tt;
tt9;
arr
data9: any;
arr1;
data1;
  ngOnInit() {









    this.tt=localStorage.getItem('token')
    console.log(this.tt)
    this.s.get(this.tt).subscribe(res=>{console.log(res)
    this.arr=res
    this.data1=this.arr.result
    localStorage.setItem('billing', JSON.stringify(this.data1));


    }
    );
  }
}
