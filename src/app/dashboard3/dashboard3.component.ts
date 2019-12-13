import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component implements OnInit {
 
    public barChartOptions: ChartOptions = {
    responsive: true,
    };
    public barChartColors: Color[] = [
    {
    borderColor: 'black',
    backgroundColor: '#D2F2F6',
    },
    ];
    public barChartLabels: Label[] = ['Submission', 'Rejection'];
    public barChartLabels1: Label[] = ['Submission', 'Closure'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [];
    
    public barChartData: ChartDataSets[] = [
    { data: [29, 47, 40, 20, 85], label: '2018' },
    { data: [65, 60, 80, 81, 55], label: ' 2019' }
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
  constructor() { }

  ngOnInit() {
  }

}
