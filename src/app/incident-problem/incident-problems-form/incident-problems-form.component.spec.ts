import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentProblemsFormComponent } from './incident-problems-form.component';

describe('IncidentProblemsFormComponent', () => {
  let component: IncidentProblemsFormComponent;
  let fixture: ComponentFixture<IncidentProblemsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentProblemsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentProblemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
