import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'incident-problem' },
  {
    path: 'incident-problem',
    loadChildren: () => import('./incident-problem/incident-problem.module').then(m => m.IncidentProblemModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
