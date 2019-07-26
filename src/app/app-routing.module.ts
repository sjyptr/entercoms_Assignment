import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadyToShipComponent} from '../app/ready-to-ship/ready-to-ship.component';
import { ReceivingComponent } from '../app/receiving/receiving.component';

const routes: Routes = [
  {
    path: 'ready',
    component: ReadyToShipComponent
  },
  {
    path: 'receiving',
    component: ReceivingComponent
  },
  {
    path: '',
    component: ReadyToShipComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
