import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IncidentProblemsComponent } from './incident-problems/incident-problems.component';
import { IncidentProblemsFormComponent } from './incident-problems-form/incident-problems-form.component';


const routes: Routes = [
  { path: '', component: IncidentProblemsComponent },
  { path: 'new', component: IncidentProblemsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentProblemRoutingModule { }
