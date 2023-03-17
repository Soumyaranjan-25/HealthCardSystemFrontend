import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../common/dashboard/dashboard.component';
import { ViewApplyCardComponent } from './view-apply-card/view-apply-card.component';

const routes: Routes = [
  { path:'',    component: DashboardComponent,    pathMatch: 'full'  },
  {
    path:'viewApplyCard',
    component: ViewApplyCardComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
