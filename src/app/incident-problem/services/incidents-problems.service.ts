import { Injectable } from '@angular/core';
import { IncidentProblemDTO } from '../model/incident-problem-dto';
import { HttpClient } from '@angular/common/http'
import { tap, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class IncidentsProblemsService {

  private readonly API = '/assets/incidents.json';

  constructor( private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<IncidentProblemDTO[]>(this.API)
          .pipe(take(1), tap(incidents => console.log(incidents)));
  }
}
