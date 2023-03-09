import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { GwspComponent } from './components/gwsp/gwsp.component';
import { CoreModule } from '../core/core.module';
import { NDPComponent } from './components/ndp/ndp.component';
import { NSPComponent } from './components/nsp/nsp.component';
import { SSPComponent } from './components/ssp/ssp.component';


@NgModule({
  declarations: [
    GwspComponent,
    NDPComponent,
    NSPComponent,
    SSPComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
