import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentProblemsComponent } from './incident-problems.component';

describe('IncidentProblemsComponent', () => {
  let component: IncidentProblemsComponent;
  let fixture: ComponentFixture<IncidentProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentProblemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
