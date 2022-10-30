import { Component, OnInit } from '@angular/core';
import { IncidentProblemDTO } from '../model/incident-problem-dto';
import { IncidentsProblemsService } from '../services/incidents-problems.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-incident-problems',
  templateUrl: './incident-problems.component.html',
  styleUrls: ['./incident-problems.component.scss']
})
export class IncidentProblemsComponent implements OnInit {

  incidentsProblemsDTO: Observable<IncidentProblemDTO[]>;
  displayedColumns = ['id','description','type', 'creation', 'actions'];

  constructor(private incicidentsProblemsService: IncidentsProblemsService, private router:Router, private route:ActivatedRoute) {
    this.incidentsProblemsDTO = incicidentsProblemsService.list();
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
