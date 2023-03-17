import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewApplyCardComponent } from './view-apply-card/view-apply-card.component';


@NgModule({
  declarations: [
    ViewApplyCardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
