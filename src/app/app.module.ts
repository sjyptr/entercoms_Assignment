import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { bootstrap } from 'bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule} from 'ag-grid-angular';
import { ChartsModule } from 'ng2-charts';
import { ReadyToShipComponent } from './ready-to-ship/ready-to-ship.component';
import { ReceivingComponent } from './receiving/receiving.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadyToShipComponent,
    ReceivingComponent
  ],
  imports: [
    BrowserModule,ChartsModule,
    AppRoutingModule,AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
