import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ready-to-ship',
  templateUrl: './ready-to-ship.component.html',
  styleUrls: ['./ready-to-ship.component.css']
})
export class ReadyToShipComponent implements OnInit {
  public mbarChartLabels:string[] = ['ST522', 'ST540', 'ST560'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartColors:Array<any> = [
  {
    backgroundColor: ['red','green','yellow','red','green','yellow','red','green','yellow']
    
  }
];
  public barChartData:any[] = [
    {data: [17, 55, 17], label: 'Top Customers'},
 
 ];

  constructor() { }

  ngOnInit() {
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  
  };
}
