import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../common/dashboard/dashboard.component';
import { ApplyCardComponent } from './apply-card/apply-card.component';
import { ViewCardDetailsComponent } from './view-card-details/view-card-details.component';

const routes: Routes = [
  { path:'',    component: DashboardComponent,    pathMatch: 'full'  },
  {
    path:'applyCard',
    component: ApplyCardComponent,
    pathMatch: 'full'
  },
  {
    path:'viewCardDetails',
    component: ViewCardDetailsComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
