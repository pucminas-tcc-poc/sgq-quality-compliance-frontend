import { Component, OnInit } from '@angular/core';
import { IncidentProblemDTO } from '../model/incident-problem-dto';
import { IncidentsProblemsService } from '../services/incidents-problems.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-incident-problems',
  templateUrl: './incident-problems.component.html',
  styleUrls: ['./incident-problems.component.scss']
})
export class IncidentProblemsComponent implements OnInit {

  incidentsProblemsDTO: Observable<IncidentProblemDTO[]>;
  displayedColumns = ['_id','title','type', 'creation'];

  constructor(private incicidentsProblemsService: IncidentsProblemsService) {
    this.incidentsProblemsDTO = incicidentsProblemsService.list();
  }

  ngOnInit(): void {
  }

}
