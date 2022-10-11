import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonComplianceRoutingModule } from './non-compliance-routing.module';
import { NonCompliencesComponent } from './non-compliences/non-compliences.component';


@NgModule({
  declarations: [
    NonCompliencesComponent
  ],
  imports: [
    CommonModule,
    NonComplianceRoutingModule
  ]
})
export class NonComplianceModule { }
