import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module'

import { IncidentProblemRoutingModule } from './incident-problem-routing.module';
import { IncidentProblemsComponent } from './incident-problems/incident-problems.component';
import { IncidentProblemsFormComponent } from './incident-problems-form/incident-problems-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IncidentProblemsComponent,
    IncidentProblemsFormComponent
  ],
  imports: [
    CommonModule,
    IncidentProblemRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class IncidentProblemModule { }
