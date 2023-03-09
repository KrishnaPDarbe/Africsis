import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisoryBoardComponent } from './components/advisory-board/advisory-board.component';
import { PartnershipsComponent } from './components/partnerships/partnerships.component';
import { WhereWeWorkComponent } from './components/where-we-work/where-we-work.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';

const routes: Routes = [
  {path:'who-we-are',component:WhoWeAreComponent},
  {path:'where-we-work',component:WhereWeWorkComponent},
  {path:'partners',component:PartnershipsComponent},
  {path:'advisory-board',component:AdvisoryBoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
