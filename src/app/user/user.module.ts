import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ApplyCardComponent } from './apply-card/apply-card.component';
import { ViewCardDetailsComponent } from './view-card-details/view-card-details.component';


@NgModule({
  declarations: [
    ApplyCardComponent,
    ViewCardDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
