import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IncidentProblemsComponent } from './incident-problems/incident-problems.component';

const routes: Routes = [
  { path: '', component: IncidentProblemsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentProblemRoutingModule { }
