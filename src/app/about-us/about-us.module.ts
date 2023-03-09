import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from '../core/components/header/header.component';
import { WhereWeWorkComponent } from './components/where-we-work/where-we-work.component';
import { PartnershipsComponent } from './components/partnerships/partnerships.component';
import { AdvisoryBoardComponent } from './components/advisory-board/advisory-board.component';


@NgModule({
  declarations: [
    WhoWeAreComponent,
    WhereWeWorkComponent,
    PartnershipsComponent,
    AdvisoryBoardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
