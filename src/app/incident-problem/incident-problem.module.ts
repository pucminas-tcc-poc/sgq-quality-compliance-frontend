import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module'

import { IncidentProblemRoutingModule } from './incident-problem-routing.module';
import { IncidentProblemsComponent } from './incident-problems/incident-problems.component';



@NgModule({
  declarations: [
    IncidentProblemsComponent
  ],
  imports: [
    CommonModule,
    IncidentProblemRoutingModule,
    AppMaterialModule
  ]
})
export class IncidentProblemModule { }
