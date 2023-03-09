import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GwspComponent } from './components/gwsp/gwsp.component';
import { NDPComponent } from './components/ndp/ndp.component';
import { NSPComponent } from './components/nsp/nsp.component';
import { SSPComponent } from './components/ssp/ssp.component';

const routes: Routes = [
  {
    path:'GWSP',component:GwspComponent
  },
  {
    path:'NDP',component:NDPComponent
  },
  {
    path:'NSP',component:NSPComponent
  },
  {
    path:'SSP',component:SSPComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
