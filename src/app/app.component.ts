import {GridOptions} from "ag-grid";
import { Component } from '@angular/core';
import { ReadyToShipComponent} from '../app/ready-to-ship/ready-to-ship.component';
import { ReceivingComponent } from '../app/receiving/receiving.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private gridOptions: GridOptions;
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

  constructor() {
      this.gridOptions = <GridOptions>{
        enableSorting: true,
        // enable filtering 
        enableFilter: false
      };
      this.gridOptions.columnDefs = [
        {
      headerName: '',
      field: 'myHeader',
      width: 40,
      checkboxSelection: function(params) {
          const displayedColumns = params.columnApi.getAllDisplayedColumns();
          return displayedColumns[0] === params.column;
      },
  },  
          {
              headerName: "Order No",
              field: "id",
              width:100
          },
          {
              headerName: "Customer",
              field: "customer",
              width:160
          },
            {
              headerName: "Order Date",
              field: "orderDate",
              width:200
          }, {
              
            headerName: "Quantity",
              field: "Quantity",
              width:130
          }
          , {
              headerName: "Order Cost",
              field: "orderCost",
              width:130
          }, {
              headerName: "OH City",
              field: "ohCity",
              width:130
          }
          , {
            headerName:  "PO Arrivals",
            field: "poArrivals",
            width:100
        }
        , {
          headerName: "po o/s Horizon",
          field: "pHorizon",
          width:130
      }, {
        headerName: "Actions",
        field: "action",
        width:180
    }
      ];
       

      this.gridOptions.rowData = [
          {id: 531143, customer: 'tata', item: 10, orderDate: '2013-4-03', Quantity: 10, orderCost:'$121212',ohCity:1,poArrivals:0,pHorizon:0,action:1},
          {id: 531654, customer: 'infosys', item: 10, Quantity: 10, orderDate: '2013-4-03', orderCost:'$121212',ohCity:1,poArrivals:0,pHorizon:0,action:1},
          {id: 531765, customer: 'HSBC', item: 10, Quantity: 10, orderDate: '2013-4-03', orderCost:'$121212',ohCity:1,poArrivals:0,pHorizon:0,action:1},
          {id: 531385, customer: 'HYDRIL PCB LTD', item: 10, Quantity: 10, orderDate: '2013-4-03', orderCost:'$121212',ohCity:1,poArrivals:0,pHorizon:0,action:1},

      ]
  }
   onQuickFilterChanged($event) {
      this.gridOptions.api.setQuickFilter($event.target.value);
  }


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  
  };

   
  
}