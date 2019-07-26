import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.css']
})
export class ReceivingComponent implements OnInit {

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
